"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import axiosClient from "@/store/api/axiosClient"

interface Location {
  _id: string
  title: string
  image: string
}

export default function DeliveryArea() {
  const [location, setLocation] = useState<Location | null>(null)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await axiosClient.get("/location")
        if (res.data.status && res.data.data) {
          setLocation(res.data.data)
        }
      } catch (err) {
        console.error("Failed to fetch delivery area:", err)
      }
    }

    fetchLocation()
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Delivery Area</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          We currently deliver to areas like <strong>{location?.title}</strong> and nearby zones in Dhaka city.
        </p>

        {location?.image && (
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src={location.image}
              alt={`${location.title} Delivery Area`}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  )
}
