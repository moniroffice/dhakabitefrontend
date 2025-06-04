import Link from "next/link"
import { Facebook, Instagram, Music } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <Link href="/" className="inline-block mb-4">
              <span className="text-secondary text-3xl font-bold">dhakabite</span>
            </Link>
            <p className="text-sm text-gray-200 mb-6">
              Lorem ipsum dolor sit amet consectetur. Nibh commodo fusce posuere aliquam morbi sagittis tempor. Sit sed
              nullam non urna malesuada elementum et. Turpis tellus purus vitae faucibus.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://facebook.com"
                className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://tiktok.com"
                className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Music size={20} />
              </Link>
            </div>
          </div>

          {/* Page Links */}
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Page</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:underline transition-colors">
                  About Dhakabite
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:underline transition-colors">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm hover:underline transition-colors">
                  Refund & Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Meal Menu */}
          <div className="col-span-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Meal Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu/simple" className="text-sm hover:underline transition-colors">
                  Simple Menu
                </Link>
              </li>
              <li>
                <Link href="/menu/standard" className="text-sm hover:underline transition-colors">
                  Standard Menu
                </Link>
              </li>
              <li>
                <Link href="/menu/premium" className="text-sm hover:underline transition-colors">
                  Premium Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Address</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <span className="font-medium">Email:</span> example@gmail.com
              </li>
              <li className="text-sm">
                <span className="font-medium">Mobile:</span> 01999-999990
              </li>
              <li className="text-sm">
                <span className="font-medium">Trade License:</span>
                <br />
                202526138690164477
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Dhaka Bite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
