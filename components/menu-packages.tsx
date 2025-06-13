"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Star, Clock, Users } from "lucide-react"

const menuPackages = [
  {
    id: "basic",
    name: "Basic Menu",
    price: 65,
    originalPrice: 80,
    image: "/curry-rice-fish-bowl.png",
    bgImage: "/basic-menu-bg.jpg",
    description: "Perfect for everyday dining with nutritious home-style meals",
    features: [
      "Fresh daily meals",
      "Fish protein",
      "Rice & vegetables",
      "Lentils included",
      "Home-style cooking",
      "Hygienic preparation",
    ],
    popular: false,
    savings: "Save ৳15",
    //deliveryTime: "30-45 mins",
    serves: "1 Person",
  },
  {
    id: "standard",
    name: "Standard Menu",
    price: 80,
    originalPrice: 100,
    image: "/fried-chicken.png",
    bgImage: "/standard-menu-bg.jpg",
    description: "Enhanced meals with chicken protein and extra variety",
    features: [
      "Premium ingredients",
      "Chicken protein (2 pcs)",
      "Rice & vegetables",
      "Lentils & curry",
      "Special seasoning",
      "Quality assurance",
    ],
    popular: true,
    savings: "Save ৳20",
    //deliveryTime: "25-40 mins",
    serves: "1 Person",
  },
  {
    id: "premium",
    name: "Premium Menu",
    price: 120,
    originalPrice: 150,
    image: "/beef-curry.png",
    bgImage: "/premium-menu-bg.jpg",
    description: "Our finest offering with premium beef and gourmet preparations",
    features: [
      "Gourmet ingredients",
      "Beef protein (4 pcs)",
      "Basmati rice",
      "Premium vegetables",
      "Special curry",
      "Chef's special",
    ],
    popular: false,
    savings: "Save ৳30",
    //deliveryTime: "20-35 mins",
    serves: "1 Person",
  },
]

export default function MenuPackages() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900">Choose Your Perfect Menu</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted meal packages designed to satisfy your taste buds and nutritional needs. From
            budget-friendly basics to premium gourmet experiences.
          </p>
        </div>

        {/* Menu Cards Grid - Mobile Responsive: 2+1 Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {menuPackages.map((menu, index) => (
            <div
              key={menu.id}
              className={`
                relative group cursor-pointer transform transition-all duration-300 hover:scale-105
                ${index === 2 ? "col-span-2 md:col-span-1" : ""}
              `}
            >
              {/* Popular Badge */}
              {menu.popular && (
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <Star size={12} className="mr-1 fill-current" />
                    POPULAR
                  </div>
                </div>
              )}

              {/* Savings Badge */}
              <div className="absolute top-3 left-3 z-20">
                <div className="bg-green-600 text-white px-2 py-1 rounded-md text-xs font-semibold">{menu.savings}</div>
              </div>

              {/* Card Container */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full">
                {/* Background Image Header */}
                <div
                  className="relative h-32 md:h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url('${menu.bgImage}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Food Image */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                      <Image
                        src={menu.image || "/placeholder.svg"}
                        alt={menu.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="pt-10 md:pt-12 pb-6 px-4 md:px-6">
                  {/* Menu Name */}
                  <h3 className="text-lg md:text-xl font-bold text-center mb-2 text-gray-900">{menu.name}</h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-600 text-center mb-4 leading-relaxed">
                    {menu.description}
                  </p>

                  {/* Price Section */}
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-2xl md:text-3xl font-bold text-primary">৳{menu.price}</span>
                      <span className="text-sm md:text-base text-gray-400 line-through">৳{menu.originalPrice}</span>
                    </div>
                    <p className="text-xs text-gray-500">Per meal</p>
                  </div>

                  {/* Quick Info */}
                  <div className="flex justify-between items-center mb-4 text-xs text-gray-600">
                    {/* <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      <span>{menu.//deliveryTime}</span>
                    </div> */}
                    <div className="flex items-center">
                      <Users size={12} className="mr-1" />
                      <span>{menu.serves}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1 mb-6">
                    {menu.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs md:text-sm text-gray-700">
                        <Check size={12} className="text-green-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {menu.features.length > 4 && (
                      <div className="text-xs text-gray-500 text-center pt-1">
                        +{menu.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <Link href={`/menu/${menu.id}`}>
                    <button className="w-full bg-gradient-to-r from-primary to-green-600 text-white py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:from-green-600 hover:to-primary transform hover:-translate-y-0.5">
                      View Menu
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">Can't Decide? Try Our Mixed Package!</h3>
          <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the best of all worlds with our weekly mixed package. Different menu types throughout the week to keep
            your meals exciting and varied.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/all-package/foods">
              <button className="bg-primary text-white px-6 md:px-8 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-primary/90 transition-colors">
                View All Packages
              </button>
            </Link>
            <Link href="/subscription">
              <button className="border-2 border-primary text-primary px-6 md:px-8 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-primary hover:text-white transition-colors">
                Subscribe Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
