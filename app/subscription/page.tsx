import SubscriptionHero from "@/components/subscription-hero"
import SubscriptionPlans from "@/components/subscription-plans"
import OtherServices from "@/components/other-services"
import Testimonials from "@/components/testimonials"
import DeliveryArea from "@/components/delivery-area"
import type { Metadata } from "next"
import Footer from "@/components/footer"
import HeroSection from "@/components/HeroSection"

export const metadata: Metadata = {
  title: "Subscription Plans | Dhaka Bite",
  description: "Choose from our range of subscription plans for regular meal delivery.",
}

export default function SubscriptionPage() {
  return (
    <main>
      <HeroSection
        title="Subscription Plans"
        description="Choose from our range of subscription plans for regular meal delivery."
        backgroundImage="/subscription-hero-bg.jpg"
      />
      <SubscriptionPlans />
      <OtherServices />
      <Testimonials />
      <DeliveryArea />
      <Footer />
    </main>
  )
}
