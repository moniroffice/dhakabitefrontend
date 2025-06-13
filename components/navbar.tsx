"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Menu, X, CreditCard, LogOut } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/useAuth"
import { useCart } from "@/hooks/useCart"
import { useDispatch } from "react-redux"
import { logout } from "@/store/slices/authSlice"
import { useLogoutMutation } from "@/store/api/authApi"
import CartModal from "./cart-modal"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { toast } = useToast()
  const pathname = usePathname()
  const dispatch = useDispatch()

  const { user, isAuthenticated } = useAuth()
  const { totalItems } = useCart()
  const [logoutMutation] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logoutMutation().unwrap()
      dispatch(logout())
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      })
    } catch (error) {
      // Even if server logout fails, clear local state
      dispatch(logout())
      toast({
        title: "Logged out",
        description: "You have been logged out.",
      })
    }
  }

  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Function to get the appropriate class for a navigation link
  const getLinkClass = (path: string) => {
    return `font-medium ${isActive(path) ? "text-secondary" : "text-gray-800 hover:text-primary"} transition-colors`
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <>
      <nav className="bg-white py-4 shadow-sm">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-secondary text-2xl font-bold">dhaka bite</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link href="/subscription" className={getLinkClass("/subscription")}>
              Subscription
            </Link>
            <Link href="/blogs" className={getLinkClass("/blogs")}>
              Blogs
            </Link>
            <Link href="/contact-us" className={getLinkClass("/contact-us")}>
              Contact Us
            </Link>
            <Link href="/offers" className={getLinkClass("/offers")}>
              Offers
            </Link>
          </div>

          {/* User Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Check Balance - Only show if authenticated */}
            {isAuthenticated && (
              <button
                className={`flex items-center gap-1 border rounded-full px-4 py-1.5 transition-all duration-[2000ms] ease-in-out relative overflow-hidden w-[180px] justify-center border-primary hover:text-white text-primary group`}
              >
                <div className="absolute inset-0 bg-primary transition-transform duration-[2000ms] ease-in-out -translate-x-full group-hover:translate-x-0"></div>
                <CreditCard size={16} className="relative z-10" />
                <span className="relative z-10">
                  <span className="group-hover:hidden">Check Balance</span>
                  <span className="hidden group-hover:inline">৳{user?.balance?.toLocaleString() || "0"}</span>
                </span>
              </button>
            )}

            {/* Cart */}
            <div className="relative">
              <button onClick={toggleCart} className="flex items-center">
                <ShoppingCart className={isActive("/cart") ? "text-secondary" : "text-primary"} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Authentication */}
            {!isAuthenticated ? (
              <Link
                href="/login"
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {user?.profilePicture ? (
                      <Image
                        src={user.profilePicture || "/placeholder.svg"}
                        alt={user.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={20} className="text-gray-600" />
                    )}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-xs text-gray-500">User</p>
                  </div>
                </div>
                <button onClick={handleLogout} className="text-gray-500 hover:text-primary" title="Logout">
                  <LogOut size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Actions - Cart and Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Cart - Always visible on mobile */}
            <div className="relative">
              <button onClick={toggleCart} className="flex items-center">
                <ShoppingCart className={isActive("/cart") ? "text-secondary" : "text-primary"} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-md">
            <div className="flex flex-col space-y-4">
              <Link href="/" className={`${getLinkClass("/")} block`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/subscription"
                className={`${getLinkClass("/subscription")} block`}
                onClick={() => setIsMenuOpen(false)}
              >
                Subscription
              </Link>
              <Link href="/blogs" className={`${getLinkClass("/blogs")} block`} onClick={() => setIsMenuOpen(false)}>
                Blogs
              </Link>
              <Link
                href="/contact-us"
                className={`${getLinkClass("/contact-us")} block`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link href="/offers" className={`${getLinkClass("/offers")} block`} onClick={() => setIsMenuOpen(false)}>
                Offers
              </Link>

              <div className="pt-2 border-t border-gray-200">
                {/* Check Balance - Mobile - Only show if authenticated */}
                {isAuthenticated && (
                  <button className="flex items-center gap-1 text-primary w-full py-2">
                    <CreditCard size={16} />
                    <span>Balance: ৳{user?.balance?.toLocaleString() || "0"}</span>
                  </button>
                )}

                {/* Authentication - Mobile */}
                {!isAuthenticated ? (
                  <Link
                    href="/login"
                    className="flex items-center gap-1 text-primary w-full py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={16} />
                    <span>Login</span>
                  </Link>
                ) : (
                  <div className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        {user?.profilePicture ? (
                          <Image
                            src={user.profilePicture || "/placeholder.svg"}
                            alt={user.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User size={20} className="text-gray-600" />
                        )}
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">{user?.name}</p>
                        <p className="text-xs text-gray-500">User</p>
                      </div>
                    </div>
                    <button onClick={handleLogout} className="text-gray-500 hover:text-primary">
                      <LogOut size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}