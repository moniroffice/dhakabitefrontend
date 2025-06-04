import Image from "next/image"

export default function DeliveryArea() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Delivery Area</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Bibendum ultricies convallis mauris bibendum elementum vestibulum
          nisi. Etiam proin ornare mattis tincidunt. Turpis dictum amet mi aliquam. Quam eros eget convallis senectus
          velit vitae.
        </p>

        <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
          <Image src="/delivery-map.png" alt="Dhaka Bite Delivery Areas" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  )
}
