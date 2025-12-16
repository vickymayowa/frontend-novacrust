"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#2d2d2d] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Crypto Checkout Experience</h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            A complete user flow demonstrating crypto-to-cash conversion with recipient details, transaction
            confirmation, and success tracking.
          </p>
        </div>

        <Link href="/convert">
          <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-neutral-900 font-semibold px-8 py-4 rounded-full transition-colors text-lg flex items-center gap-2 mx-auto">
            Start Conversion Flow
            <ArrowRight className="h-5 w-5" />
          </button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 text-left">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="w-10 h-10 bg-[#fbbf24] rounded-lg flex items-center justify-center mb-4 text-2xl">1</div>
            <h3 className="font-semibold text-lg mb-2 text-white">Conversion</h3>
            <p className="text-neutral-300 text-sm">Select crypto/currency, wallet, and conversion amount</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="w-10 h-10 bg-[#fbbf24] rounded-lg flex items-center justify-center mb-4 text-2xl">2</div>
            <h3 className="font-semibold text-lg mb-2 text-white">Recipient</h3>
            <p className="text-neutral-300 text-sm">Enter bank account and recipient information</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="w-10 h-10 bg-[#fbbf24] rounded-lg flex items-center justify-center mb-4 text-2xl">3</div>
            <h3 className="font-semibold text-lg mb-2 text-white">Send</h3>
            <p className="text-neutral-300 text-sm">Confirm transaction details and crypto address</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="w-10 h-10 bg-[#10b981] rounded-lg flex items-center justify-center mb-4 text-2xl">✓</div>
            <h3 className="font-semibold text-lg mb-2 text-white">Success</h3>
            <p className="text-neutral-300 text-sm">Transaction processing confirmation</p>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-neutral-400 text-sm">
            Built with Next.js 16, TypeScript, and Tailwind CSS • Fully responsive design
          </p>
        </div>
      </div>
    </div>
  )
}
