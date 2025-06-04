"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Calendar, Utensils, Settings, Users, LogOut } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"
import { useDispatch } from "react-redux"
import { logout } from "@/store/slices/authSlice"
import { useRouter } from "next/navigation"
import ProtectedRoute from "@/components/auth/ProtectedRoute"

const sidebarItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/subscription", label: "Subscription", icon: Calendar },
  { href: "/dashboard/meal", label: "Meal Plan", icon: Utensils },
  { href: "/dashboard/references", label: "References", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { user } = useAuth()
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    dispatch(logout())
    router.push("/")
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white shadow-lg">
            <div className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{user?.name?.charAt(0).toUpperCase() || "U"}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{user?.name || "User"}</h3>
                  <p className="text-sm text-gray-500">Balance: ৳{user?.balance || 0}</p>
                </div>
              </div>
            </div>

            <nav className="px-4 pb-4">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start mb-2 ${
                        isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="mr-3 h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                )
              })}

              <Button
                variant="ghost"
                className="w-full justify-start mt-4 text-red-600 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="mr-3 h-4 w-4" />
                Logout
              </Button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <Card>
              <CardContent className="p-6">{children}</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
