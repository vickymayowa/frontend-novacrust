"use client"

import { Check, Copy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import VET from "@/public/images/vet.png"

export default function SuccessPage() {
  const [copied, setCopied] = useState(false)
  const transactionId = "NC12345789"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transactionId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[520px] bg-white rounded-[28px] shadow-2xl p-12 text-center space-y-8">
        <div className="flex justify-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0f3d3e] rounded-[6px] flex items-center justify-center relative">
              <div className="w-4 h-4 border-[2.5px] border-white rounded-sm" />
            </div>
            <span className="text-xl font-bold text-[#0f3d3e] tracking-tight">NOVACRUST</span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className=" rounded-[24px] flex items-center justify-center shadow-lg">
            <Image src={VET} alt="VET" width={62} height={32} />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-neutral-900">Your transaction is processing.</h1>
          <p className="text-neutral-600 text-base">The recipient will receive it in shortly.</p>
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="bg-[#10b981] text-white text-sm font-medium px-4 py-2 rounded-lg">Transaction ID</div>
          <span className="text-base font-mono text-neutral-700">{transactionId}</span>
          <button
            onClick={copyToClipboard}
            className="text-neutral-600 hover:text-neutral-900 transition-colors p-2 hover:bg-neutral-100 rounded-lg"
            aria-label="Copy transaction ID"
          >
            {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
          </button>
        </div>

        <Link href="/" className="block pt-6">
          <button className="text-[#0f3d3e] font-semibold hover:text-[#0a2e2f] transition-colors text-base">
            Go back to home
          </button>
        </Link>
      </div>
    </div>
  )
}
