import SubscriptionHero from "@/components/subscription-hero"
import SubscriptionPlans from "@/components/subscription-plans"
import OtherServices from "@/components/other-services"
import Testimonials from "@/components/testimonials"
import DeliveryArea from "@/components/delivery-area"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Subscription Plans | Dhaka Bite",
  description: "Choose from our range of subscription plans for regular meal delivery.",
}

export default function SubscriptionPage() {
  return (
    <main>
      <SubscriptionHero />
      <SubscriptionPlans />
      <OtherServices />
      <Testimonials />
      <DeliveryArea />
    </main>
  )
}
