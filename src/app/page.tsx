"use client";

import { client, syphContract } from "./client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
import TransactionButton from "@/components/TransactionButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FinancialPerformance />
      <div className="container mx-auto px-4 py-12">
        <MintSection />
      </div>
    </main>
  );
}

// HeroSection code with interactive logo
function HeroSection() {
  const [logoHover, setLogoHover] = useState(false);
  
  return (
    <section className="pt-20 pb-12 px-4 relative overflow-hidden">
      {/* Background symbols */}
      <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
        <div className="absolute top-20 left-12 text-yellow-500 text-4xl">#</div>
        <div className="absolute top-40 right-20 text-yellow-400 text-5xl">#</div>
        <div className="absolute bottom-40 right-24 text-green-500 text-3xl">$</div>
        <div className="absolute top-60 left-32 text-green-400 text-4xl">$</div>
        <div className="absolute bottom-20 left-20 text-green-400 text-3xl">$</div>
        <div className="absolute top-20 right-1/3 text-yellow-500 text-3xl">~</div>
        <div className="absolute bottom-32 left-1/3 text-yellow-400 text-4xl">~</div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Interactive Logo */}
        <div className="mb-8 flex justify-center">
          <div 
            className={`size-32 md:size-40 rounded-full flex items-center justify-center transition-all duration-500 ${logoHover ? 'bg-gradient-to-br from-green-400 to-yellow-300' : 'bg-gradient-to-tr from-green-500 to-green-400'}`}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >
            <div className="size-28 md:size-36 bg-zinc-900 rounded-full flex items-center justify-center">
              <div className={`text-5xl md:text-6xl font-bold transition-all duration-500 ${logoHover ? 'text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-yellow-300' : 'text-green-400'}`}>S</div>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-green-400 font-medium">The Future of DeFi is Intelligent</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
          Syphron AI DeFi Agent
        </h1>
        
        <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-12">
          The first AI-powered DeFi agent that optimizes your crypto portfolio, automates trades, and
          maximizes your yields with advanced machine learning algorithms.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/analytics" className="bg-gradient-to-tr from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 px-6 py-3 rounded text-black font-medium transition-all">
            View Analytics
          </Link>
          <Link href="/whitepaper" className="bg-transparent border border-green-400 hover:border-green-300 text-green-400 hover:text-green-300 px-6 py-3 rounded font-medium transition-all flex items-center">
            Read Whitepaper 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Financial Performance Dashboard
function FinancialPerformance() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1M");
  
  // Mock data for the dashboard
  const performanceData = {
    protocolAPY: "18.7%",
    protocolAPYChange: "+3.2%",
    liquidity: "$2.8M",
    liquidityChange: "+12.1%",
    activeVaults: "12",
    activeVaultsChange: "+2",
    totalValueLocked: "$1.24M",
    tvlChange: "+5.8%",
    topProtocol: "Aave",
    currentAPY: "+22.4%",
    strategyCount: "7",
    aiConfidence: "92.3%",
    nextRebalance: "4h 23m",
    lastUpdated: "12m ago",
    protocolAllocation: [
      { name: "Aave", percentage: "34%", color: "from-cyan-400 to-cyan-500" },
      { name: "Compound", percentage: "24%", color: "from-green-400 to-green-500" },
      { name: "Curve", percentage: "18%", color: "from-pink-400 to-pink-500" },
      { name: "Uniswap", percentage: "12%", color: "from-orange-400 to-orange-500" },
      { name: "Balancer", percentage: "8%", color: "from-yellow-400 to-yellow-500" },
      { name: "Others", percentage: "4%", color: "from-gray-400 to-gray-500" }
    ]
  };
  
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-8">FINANCIAL PERFORMANCE</h2>
        
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
          {/* Top stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 border border-zinc-800 rounded-lg">
              <div className="text-sm text-zinc-400 mb-1">PROTOCOL APY</div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-500">{performanceData.protocolAPY}</div>
              <div className="text-sm text-green-400">{performanceData.protocolAPYChange}</div>
            </div>
            
            <div className="p-4 border border-zinc-800 rounded-lg">
              <div className="text-sm text-zinc-400 mb-1">LIQUIDITY</div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-500">{performanceData.liquidity}</div>
              <div className="text-sm text-green-400">{performanceData.liquidityChange}</div>
            </div>
            
            <div className="p-4 border border-zinc-800 rounded-lg">
              <div className="text-sm text-zinc-400 mb-1">ACTIVE VAULTS</div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-500">{performanceData.activeVaults}</div>
              <div className="text-sm text-green-400">{performanceData.activeVaultsChange}</div>
            </div>
            
            <div className="p-4 border border-zinc-800 rounded-lg">
              <div className="text-sm text-zinc-400 mb-1">TOTAL VALUE LOCKED</div>
              <div className="text-2xl md:text-3xl font-bold text-yellow-500">{performanceData.totalValueLocked}</div>
              <div className="text-sm text-green-400">{performanceData.tvlChange}</div>
            </div>
          </div>
          
          {/* TVL Growth Chart */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-yellow-500">TVL Growth</h3>
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1 rounded text-xs ${selectedTimeframe === "1D" ? "bg-green-500 text-black" : "bg-zinc-800 text-zinc-400"}`}
                  onClick={() => setSelectedTimeframe("1D")}
                >
                  1D
                </button>
                <button 
                  className={`px-3 py-1 rounded text-xs ${selectedTimeframe === "1W" ? "bg-green-500 text-black" : "bg-zinc-800 text-zinc-400"}`}
                  onClick={() => setSelectedTimeframe("1W")}
                >
                  1W
                </button>
                <button 
                  className={`px-3 py-1 rounded text-xs ${selectedTimeframe === "1M" ? "bg-green-500 text-black" : "bg-zinc-800 text-zinc-400"}`}
                  onClick={() => setSelectedTimeframe("1M")}
                >
                  1M
                </button>
              </div>
            </div>
            
            {/* Mock Chart - in real implementation, use a chart library */}
            <div className="relative h-48 w-full border-b border-l border-zinc-800">
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-green-500/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/4 border-t border-green-500/30"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 border-t border-green-500/10"></div>
              <div className="absolute bottom-0 left-0 w-full h-3/4 border-t border-green-500/5"></div>
              
              {/* Simulated line chart */}
              <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M0,100 C50,90 100,120 150,80 C200,40 250,60 300,30 C350,20 400,40 450,25 C500,15 550,30 600,10" 
                  stroke="url(#chartGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  transform="scale(1, 0.9)"
                />
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="absolute top-0 right-0 text-yellow-500 font-mono text-sm">$1,644,068</div>
              <div className="absolute bottom-0 left-0 text-zinc-500 font-mono text-xs">$0.4M</div>
              <div className="absolute bottom-0 left-1/3 text-zinc-600 text-xs">Apr 15</div>
              <div className="absolute bottom-0 right-0 text-zinc-600 text-xs">Apr 30</div>
            </div>
          </div>
          
          {/* Bottom stats & Protocol Allocation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-zinc-800/50 rounded">
                  <div className="text-xs text-zinc-400 mb-1">TOP PROTOCOL</div>
                  <div className="font-bold text-yellow-500">{performanceData.topProtocol}</div>
                </div>
                
                <div className="p-3 bg-zinc-800/50 rounded">
                  <div className="text-xs text-zinc-400 mb-1">CURRENT APY</div>
                  <div className="font-bold text-green-400">{performanceData.currentAPY}</div>
                </div>
                
                <div className="p-3 bg-zinc-800/50 rounded">
                  <div className="text-xs text-zinc-400 mb-1">STRATEGY COUNT</div>
                  <div className="font-bold text-yellow-500">{performanceData.strategyCount}</div>
                </div>
                
                <div className="p-3 bg-zinc-800/50 rounded">
                  <div className="text-xs text-zinc-400 mb-1">AI CONFIDENCE</div>
                  <div className="font-bold text-yellow-500">{performanceData.aiConfidence}</div>
                </div>
                
                <div className="p-3 bg-zinc-800/50 rounded">
                  <div className="text-xs text-zinc-400 mb-1">NEXT REBALANCE</div>
                  <div className="font-bold text-yellow-500">{performanceData.nextRebalance}</div>
                </div>
                
                <div className="p-3 bg-zinc-800/50 rounded">
                  <div className="text-xs text-zinc-400 mb-1">LAST UPDATED</div>
                  <div className="font-bold text-yellow-500">{performanceData.lastUpdated}</div>
                </div>
              </div>

              <h3 className="text-lg text-yellow-500 mt-4">Protocol Allocation</h3>
              
              <div className="space-y-3">
                {performanceData.protocolAllocation.map((protocol, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-24 text-zinc-400 text-sm">{protocol.name}</div>
                    <div className="flex-1 h-5 bg-zinc-800 rounded-full overflow-hidden mr-3">
                      <div className={`h-full bg-gradient-to-r ${protocol.color}`} style={{ width: protocol.percentage }}></div>
                    </div>
                    <div className="text-zinc-300 text-sm">{protocol.percentage}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-lg text-yellow-500 mb-4">PROJECTED ANNUAL RETURNS</h3>
              <div className="relative w-48 h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="10" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#eab308" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset="62.8" transform="rotate(-90 50 50)" />
                  <text x="50" y="45" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#eab308">18.7%</text>
                  <text x="50" y="65" textAnchor="middle" fontSize="12" fill="#94a3b8">APY</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MintSection() {
  const [amount, setAmount] = useState("");
  const [mintResult, setMintResult] = useState<{ success: boolean; message: string } | null>(null);
  const account = useActiveAccount();
  
  // Handle max button click
  const handleMaxClick = () => {
    // In a real app, we would get the max allowed amount from the contract
    setAmount("100"); // Placeholder value
  };
  
  // Handle successful mint
  const handleMintSuccess = (result: any) => {
    setMintResult({ success: true, message: "Tokens minted successfully!" });
    // In a real app, you would update balances, etc.
  };
  
  // Handle mint error
  const handleMintError = (error: Error) => {
    setMintResult({ success: false, message: `Mint failed: ${error.message}` });
  };
  
  return (
    <div className="max-w-lg mx-auto bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-center mb-2">Mint $SYPH Tokens</h2>
      <p className="text-zinc-400 text-center mb-6">Mint $SYPH tokens with your connected wallet</p>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <label className="text-sm text-zinc-400">Amount to Mint</label>
          {account && (
            <div className="text-sm text-zinc-300">
              <span className="text-green-400">Connected: </span>
              {account.address.substring(0, 6)}...{account.address.substring(account.address.length - 4)}
            </div>
          )}
        </div>
        
        <div className="flex border border-zinc-700 rounded bg-zinc-800/50 mb-4">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            className="bg-transparent p-3 w-full text-white outline-none"
          />
          <div className="flex items-center gap-1 pr-3">
            <button 
              className="text-yellow-400 text-xs px-2"
              onClick={handleMaxClick}
            >
              MAX
            </button>
            <div className="flex items-center gap-1">
              <span className="text-white">$SYPH</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-4 p-3 rounded bg-zinc-800/50 border border-zinc-700">
        <div className="flex justify-between items-center">
          <span className="text-zinc-400">Current exchange rate:</span>
          <span className="text-white font-medium">1 SYPH : 0.000001 ETH</span>
        </div>
      </div>
      
      {mintResult && (
        <div className={`mb-4 p-3 rounded ${mintResult.success ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'}`}>
          <p className={`text-sm ${mintResult.success ? 'text-green-400' : 'text-red-400'}`}>
            {mintResult.message}
          </p>
        </div>
      )}
      
      <div className="bg-gradient-to-tr from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 px-0.5 py-0.5 rounded mb-4">
        <ConnectButton
          client={client}
          appMetadata={{
            name: "Syphron",
            url: "https://syphron.finance",
          }}
        />
      </div>
      
      <TransactionButton
        action="claim"
        amount={amount}
        disabled={!amount || parseFloat(amount) <= 0}
        buttonText="Mint $SYPH Tokens"
        loadingText="Minting..."
        onSuccess={handleMintSuccess}
        onError={handleMintError}
      />
    </div>
  );
}
