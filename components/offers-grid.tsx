"use client"

import { useState } from "react"
import { Clock, Star, Tag } from "lucide-react"

interface Offer {
  id: number
  title: string
  description: string
  image: string
  originalPrice: number
  discountedPrice: number
  discount: number
  validUntil: string
  category: string
  rating: number
  isPopular?: boolean
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Weekend Family Feast",
    description: "Complete family meal package with rice, curry, fish, and vegetables for 4 people",
    image: "/curry-rice-fish-bowl.png",
    originalPrice: 800,
    discountedPrice: 600,
    discount: 25,
    validUntil: "Dec 31, 2024",
    category: "Family Pack",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: 2,
    title: "Student Special Combo",
    description: "Affordable meal combo perfect for students with rice, curry, and a side dish",
    image: "/beef-curry.png",
    originalPrice: 200,
    discountedPrice: 150,
    discount: 25,
    validUntil: "Dec 25, 2024",
    category: "Student Deal",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Premium Dinner Set",
    description: "Luxurious dinner experience with premium ingredients and chef's special preparations",
    image: "/fried-chicken.png",
    originalPrice: 1200,
    discountedPrice: 840,
    discount: 30,
    validUntil: "Jan 15, 2025",
    category: "Premium",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: 4,
    title: "Quick Lunch Deal",
    description: "Fast and delicious lunch option for busy professionals",
    image: "/sandwich-fries.png",
    originalPrice: 300,
    discountedPrice: 225,
    discount: 25,
    validUntil: "Dec 30, 2024",
    category: "Lunch",
    rating: 4.3,
  },
  {
    id: 5,
    title: "Healthy Choice Package",
    description: "Nutritious and balanced meal with fresh vegetables and lean proteins",
    image: "/food-plate.png",
    originalPrice: 450,
    discountedPrice: 360,
    discount: 20,
    validUntil: "Jan 10, 2025",
    category: "Healthy",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Midnight Snack Special",
    description: "Late night comfort food delivery with your favorite snacks and beverages",
    image: "/fast-food.png",
    originalPrice: 350,
    discountedPrice: 280,
    discount: 20,
    validUntil: "Dec 28, 2024",
    category: "Snacks",
    rating: 4.4,
  },
]

export default function OffersGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const offersPerPage = 6
  const totalPages = Math.ceil(offers.length / offersPerPage)

  const startIndex = (currentPage - 1) * offersPerPage
  const currentOffers = offers.slice(startIndex, startIndex + offersPerPage)

  const handleClaimOffer = (offerId: number) => {
    // Add to cart or navigate to specific offer page
    console.log(`Claiming offer ${offerId}`)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Current Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss out on these amazing deals! Limited time offers on your favorite meals.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentOffers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offer.image || "/placeholder.svg"}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full font-bold text-sm">
                  {offer.discount}% OFF
                </div>

                {/* Popular Badge */}
                {offer.isPopular && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1">
                    <Star size={14} fill="currentColor" />
                    Popular
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary text-sm font-medium bg-primary/10 px-2 py-1 rounded-full">
                    {offer.category}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-gray-600 text-sm">{offer.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{offer.description}</p>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">৳{offer.discountedPrice}</span>
                  <span className="text-gray-400 line-through">৳{offer.originalPrice}</span>
                  <span className="text-green-600 text-sm font-medium">
                    Save ৳{offer.originalPrice - offer.discountedPrice}
                  </span>
                </div>

                {/* Validity */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <Clock size={16} />
                  <span>Valid until {offer.validUntil}</span>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleClaimOffer(offer.id)}
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Tag size={18} />
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? "bg-primary text-white"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
