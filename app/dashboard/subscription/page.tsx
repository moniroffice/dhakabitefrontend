"use client"

import { Search, LayoutDashboard, CreditCard, Utensils, Settings, LogOut, User, Users } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SubscriptionPage() {
  const router = useRouter()

  const subscriptionHistory = [
    {
      id: 1,
      name: "Basic Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "2000.00/-",
    },
    {
      id: 2,
      name: "Standard Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "3000.00/-",
    },
    {
      id: 3,
      name: "Premium Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "4000.00/-",
    },
    {
      id: 4,
      name: "Basic Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "2000.00/-",
    },
    {
      id: 5,
      name: "Basic Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "2000.00/-",
    },
    {
      id: 6,
      name: "Basic Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "2000.00/-",
    },
  ]

  const cashInHistory = [
    {
      id: 1,
      name: "Basic Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "2000.00/-",
    },
    {
      id: 2,
      name: "Standard Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "3000.00/-",
    },
    {
      id: 3,
      name: "Premium Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "4000.00/-",
    },
    {
      id: 4,
      name: "Basic Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "2000.00/-",
    },
    {
      id: 5,
      name: "Basic Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "2000.00/-",
    },
    {
      id: 6,
      name: "Basic Plan",
      startDate: "18 May, 2025",
      endDate: "18 June, 2025",
      status: "Active",
      price: "2000.00/-",
    },
  ]

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
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/subscription"
              className="flex items-center gap-3 px-4 py-3 bg-primary text-white rounded-lg"
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
          <div className="flex-1" />

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
          </div>
        </header>

        {/* Subscription Content */}
        <main className="flex-1 p-8 bg-green-50">
          {/* Subscription History */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Subscription History</h2>
            <div className="bg-white rounded-lg shadow-sm border-4 border-blue-400 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-gray-300">
                      Subscription Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-gray-300">
                      Start Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-gray-300">
                      End Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-gray-300">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {subscriptionHistory.map((subscription) => (
                    <tr key={subscription.id} className="bg-white">
                      <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{subscription.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                        {subscription.startDate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                        {subscription.endDate}
                      </td>
                      <td className="px-6 py-4 border-r border-gray-300">
                        <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          {subscription.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{subscription.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Cash In History */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Cash In History</h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-gray-300">
                      Subscription Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-gray-300">
                      Start Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-gray-300">
                      End Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-gray-300">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {cashInHistory.map((transaction) => (
                    <tr key={transaction.id} className="bg-white">
                      <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">{transaction.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                        {transaction.startDate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 border-r border-gray-300">
                        {transaction.endDate}
                      </td>
                      <td className="px-6 py-4 border-r border-gray-300">
                        <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{transaction.price}</td>
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
