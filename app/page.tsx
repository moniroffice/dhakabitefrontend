import HeroSection from "@/components/hero-section"
import MenuPackages from "@/components/menu-packages"
import OurServices from "@/components/our-services"
import Testimonials from "@/components/testimonials"
import DeliveryArea from "@/components/delivery-area"
import OtherServices from "@/components/other-services"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MenuPackages />
      <OurServices />
      <OtherServices />
      <Testimonials />
      <DeliveryArea />
    </main>
  )
}
