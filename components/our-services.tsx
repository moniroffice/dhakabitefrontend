"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight, Minus, Plus } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/hooks/useCart"
import { useToast } from "@/hooks/use-toast"
import type { CartItem } from "@/store/slices/cartSlice"

// Menu item interface
interface MenuItem {
  id: string
  type: "Basic" | "Standard" | "Premium"
  mealType: "lunch" | "dinner"
  image: string
  price: number
  day: string
  date: string
  items: {
    main: string
    sides: string[]
    protein: {
      name: string
      quantity?: string
    }
  }
}

// Days of the week
const daysOfWeek = ["Friday", "Saturday", "Sunday", "Monday"]

// Function to get the next date for a given day
const getNextDateForDay = (dayName: string): string => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const today = new Date()
  const todayDayIndex = today.getDay()
  const targetDayIndex = days.indexOf(dayName)

  let daysToAdd = targetDayIndex - todayDayIndex
  if (daysToAdd <= 0) daysToAdd += 7

  const targetDate = new Date(today)
  targetDate.setDate(today.getDate() + daysToAdd)

  return `${dayName}/${targetDate.getDate()} ${targetDate.toLocaleString("default", { month: "short" })}`
}

// Generate menu items for each type
const generateMenuItems = (type: "Basic" | "Standard" | "Premium"): MenuItem[] => {
  const menuConfig = {
    Basic: {
      lunch: {
        price: 65,
        image: "/curry-rice-fish-bowl.png",
        protein: { name: "Fish", quantity: "1 piece" },
      },
      dinner: {
        price: 65,
        image: "/bengali-fish-dish.jpg",
        protein: { name: "Fish", quantity: "1 piece" },
      },
    },
    Standard: {
      lunch: {
        price: 80,
        image: "/fried-chicken.png",
        protein: { name: "Chicken", quantity: "2 pieces" },
      },
      dinner: {
        price: 80,
        image: "/bengali-food-curry.jpg",
        protein: { name: "Chicken", quantity: "2 pieces" },
      },
    },
    Premium: {
      lunch: {
        price: 120,
        image: "/beef-curry.png",
        protein: { name: "Beef", quantity: "4 pieces" },
      },
      dinner: {
        price: 120,
        image: "/bengali-food-platter.jpg",
        protein: { name: "Beef", quantity: "4 pieces" },
      },
    },
  }

  const config = menuConfig[type]
  const items: MenuItem[] = []

  // Generate items for each day of the week (first 2 days for home page)
  daysOfWeek.slice(0, 2).forEach((day, dayIndex) => {
    // Lunch
    items.push({
      id: `${type.toLowerCase()}-${dayIndex}-lunch`,
      type,
      mealType: "lunch",
      image: config.lunch.image,
      price: config.lunch.price,
      day,
      date: getNextDateForDay(day),
      items: {
        main: "Rice",
        sides: ["Vegetables", "Lentils"],
        protein: config.lunch.protein,
      },
    })

    // Dinner
    items.push({
      id: `${type.toLowerCase()}-${dayIndex}-dinner`,
      type,
      mealType: "dinner",
      image: config.dinner.image,
      price: config.dinner.price,
      day,
      date: getNextDateForDay(day),
      items: {
        main: "Rice",
        sides: ["Vegetables", "Lentils"],
        protein: config.dinner.protein,
      },
    })
  })

  return items
}

// Sample menu data - generate for all types
const allMenuItems: MenuItem[] = [
  ...generateMenuItems("Basic"),
  ...generateMenuItems("Standard"),
  ...generateMenuItems("Premium"),
]

