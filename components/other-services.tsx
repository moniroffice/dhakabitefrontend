"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ServiceCategory {
  id: string
  title: string
  image: string
  link: string
  description: string
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "prebooking",
    title: "Prebooking",
    image: "/catering.png",
    link: "/prebooking",
    description: "Pre-order your meals for special events or future dates",
  },
  {
    id: "fast-food",
    title: "Fast Food",
    image: "/fast-food.png",
    link: "/services/fast-food",
    description: "Quick and delicious burgers, pizzas, and more",
  },
  {
    id: "snacks",
    title: "Snacks",
    image: "/snacks.png",
    link: "/services/snacks",
    description: "Light bites and appetizers for any occasion",
  },
  {
    id: "combo",
    title: "Combo Meals",
    image: "/food-plate.png",
    link: "/services/combo",
    description: "Value meal combinations with drinks and sides",
  },
]

export default function OtherServices() {
  const router = useRouter()

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 text-center">Other Services</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed text-center mb-12">
          At Dhaka Bite, we offer more than regular lunch and dinner.
          <br />
          From prebooking special meals to fast food, snacks and value combos — our extra services are designed to
          complement your every need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 border border-gray-100"
              onClick={() => router.push(category.link)}
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">{category.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <Link
                  href={category.link}
                  className="bg-gradient-to-r from-primary to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-primary transition-all duration-300 inline-block w-full text-center font-semibold"
                >
                  View {category.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
