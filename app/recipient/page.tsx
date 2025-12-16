"use client"

import { useState } from "react"
import { ArrowLeft, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function RecipientPage() {
  const router = useRouter()
  const [selectedBank, setSelectedBank] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [accountName] = useState("ODUTUGA GBEKE")
  const [isBankDropdownOpen, setIsBankDropdownOpen] = useState(false)

  const banks = [
    "Access Bank",
    "GTBank",
    "First Bank",
    "Zenith Bank",
    "UBA",
    "Fidelity Bank",
    "Union Bank",
    "Sterling Bank",
  ]

  const handleNext = () => {
    if (selectedBank && accountNumber) {
      router.push("/send")
    }
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => router.back()} className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5 text-neutral-700" />
          </button>
          <h1 className="text-lg font-semibold text-neutral-900">Recipient details</h1>
        </div>

        <div className="space-y-6">
          {/* Bank Dropdown */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">Bank</label>
            <div className="relative">
              <button
                onClick={() => setIsBankDropdownOpen(!isBankDropdownOpen)}
                className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-left flex items-center justify-between hover:border-neutral-300 transition-colors"
              >
                <span className={selectedBank ? "text-neutral-900" : "text-neutral-400 text-sm"}>
                  {selectedBank || "Select an option"}
                </span>
                <ChevronDown className="h-5 w-5 text-neutral-400" />
              </button>

              {isBankDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-neutral-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                  {banks.map((bank) => (
                    <button
                      key={bank}
                      onClick={() => {
                        setSelectedBank(bank)
                        setIsBankDropdownOpen(false)
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-neutral-50 transition-colors text-sm text-neutral-900"
                    >
                      {bank}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Account Number Input */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">Account number</label>
            <input
              type="text"
              placeholder="Enter your account number"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl placeholder:text-neutral-400 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              maxLength={10}
            />
          </div>

          {/* Account Name Display (read-only) */}
          <div>
            <label className="block text-sm font-medium text-neutral-900 mb-2">Account number</label>
            <div className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm">
              {accountName}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          disabled={!selectedBank || !accountNumber}
          className="w-full mt-8 bg-teal-900 hover:bg-teal-800 text-white font-medium py-6 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
