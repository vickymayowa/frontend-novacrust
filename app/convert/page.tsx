"use client"

import { useState } from "react"
import { ArrowLeft, ChevronDown, Search } from "lucide-react"
import Link from "next/link"
import eth from "../../public/images/eth.png"
import Image from "next/image"

type Tab = "crypto-to-cash" | "cash-to-crypto" | "crypto-to-fiat-loan"

type Wallet = {
  id: string
  name: string
  icon: string
}

type Currency = {
  id: string
  name: string
  symbol: string
  icon: string
  network: string
}

const wallets: Wallet[] = [
  { id: "metamask", name: "Metamask", icon: "/images/metamask.png" },
  { id: "rainbow", name: "Rainbow", icon: "/images/rainbow.png" },
  { id: "walletconnect", name: "WalletConnect", icon: "/images/wallet.png" },
  { id: "other", name: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)", icon: "/images/Vector.png" },
]

const currencies: Currency[] = [
  { id: "usdt-celo", name: "USDT - CELO", symbol: "USDT", icon: "/images/celo.png", network: "CELO" },
  { id: "usdt-ton", name: "USDT - TON", symbol: "USDT", icon: "/images/usdt.png", network: "TON" },
  { id: "usdt-bnb", name: "USDT - BNB", symbol: "USDT", icon: "/images/ton.png", network: "BNB" },
]

