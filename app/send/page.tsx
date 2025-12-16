"use client"

import { useState } from "react"
import { ArrowLeft, Copy, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SendPage() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const cryptoAddress = "4LiYA1jbnaL6739MKg9UiJ"

  const handleCopy = () => {
    navigator.clipboard.writeText(cryptoAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSent = () => {
    router.push("/success")
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => router.back()} className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
            <ArrowLeft className="h-5 w-5 text-neutral-700" />
          </button>
          <h1 className="text-lg font-bold text-[#013941]">Send ETH to the address below</h1>
        </div>

        <div className="space-y-6">
          {/* Crypto Address Box */}
          <div className="border-2 border-[#CCF6E5]-500 rounded-full p-4 bg-[#CCF6E5]-50/30 flex items-center justify-between">
            <span className="text-[#013941] font-mono text-sm font-bold">{cryptoAddress}</span>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-purple-100 rounded-lg transition-colors"
              title="Copy address"
            >
              <Copy className="h-5 w-5 text-[#CCF6E5]-600" />
            </button>
          </div>

          {copied && <div className="text-sm text-green-600 text-center">Address copied to clipboard!</div>}

          {/* Transaction Details */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Amount to send</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-neutral-900">100 ETH</span>
                <button onClick={handleCopy} className="p-1 hover:bg-neutral-100 rounded transition-colors">
                  <Copy className="h-4 w-4 text-neutral-400" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Network</span>
              <span className="font-semibold text-neutral-900">ETH</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Wallet</span>
              <span className="font-semibold text-neutral-900">Other</span>
            </div>
          </div>

          {/* Info Message */}
          <div className="flex gap-3 p-4 border border-blue-100 rounded-xl mt-6">
            <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-neutral-700">
              Only send USDT to this address. Ensure the sender is on the (CELO) network otherwise you might lose your
              deposit
            </p>
          </div>
        </div>

        {/* Send Button */}
        <Button
          onClick={handleSent}
          className="w-full mt-8 bg-teal-900 hover:bg-teal-800 text-white font-medium py-6 rounded-2xl transition-colors"
        >
          I have sent it
        </Button>
      </div>
    </div>
  )
}
