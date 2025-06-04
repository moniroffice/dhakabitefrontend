"use client"

import { useState } from "react"
import { Search, LayoutDashboard, CreditCard, Utensils, Settings, LogOut, Plus, User, Users } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()
  const [upcomingSearch, setUpcomingSearch] = useState("")
  const [historySearch, setHistorySearch] = useState("")

  const upcomingMeals = [
    { id: 1, menuName: "Basic Menu", date: "Sunday/18 May, 2025", time: "Lunch", status: "Active", price: "65.00/-" },
    {
      id: 2,
      menuName: "Standard Menu",
      date: "Sunday/18 May, 2025",
      time: "Dinner",
      status: "Active",
      price: "80.00/-",
    },
    { id: 3, menuName: "Basic Menu", date: "Monday/19 May, 2025", time: "Lunch", status: "Inactive", price: "65.00/-" },
    {
      id: 4,
      menuName: "Premium Menu",
      date: "Tuesday/20 May, 2025",
      time: "Lunch",
      status: "Active",
      price: "120.00/-",
    },
    { id: 5, menuName: "Basic Menu", date: "Sunday/18 May, 2025", time: "Lunch", status: "Active", price: "65.00/-" },
    { id: 6, menuName: "Basic Menu", date: "Sunday/18 May, 2025", time: "Lunch", status: "Active", price: "65.00/-" },
    { id: 7, menuName: "Basic Menu", date: "Sunday/18 May, 2025", time: "Lunch", status: "Active", price: "65.00/-" },
  ]

  const mealHistory = [
    { id: 1, menuName: "Basic Menu", date: "Sunday/07 May, 2025", time: "Lunch", status: "Done", price: "65.00/-" },
    { id: 2, menuName: "Standard Menu", date: "Sunday/06 May, 2025", time: "Dinner", status: "Done", price: "80.00/-" },
    { id: 3, menuName: "Basic Menu", date: "Monday/05 May, 2025", time: "Lunch", status: "Cancel", price: "65.00/-" },
    { id: 4, menuName: "Premium Menu", date: "Tuesday/04 May, 2025", time: "Lunch", status: "Done", price: "120.00/-" },
    { id: 5, menuName: "Basic Menu", date: "Sunday/03 May, 2025", time: "Lunch", status: "Done", price: "65.00/-" },
    { id: 6, menuName: "Basic Menu", date: "Sunday/02 May, 2025", time: "Lunch", status: "Done", price: "65.00/-" },
    { id: 7, menuName: "Basic Menu", date: "Sunday/01 May, 2025", time: "Lunch", status: "Done", price: "65.00/-" },
  ]

  const filteredUpcoming = upcomingMeals.filter((meal) =>
    meal.menuName.toLowerCase().includes(upcomingSearch.toLowerCase()),
  )

  const filteredHistory = mealHistory.filter((meal) =>
    meal.menuName.toLowerCase().includes(historySearch.toLowerCase()),
  )

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">DB</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-primary text-white rounded-lg">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/subscription"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <CreditCard size={20} />
              <span>Subscription</span>
            </Link>
            <Link
              href="/dashboard/meal"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Utensils size={20} />
              <span>Meal</span>
            </Link>
            <Link
              href="/dashboard/references"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Users size={20} />
              <span>References</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg w-full"
          >
            <LogOut size={20} />
            <span>Log out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Dashboard</p>
          </div>

          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-80"
              />
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <User className="text-white" size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-900">Mr. Raja</p>
                <p className="text-sm text-gray-500">User</p>
              </div>
            </div>

            {/* Add Balance Button */}
            <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90">
              <span>Add Balance</span>
              <Plus size={16} />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm mb-2">Total Balance</h3>
              <p className="text-3xl font-bold text-gray-900">1000.00/-</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm mb-2">Total Meal</h3>
              <p className="text-3xl font-bold text-gray-900">100</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 text-sm mb-2">Total Reference</h3>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>
          </div>

          {/* Upcoming Meals */}
          <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Meal</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search Quotations..."
                  value={upcomingSearch}
                  onChange={(e) => setUpcomingSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Menu Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Time</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUpcoming.map((meal) => (
                    <tr key={meal.id}>
                      <td className="px-6 py-4 text-sm text-gray-900">{meal.menuName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{meal.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{meal.time}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            meal.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {meal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{meal.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Previous Meal History */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Previous Meal History</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search Quotations..."
                  value={historySearch}
                  onChange={(e) => setHistorySearch(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Menu Name</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Time</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredHistory.map((meal) => (
                    <tr key={meal.id}>
                      <td className="px-6 py-4 text-sm text-gray-900">{meal.menuName}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{meal.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{meal.time}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                            meal.status === "Done" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {meal.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{meal.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