export default function OurServices() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const { addToCart } = useCart()
  const { toast } = useToast()

  // Group menu items by type and day
  const basicMenuItems = allMenuItems.filter((item) => item.type === "Basic")
  const standardMenuItems = allMenuItems.filter((item) => item.type === "Standard")
  const premiumMenuItems = allMenuItems.filter((item) => item.type === "Premium")

  // Function to handle quantity changes
  const updateQuantity = (id: string, change: number) => {
    setQuantities((prev) => {
      const currentQuantity = prev[id] || 1
      const newQuantity = Math.max(1, currentQuantity + change)
      return { ...prev, [id]: newQuantity }
    })
  }

  // Function to handle adding to cart
  const handleAddToCart = async (item: MenuItem) => {
    const quantity = quantities[item.id] || 1

    const cartItem: CartItem = {
      id: `${item.id}-${Date.now()}`,
      name: `${item.type} ${item.mealType.charAt(0).toUpperCase() + item.mealType.slice(1)} - ${item.day}`,
      price: item.price,
      quantity,
      image: item.image,
      date: item.date,
      mealType: item.mealType,
      menuType: item.type,
      ingredients: [
        { name: item.items.main, quantity: "200 gm" },
        { name: item.items.protein.name, quantity: item.items.protein.quantity || "1 piece" },
        ...item.items.sides.map((side) => ({
          name: side,
          quantity: side === "Vegetables" ? "100 gm" : "50 gm",
        })),
      ],
    }

    try {
      await addToCart(cartItem)
      toast({
        title: "Added to cart",
        description: `${quantity} x ${item.type} ${item.mealType} (${item.day}) added to your cart`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not add item to cart. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Component for a single meal card
  const MealCard = ({ item }: { item: MenuItem }) => {
    const quantity = quantities[item.id] || 1

    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
        {/* Food Image with Badges */}
        <div className="relative">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={`${item.type} ${item.mealType} - ${item.day}`}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          {/* Meal Type Badge */}
          <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
            {item.mealType.charAt(0).toUpperCase() + item.mealType.slice(1)}
          </div>
          {/* Price Badge */}
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">{item.price}/-</div>
        </div>

        {/* Meal Details */}
        <div className="p-4">
          {/* Meal Type Title */}
          <h3 className="text-lg font-semibold mb-4 text-center">
            {item.mealType.charAt(0).toUpperCase() + item.mealType.slice(1)}
          </h3>

          {/* Ingredients List */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Check size={16} className="text-green-600 mr-2" />
                <span>{item.items.main}</span>
              </div>
              <span className="text-gray-600 text-sm">200 gm</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Check size={16} className="text-green-600 mr-2" />
                <span>{item.items.protein.name}</span>
              </div>
              <span className="text-gray-600 text-sm">{item.items.protein.quantity}</span>
            </div>
            {item.items.sides.map((side, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Check size={16} className="text-green-600 mr-2" />
                  <span>{side}</span>
                </div>
                <span className="text-gray-600 text-sm">{side === "Vegetables" ? "100 gm" : "50 gm"}</span>
              </div>
            ))}
          </div>

          {/* Quantity Controls and Add to Cart Button */}
          <div className="flex items-center justify-between">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                <Minus size={16} />
              </button>
              <span className="px-3 py-1 border-x border-gray-300">{quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center"
            >
              <Check size={16} className="mr-1" />
              Add Cart
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Component for a package section
  const PackageSection = ({ items, type }: { items: MenuItem[]; type: string }) => {
    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">{type} Menu</h3>

        {/* Show all 4 items (2 days × 2 meals) in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {items.map((item) => (
            <MealCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <Link
            href={`/menu/${type.toLowerCase()}`}
            className="text-primary font-medium flex items-center hover:underline"
          >
            See More <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          At Dhaka Bite, we provide freshly prepared, home-style meals through three convenient options Basic, Standard,
          and Premium Menu. All our meals are cooked with care, delivered on time, and we never compromise on hygiene or
          taste.
        </p> */}

        <PackageSection items={basicMenuItems} type="Basic" />
        <PackageSection items={standardMenuItems} type="Standard" />
        <PackageSection items={premiumMenuItems} type="Premium" />
      </div>
    </section>
  )
}
