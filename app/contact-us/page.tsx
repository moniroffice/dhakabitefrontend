import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Dhaka Bite",
  description: "Get in touch with Dhaka Bite for any questions, feedback, or support.",
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
    </main>
  )
}