export default function ConvertPage() {
  const [activeTab, setActiveTab] = useState<Tab>("crypto-to-cash")
  const [payAmount, setPayAmount] = useState("1.00")
  const [receiveAmount, setReceiveAmount] = useState("1.00")
  const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState<Currency | null>({
    id: "ngn",
    name: "NGN",
    symbol: "NGN",
    icon: "/images/ngn.png",
    network: "Nigeria",
  })
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null)
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false)
  const [showWalletDropdown, setShowWalletDropdown] = useState(false)
  const [currencySearch, setCurrencySearch] = useState("")

  const filteredCurrencies = currencies.filter((currency) =>
    currency.name.toLowerCase().includes(currencySearch.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-[#2d2d2d] flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] bg-white rounded-[28px] shadow-2xl p-4 md:p-8 space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <button className="w-9 h-9 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors">
              <ArrowLeft className="h-5 w-5 text-neutral-900" />
            </button>
          </Link>
        </div>

        <div className="flex bg-neutral-100 p-1 rounded-full">
          <button
            onClick={() => setActiveTab("crypto-to-cash")}
            className={`flex-1 py-2 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all whitespace-nowrap ${activeTab === "crypto-to-cash"
              ? "bg-[#0f3d3e] text-white shadow-sm"
              : "text-neutral-500 hover:text-neutral-900"
              }`}
          >
            Crypto to cash
          </button>
          <button
            onClick={() => setActiveTab("cash-to-crypto")}
            className={`flex-1 py-2 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all whitespace-nowrap ${activeTab === "cash-to-crypto"
              ? "bg-[#0f3d3e] text-white shadow-sm"
              : "text-neutral-500 hover:text-neutral-900"
              }`}
          >
            Cash to crypto
          </button>
          <button
            onClick={() => setActiveTab("crypto-to-fiat-loan")}
            className={`flex-1 py-2 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all whitespace-nowrap ${activeTab === "crypto-to-fiat-loan"
              ? "bg-[#0f3d3e] text-white shadow-sm"
              : "text-neutral-500 hover:text-neutral-900"
              }`}
          >
            Crypto to fiat loan
          </button>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-900">You pay</label>
          <div className="bg-neutral-50 border border-neutral-200 rounded-[18px] p-5 flex items-center justify-between">
            <input
              type="text"
              value={payAmount}
              onChange={(e) => setPayAmount(e.target.value)}
              className="text-3xl font-semibold border-0 bg-transparent p-0 focus:outline-none w-full text-neutral-900"
              placeholder="0.00"
            />
            <button
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}

              className="flex items-center gap-2.5 text-sm font-medium shrink-0 px-3 py-2 hover:bg-neutral-100 rounded-lg transition-colors">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  <Image src={eth} alt="ETH" width={24} height={24} />
                </span>
              </div>
              <span className="text-neutral-900">ETH</span>
              <ChevronDown className="h-4 w-4 text-neutral-600" />
            </button>
          </div>
        </div>

        <div className="space-y-2 relative">
          <label className="text-sm font-medium text-neutral-900">You receive</label>
          <div className="bg-neutral-50 border border-neutral-200 rounded-[18px] p-5 flex items-center justify-between relative">
            <input
              type="text"
              value={receiveAmount}
              onChange={(e) => setReceiveAmount(e.target.value)}
              className="text-3xl font-semibold border-0 bg-transparent p-0 focus:outline-none w-full text-neutral-900"
              placeholder="0.00"
            />
            <button
              // onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className="flex items-center gap-2 text-sm font-medium shrink-0 px-3 py-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center text-lg">🇳🇬</div>
              <span className="text-neutral-900">NGN</span>
              <ChevronDown className="h-4 w-4 text-neutral-600" />
            </button>
          </div>

          {showCurrencyDropdown && (
            <div className="absolute top-full mt-2 right-0 w-[280px] bg-white rounded-[18px] shadow-2xl border border-neutral-200 p-3 z-20">
              <div className="relative mb-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                <input
                  placeholder="Search"
                  value={currencySearch}
                  onChange={(e) => setCurrencySearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
                />
              </div>
              <div className="space-y-1">
                {filteredCurrencies.map((currency) => (
                  <button
                    key={currency.id}
                    onClick={() => {
                      setSelectedReceiveCurrency(currency)
                      setShowCurrencyDropdown(false)
                      setCurrencySearch("")
                    }}
                    className="w-full flex items-center gap-3 p-3 hover:bg-neutral-50 rounded-xl transition-colors"
                  >
                    <Image
                      src={currency.icon}
                      alt={currency.name}
                      width={24}
                      height={24}
                      className="rounded-full object-cover"
                    />
                    <span className="font-medium text-sm text-neutral-900">{currency.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2 relative">
          <label className="text-sm font-medium text-neutral-900">Pay from</label>
          <button
            onClick={() => setShowWalletDropdown(!showWalletDropdown)}
            className="w-full bg-white border border-neutral-200 rounded-[18px] p-5 flex items-center justify-between hover:bg-neutral-50 transition-colors"
          >
            {selectedWallet ? (
              <div className="flex items-center gap-3">
                {selectedWallet.icon ? (
                  <img
                    src={selectedWallet.icon || "/placeholder.svg"}
                    alt={selectedWallet.name}
                    className="w-6 h-6 rounded"
                  />
                ) : (
                  <div className="w-6 h-6 rounded bg-neutral-200 flex items-center justify-center">
                    <span className="text-xs">📱</span>
                  </div>
                )}
                <span className="font-medium text-sm text-neutral-900">{selectedWallet.name}</span>
              </div>
            ) : (
              <span className="text-neutral-500 text-sm underline decoration-[#10b981] decoration-2 underline-offset-4">
                Select an option
              </span>
            )}
            <ChevronDown className="h-5 w-5 text-neutral-600" />
          </button>

          {showWalletDropdown && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-[18px] shadow-2xl border border-neutral-200 p-3 z-20">
              {wallets.map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => {
                    setSelectedWallet(wallet)
                    setShowWalletDropdown(false)
                  }}
                  className="w-full flex items-center gap-3 p-4 hover:bg-neutral-50 rounded-xl transition-colors text-left"
                >
                  {wallet.icon ? (
                    <img src={wallet.icon || "/placeholder.svg"} alt={wallet.name} className="w-7 h-7 rounded" />
                  ) : (
                    <div className="w-7 h-7 rounded bg-neutral-200 flex items-center justify-center">
                      <span className="text-sm">💼</span>
                    </div>
                  )}
                  <span className="font-medium text-sm text-neutral-900">{wallet.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedWallet && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-600">Connected:</span>
            <span className="bg-[#10b981] text-white text-xs px-3 py-1.5 rounded-md font-medium">Edward Igeruh</span>
          </div>
        )}

        <Link href="/recipient">
          <button className="w-full h-14 bg-[#0f3d3e] hover:bg-[#0a2e2f] text-white font-semibold rounded-full transition-colors text-base mt-4">
            Convert now
          </button>
        </Link>
      </div>
    </div>
  )
}
