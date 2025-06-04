import NotificationBar from "@/components/notification-bar"
import Navbar from "@/components/navbar"
import PrivacyContent from "@/components/privacy-content"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Dhaka Bite",
  description: "Privacy policy for Dhaka Bite's food ordering and delivery services.",
}

export default function PrivacyPage() {
  return (
    <main>
      <NotificationBar />
      <Navbar />
      <div className="py-12 bg-white">
        <div className="container-custom">
          <PrivacyContent />
        </div>
      </div>
      <Footer />
    </main>
  )
}
