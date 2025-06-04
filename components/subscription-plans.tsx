"use client"

import type React from "react"

import { useState } from "react"
import { Receipt, Truck, ChefHat } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface PlanFeature {
  text: string
}

interface Plan {
  id: string
  name: string
  price: number
  icon: React.ReactNode
  iconBgColor: string
  buttonBgColor: string
  features: PlanFeature[]
}

export default function SubscriptionPlans() {
  const { toast } = useToast()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans: Plan[] = [
    {
      id: "basic",
      name: "Basic Plan",
      price: 2200,
      icon: <Receipt className="h-8 w-8 text-primary" />,
      iconBgColor: "bg-green-200",
      buttonBgColor: "bg-green-200 hover:bg-green-300 text-primary",
      features: [
        { text: "One meal per day (lunch or dinner)" },
        { text: "Basic menu options" },
        { text: "Standard delivery time" },
        { text: "No customization options" },
        { text: "Monthly billing" },
      ],
    },
    {
      id: "standard",
      name: "Standard Plan",
      price: 2800,
      icon: <Truck className="h-8 w-8 text-white" />,
      iconBgColor: "bg-primary",
      buttonBgColor: "bg-primary hover:bg-primary/90 text-white",
      features: [
        { text: "Two meals per day (lunch and dinner)" },
        { text: "Standard menu options" },
        { text: "Priority delivery" },
        { text: "Basic customization options" },
        { text: "Monthly billing with auto-renewal" },
      ],
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: 4000,
      icon: <ChefHat className="h-8 w-8 text-primary" />,
      iconBgColor: "bg-green-200",
      buttonBgColor: "bg-green-200 hover:bg-green-300 text-primary",
      features: [
        { text: "Three meals per day (breakfast, lunch, dinner)" },
        { text: "Premium menu options" },
        { text: "Priority delivery with specific time slots" },
        { text: "Full customization options" },
        { text: "Monthly billing with special discounts" },
      ],
    },
  ]

  const handlePurchase = (planId: string) => {
    setSelectedPlan(planId)
    const plan = plans.find((p) => p.id === planId)

    toast({
      title: `${plan?.name} Selected`,
      description: "You'll be redirected to complete your subscription.",
    })

    // In a real app, this would redirect to a checkout page or open a modal
    console.log(`Selected plan: ${planId}`)
  }

  return (
    <section className="py-16 bg-[#f2e2b7]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Suitable Pricing Plans</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            One Month Meal Fee with Delivery Charge Fee.
            <br />
            Bkash, Nagad & Credit Card Required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <div
                  className={`w-20 h-20 ${plan.iconBgColor} rounded-full mx-auto flex items-center justify-center mb-4`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold">$ {plan.price}</span>
                  <span className="text-gray-500 ml-1">/ Month</span>
                </div>
              </div>

              <div className="border-t border-gray-200"></div>

              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handlePurchase(plan.id)}
                  className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${plan.buttonBgColor}`}
                >
                  Purchase Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
