import { baseApi } from "./baseApi"

export interface Ingredient {
  name: string
  quantity: string
  unit: string
}

export interface Meal {
  _id: string
  name: string
  type: "lunch" | "dinner"
  category: "basic" | "standard" | "premium"
  description: string
  image: string
  ingredients: Ingredient[]
  price: {
    basic: number
    standard: number
    premium: number
  }
  nutritionalInfo: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
  availability: {
    days: string[]
    startDate: string
    endDate: string
  }
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface MealFilters {
  category?: string
  type?: string
  search?: string
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: "asc" | "desc"
}

export interface WeeklyMenu {
  package: string
  days: {
    day: string
    date: string
    meals: {
      lunch: Meal
      dinner: Meal
    }
  }[]
}

export const mealApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all meals with filters
    getMeals: builder.query<{ success: boolean; data: Meal[]; pagination: any }, MealFilters>({
      query: (filters = {}) => {
        const params = new URLSearchParams()
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined) {
            params.append(key, value.toString())
          }
        })
        return `/meals?${params.toString()}`
      },
      providesTags: ["Meal"],
    }),

    // Get single meal
    getMeal: builder.query<{ success: boolean; data: Meal }, string>({
      query: (id) => `/meals/${id}`,
      providesTags: ["Meal"],
    }),

    // Get weekly menu for specific package
    getWeeklyMenu: builder.query<{ success: boolean; data: WeeklyMenu }, string>({
      query: (packageType) => `/meals/weekly/${packageType}`,
      providesTags: ["Meal"],
    }),

    // Get meals for specific date
    getDailyMeals: builder.query<{ success: boolean; data: Meal[] }, string>({
      query: (date) => `/meals/daily/${date}`,
      providesTags: ["Meal"],
    }),

    // Get featured meals
    getFeaturedMeals: builder.query<{ success: boolean; data: Meal[] }, void>({
      query: () => "/meals/featured",
      providesTags: ["Meal"],
    }),

    // Search meals
    searchMeals: builder.query<{ success: boolean; data: Meal[] }, string>({
      query: (searchTerm) => `/meals/search?q=${encodeURIComponent(searchTerm)}`,
      providesTags: ["Meal"],
    }),

    // Admin endpoints (if user is admin)
    createMeal: builder.mutation<{ success: boolean; data: Meal }, Partial<Meal>>({
      query: (mealData) => ({
        url: "/meals",
        method: "POST",
        body: mealData,
      }),
      invalidatesTags: ["Meal"],
    }),

    updateMeal: builder.mutation<{ success: boolean; data: Meal }, { id: string; data: Partial<Meal> }>({
      query: ({ id, data }) => ({
        url: `/meals/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Meal"],
    }),

    deleteMeal: builder.mutation<{ success: boolean; message: string }, string>({
      query: (id) => ({
        url: `/meals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Meal"],
    }),
  }),
})

export const {
  useGetMealsQuery,
  useGetMealQuery,
  useGetWeeklyMenuQuery,
  useGetDailyMealsQuery,
  useGetFeaturedMealsQuery,
  useSearchMealsQuery,
  useCreateMealMutation,
  useUpdateMealMutation,
  useDeleteMealMutation,
} = mealApi
