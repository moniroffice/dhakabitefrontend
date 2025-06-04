"use client"

import Link from "next/link"
import { Facebook, Instagram, Music, Phone, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const phoneNumber = "01400650261"

  // Carousel images
  const carouselImages = ["/food-plate.jpg", "/bengali-food-platter.jpg", "/food-spread-overhead.jpg"]

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [carouselImages.length])

  const handleContactClick = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setShowCopiedMessage(true)

      // Hide the message after 3 seconds
      setTimeout(() => {
        setShowCopiedMessage(false)
      }, 3000)

      // Also initiate phone call
      window.location.href = `tel:${phoneNumber}`
    } catch (err) {
      console.error("Failed to copy phone number:", err)
      // Fallback: still try to initiate phone call
      window.location.href = `tel:${phoneNumber}`
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1))
  }

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Healthy, affordable meals that taste like home — only at <span className="text-primary">Dhaka Bite.</span>
            </h1>

            <p className="text-black mb-6">
              At <span className="font-medium">Dhaka Bite</span>, we believe everyone deserves the warmth of a homemade
              meal—whether you're working late, living alone, or simply craving something real. We offer affordable,
              tasty, and hygienic lunch & dinner packages delivered right to your doorstep.
            </p>

            <p className="text-black font-medium mb-8">"Your satisfaction is our recipe!"</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/all-package/foods" className="btn-primary">
                Order Now
              </Link>
              <button
                onClick={handleContactClick}
                className="btn-outline flex items-center justify-center gap-2 relative"
              >
                <Phone size={16} />
                <span>Contact Now</span>
                {showCopiedMessage && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap z-10">
                    Phone number copied!
                  </div>
                )}
              </button>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                className="bg-primary text-white p-2 rounded-md hover:bg-opacity-90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-primary text-white p-2 rounded-md hover:bg-opacity-90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://tiktok.com"
                className="bg-primary text-white p-2 rounded-md hover:bg-opacity-90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Music size={20} />
              </Link>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Food carousel ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
