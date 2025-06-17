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

  // Auto-change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

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
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel Images */}
      <div className="absolute inset-0 w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Food background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Overlay */}
      <div className="relative z-30 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Healthy, affordable meals that taste like home — only at{" "}
              <span className="text-secondary">Dhaka Bite.</span>
            </h1>

            {/* <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
              At <span className="font-medium text-secondary">Dhaka Bite</span>, we believe everyone deserves the warmth
              of a homemade meal—whether you're working late, living alone, or simply craving something real. We offer
              affordable, tasty, and hygienic lunch & dinner packages delivered right to your doorstep.
            </p>

            <p className="text-secondary font-medium text-xl mb-8">"Your satisfaction is our recipe!"</p> */}

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/all-package/foods" className="btn-primary text-lg px-8 py-4">
                Order Now
              </Link>
              <button
                onClick={handleContactClick}
                className="bg-white/10 backdrop-blur-sm text-white border border-white/30 font-medium py-4 px-8 rounded-md hover:bg-white/20 transition-all flex items-center justify-center gap-2 relative text-lg"
              >
                <Phone size={20} />
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
                className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-md hover:bg-white/20 transition-colors border border-white/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-md hover:bg-white/20 transition-colors border border-white/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://tiktok.com"
                className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-md hover:bg-white/20 transition-colors border border-white/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Music size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-20 border border-white/30"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-20 border border-white/30"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full transition-all border-2 ${
              index === currentImageIndex
                ? "bg-secondary border-secondary"
                : "bg-white/30 border-white/50 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}