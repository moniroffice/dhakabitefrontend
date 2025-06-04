import { baseApi } from "./baseApi"
import type { Meal } from "./mealApi"

export interface SubscriptionPlan {
  _id: string
  name: string
  type: "basic" | "standard" | "premium"
  duration: number // days
  price: number
  description: string
  features: string[]
  mealsPerDay: number
  isActive: boolean
}

export interface SubscriptionMeal {
  date: string
  lunch: Meal
  dinner: Meal
  status: "active" | "cancelled" | "delivered"
}

export interface Subscription {
  _id: string
  userId: string
  plan: SubscriptionPlan
  duration: number
  startDate: string
  endDate: string
  price: number
  meals: SubscriptionMeal[]
  paymentStatus: "pending" | "paid" | "failed"
  isActive: boolean
  autoRenew: boolean
  createdAt: string
  updatedAt: string
}

export interface CreateSubscriptionRequest {
  planId: string
  duration: number
  startDate: string
  autoRenew: boolean
  paymentMethod: "card" | "wallet"
}

export interface UpdateMealStatusRequest {
  subscriptionId: string
  date: string
  mealType: "lunch" | "dinner"
  status: "active" | "cancelled"
}

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get available subscription plans
    getSubscriptionPlans: builder.query<{ success: boolean; data: SubscriptionPlan[] }, void>({
      query: () => "/subscriptions/plans",
      providesTags: ["Subscription"],
    }),

    // Create new subscription
    createSubscription: builder.mutation<{ success: boolean; data: Subscription }, CreateSubscriptionRequest>({
      query: (subscriptionData) => ({
        url: "/subscriptions",
        method: "POST",
        body: subscriptionData,
      }),
      invalidatesTags: ["Subscription", "User"],
    }),

    // Get user's subscriptions
    getSubscriptions: builder.query<{ success: boolean; data: Subscription[] }, void>({
      query: () => "/subscriptions",
      providesTags: ["Subscription"],
    }),

    // Get single subscription
    getSubscription: builder.query<{ success: boolean; data: Subscription }, string>({
      query: (id) => `/subscriptions/${id}`,
      providesTags: ["Subscription"],
    }),

    // Cancel subscription
    cancelSubscription: builder.mutation<{ success: boolean; data: Subscription }, string>({
      query: (id) => ({
        url: `/subscriptions/${id}/cancel`,
        method: "PUT",
      }),
      invalidatesTags: ["Subscription", "User"],
    }),

    // Renew subscription
    renewSubscription: builder.mutation<{ success: boolean; data: Subscription }, { id: string; duration: number }>({
      query: ({ id, duration }) => ({
        url: `/subscriptions/${id}/renew`,
        method: "PUT",
        body: { duration },
      }),
      invalidatesTags: ["Subscription", "User"],
    }),

    // Get subscription meals
    getSubscriptionMeals: builder.query<{ success: boolean; data: SubscriptionMeal[] }, string>({
      query: (id) => `/subscriptions/${id}/meals`,
      providesTags: ["Subscription"],
    }),

    // Update meal status (activate/cancel specific meal)
    updateMealStatus: builder.mutation<{ success: boolean; data: Subscription }, UpdateMealStatusRequest>({
      query: ({ subscriptionId, date, mealType, status }) => ({
        url: `/subscriptions/${subscriptionId}/meals`,
        method: "PUT",
        body: { date, mealType, status },
      }),
      invalidatesTags: ["Subscription"],
    }),

    // Get subscription history
    getSubscriptionHistory: builder.query<{ success: boolean; data: Subscription[] }, void>({
      query: () => "/subscriptions/history",
      providesTags: ["Subscription"],
    }),

    // Toggle auto-renewal
    toggleAutoRenew: builder.mutation<{ success: boolean; data: Subscription }, { id: string; autoRenew: boolean }>({
      query: ({ id, autoRenew }) => ({
        url: `/subscriptions/${id}/auto-renew`,
        method: "PUT",
        body: { autoRenew },
      }),
      invalidatesTags: ["Subscription"],
    }),
  }),
})

export const {
  useGetSubscriptionPlansQuery,
  useCreateSubscriptionMutation,
  useGetSubscriptionsQuery,
  useGetSubscriptionQuery,
  useCancelSubscriptionMutation,
  useRenewSubscriptionMutation,
  useGetSubscriptionMealsQuery,
  useUpdateMealStatusMutation,
  useGetSubscriptionHistoryQuery,
  useToggleAutoRenewMutation,
} = subscriptionApi
