"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export default function VerifyOtpForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resendDisabled, setResendDisabled] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Pre-fill first three digits for demo purposes
  useEffect(() => {
    setOtp(["4", "2", "6", "", "", ""])
  }, [])

  // Handle countdown for resend button
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false)
    }
  }, [countdown, resendDisabled])

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return

    const newOtp = [...otp]
    // Take only the last character if multiple characters are pasted
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    // Auto-focus next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted content is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("")
      setOtp(digits)

      // Focus the last input
      inputRefs.current[5]?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check if OTP is complete
    if (otp.some((digit) => digit === "")) {
      toast({
        title: "Incomplete OTP",
        description: "Please enter all 6 digits of the OTP.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // In a real app, this would be an API call to your backend
      // await fetch('/api/auth/verify-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ otp: otp.join('') })
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "OTP Verified",
        description: "Your OTP has been verified successfully.",
      })

      // Redirect to reset password page or wherever appropriate
      router.push("/reset-password")
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: "The OTP you entered is incorrect or has expired.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResendOtp = async () => {
    setResendDisabled(true)
    setCountdown(30) // Disable resend for 30 seconds

    try {
      // In a real app, this would be an API call to your backend
      // await fetch('/api/auth/resend-otp', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: 'user@example.com' }) // You'd get this from context/state
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "OTP Resent",
        description: "A new OTP has been sent to your email address.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending a new OTP. Please try again.",
        variant: "destructive",
      })
      setResendDisabled(false)
      setCountdown(0)
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Enter OTP</h1>
        <p className="text-gray-500 mt-3">
          An OTP has been sent to your email address
          <br />
          please verify it below
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Didn't Receive OTP?{" "}
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={resendDisabled}
              className={`text-primary font-medium hover:underline ${resendDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Resend OTP {countdown > 0 && `(${countdown}s)`}
            </button>
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
        >
          {isSubmitting ? "Verifying..." : "Verify"}
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-600">
          Back to{" "}
          <Link href="/login" className="text-primary font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
