import Image from "next/image"
import Link from "next/link"

interface ServiceItem {
  id: string
  title: string
  image: string
  link: string
}

const serviceItems: ServiceItem[] = [
  {
    id: "cold-drinks",
    title: "Cold Drinks",
    image: "/cold-drinks.png",
    link: "/services/cold-drinks",
  },
  {
    id: "fast-food",
    title: "Fast Food",
    image: "/fast-food.png",
    link: "/services/fast-food",
  },
  {
    id: "catering",
    title: "Catering Service",
    image: "/catering.png",
    link: "/services/catering",
  },
  {
    id: "snacks",
    title: "Snacks & Combos",
    image: "/snacks.png",
    link: "/services/snacks",
  },
]

export default function OtherServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Other Services</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          At Dhaka Bite, we offer more than regular lunch and dinner.
          <br />
          From refreshing cold drinks and quick fast food to party-ready catering and tasty snack combos — our extra
          services are designed to complement your every need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="relative h-48 w-full mb-3 overflow-hidden rounded-lg">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <Link
                  href={item.link}
                  className="bg-primary text-white px-4 py-1.5 text-sm rounded hover:bg-primary/90 transition-colors"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
