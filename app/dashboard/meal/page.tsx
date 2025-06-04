"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, User, Plus, LayoutDashboard, CreditCard, Utensils, Settings, LogOut, Users } from "lucide-react"

export default function MealPage() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [modalAction, setModalAction] = useState<{
    type: "cancel" | "activate"
    mealType: "lunch" | "dinner"
    index: number
  } | null>(null)

  // Generate 30 days of meal data
  const generateMealData = () => {
    const meals = []
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    for (let i = 1; i <= 30; i++) {
      const dayIndex = (i - 1) % 7
      const dayName = days[dayIndex]
      const date = i.toString().padStart(2, "0")

      meals.push({
        id: i,
        day: dayName,
        date: `${date} June, 2025`,
        lunchActive: Math.random() > 0.3, // 70% chance of being active
        dinnerActive: Math.random() > 0.3, // 70% chance of being active
      })
    }
    return meals
  }

  const [meals, setMeals] = useState(generateMealData())

  const handleMealAction = (type: "cancel" | "activate", mealType: "lunch" | "dinner", index: number) => {
    setModalAction({ type, mealType, index })
    setShowModal(true)
  }

  const confirmAction = () => {
    if (!modalAction) return

    const { type, mealType, index } = modalAction
    const updatedMeals = [...meals]

    if (mealType === "lunch") {
      updatedMeals[index].lunchActive = type === "activate"
    } else {
      updatedMeals[index].dinnerActive = type === "activate"
    }

    setMeals(updatedMeals)
    setShowModal(false)
    setModalAction(null)
  }

  const cancelAction = () => {
    setShowModal(false)
    setModalAction(null)
  }

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
            <button
              onClick={() => router.push("/dashboard")}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/subscription")}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <CreditCard size={20} />
              <span>Subscription</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white bg-primary rounded-lg">
              <Utensils size={20} />
              <span>Meal</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/references")}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Users size={20} />
              <span>References</span>
            </button>
            <button
              onClick={() => router.push("/dashboard/settings")}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Settings size={20} />
              <span>Settings</span>
            </button>
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

        {/* Content */}
        <main className="flex-1 p-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-green-600">Your Subscription is Basic Plan in Active</h2>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">
                    Lunch
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dinner
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {meals.map((meal, index) => (
                  <tr key={meal.id}>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-300">
                      <div className="text-sm font-medium text-gray-900">{meal.day}</div>
                      <div className="text-sm text-gray-500">{meal.date}</div>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap border-r border-gray-300 ${meal.lunchActive ? "bg-green-100" : "bg-red-100"}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm">
                          {meal.lunchActive ? "Your lunch meal active" : "Your lunch meal cancel"}
                        </span>
                        <button
                          onClick={() => handleMealAction(meal.lunchActive ? "cancel" : "activate", "lunch", index)}
                          className={`px-3 py-1 rounded text-sm font-medium ${
                            meal.lunchActive
                              ? "bg-red-500 text-white hover:bg-red-600"
                              : "bg-green-500 text-white hover:bg-green-600"
                          }`}
                        >
                          {meal.lunchActive ? "Cancel" : "Active"}
                        </button>
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap ${meal.dinnerActive ? "bg-green-100" : "bg-red-100"}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">
                          {meal.dinnerActive ? "Your dinner meal active" : "Your dinner meal is cancel"}
                        </span>
                        <button
                          onClick={() => handleMealAction(meal.dinnerActive ? "cancel" : "activate", "dinner", index)}
                          className={`px-3 py-1 rounded text-sm font-medium ${
                            meal.dinnerActive
                              ? "bg-red-500 text-white hover:bg-red-600"
                              : "bg-green-500 text-white hover:bg-green-600"
                          }`}
                        >
                          {meal.dinnerActive ? "Cancel" : "Active"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Confirmation Modal */}
      {showModal && modalAction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Action</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to {modalAction.type} this {modalAction.mealType} meal?
            </p>
            <div className="flex space-x-3">
              <button
                onClick={confirmAction}
                className={`flex-1 px-4 py-2 rounded-lg text-white font-medium ${
                  modalAction.type === "cancel" ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                }`}
              >
                Yes, {modalAction.type === "cancel" ? "Cancel" : "Activate"}
              </button>
              <button
                onClick={cancelAction}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-300 text-gray-700 font-medium hover:bg-gray-400"
              >
                No, Keep
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
