import NotificationBar from "@/components/notification-bar"
import Navbar from "@/components/navbar"
import TermsContent from "@/components/terms-content"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Dhaka Bite",
  description: "Terms and conditions for using Dhaka Bite's food ordering and delivery services.",
}

export default function TermsPage() {
  return (
    <main>
      <NotificationBar />
      <Navbar />
      <div className="py-12 bg-white">
        <div className="container-custom">
          <TermsContent />
        </div>
      </div>
      <Footer />
    </main>
  )
}
