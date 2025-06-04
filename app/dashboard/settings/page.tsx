"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, User, LayoutDashboard, CreditCard, Utensils, Settings, LogOut, Edit, Users } from "lucide-react"

export default function SettingsPage() {
  const router = useRouter()
  const [isEditingProfile, setIsEditingProfile] = useState(false)
  const [isEditingPersonal, setIsEditingPersonal] = useState(false)
  const [isEditingPassword, setIsEditingPassword] = useState(false)

  const [profileData, setProfileData] = useState({
    name: "Bessie Edwards",
    username: "@bessieedwards",
  })

  const [personalData, setPersonalData] = useState({
    firstName: "Bessie",
    lastName: "Edwards",
    area: "",
    address: "",
    email: "alma.lawson@example.com",
    phone: "(307) 555-0133",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

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
            <button
              onClick={() => router.push("/dashboard/meal")}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
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
            <button className="w-full flex items-center gap-3 px-4 py-3 text-white bg-primary rounded-lg">
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

        {/* Settings Content */}
        <main className="flex-1 p-8 bg-green-50">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=80&width=80&query=profile picture of a person with glasses"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{profileData.name}</h2>
                  <p className="text-gray-600">{profileData.username}</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              <button
                onClick={() => setIsEditingPersonal(!isEditingPersonal)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={personalData.firstName}
                  onChange={(e) => setPersonalData({ ...personalData, firstName: e.target.value })}
                  disabled={!isEditingPersonal}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={personalData.lastName}
                  onChange={(e) => setPersonalData({ ...personalData, lastName: e.target.value })}
                  disabled={!isEditingPersonal}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
                <input
                  type="text"
                  value={personalData.area}
                  onChange={(e) => setPersonalData({ ...personalData, area: e.target.value })}
                  placeholder="Enter area"
                  disabled={!isEditingPersonal}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  value={personalData.address}
                  onChange={(e) => setPersonalData({ ...personalData, address: e.target.value })}
                  placeholder="For example: House#124, Street#123, 3 Road, Banasree, Dhaka"
                  disabled={!isEditingPersonal}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={personalData.email}
                  onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })}
                  disabled={!isEditingPersonal}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={personalData.phone}
                  onChange={(e) => setPersonalData({ ...personalData, phone: e.target.value })}
                  disabled={!isEditingPersonal}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 disabled:bg-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Change password</h3>
              <button
                onClick={() => setIsEditingPassword(!isEditingPassword)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                  placeholder="############"
                  disabled={!isEditingPassword}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 disabled:bg-gray-100"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                    placeholder="############"
                    disabled={!isEditingPassword}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 disabled:bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                    placeholder="############"
                    disabled={!isEditingPassword}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50 disabled:bg-gray-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
