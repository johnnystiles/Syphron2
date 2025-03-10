"use client";

import { useState } from "react";
import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
import { buySYPHTokens } from "@/utils/tokenUtils";
import TransactionButton from "@/components/TransactionButton";

export default function BuyToken() {
  const [amount, setAmount] = useState("");
  const [purchaseResult, setPurchaseResult] = useState<{ success: boolean; message: string } | null>(null);

  // Calculate SYPH amount based on exchange rate (1 ETH = 10 SYPH)
  const syphAmount = amount ? (parseFloat(amount) * 10).toString() : "";
  
  // Handle max button click
  const handleMaxClick = () => {
    // In a real app, we would get the user's ETH balance
    setAmount("1.0"); // Placeholder value
  };
  
  // Handle successful purchase
  const handlePurchaseSuccess = (result: any) => {
    setPurchaseResult({ success: true, message: "Purchase successful!" });
    // In a real app, you would update balances, etc.
  };
  
  // Handle purchase error
  const handlePurchaseError = (error: Error) => {
    setPurchaseResult({ success: false, message: `Purchase failed: ${error.message}` });
  };
  
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent text-center">
          Buy $SYPH Token
        </h1>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 mb-8">
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm text-zinc-400">Amount</label>
                  <div className="text-sm text-zinc-400">1 $SYPH = $0.10</div>
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
                      <span className="text-white">ETH</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm text-zinc-400">You'll Receive</label>
                  <div className="text-sm text-zinc-400">Balance: 0 $SYPH</div>
                </div>
                
                <div className="flex border border-zinc-700 rounded bg-zinc-800/50 mb-4">
                  <input
                    type="text"
                    readOnly
                    value={syphAmount}
                    placeholder="0.0"
                    className="bg-transparent p-3 w-full text-white outline-none"
                  />
                  <div className="flex items-center pr-3">
                    <span className="text-white">$SYPH</span>
                  </div>
                </div>
              </div>
              
              {purchaseResult && (
                <div className={`p-3 rounded ${purchaseResult.success ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'}`}>
                  <p className={`text-sm ${purchaseResult.success ? 'text-green-400' : 'text-red-400'}`}>
                    {purchaseResult.message}
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
                action="buy"
                amount={amount}
                disabled={!amount || parseFloat(amount) <= 0}
                buttonText="Buy $SYPH Tokens"
                loadingText="Processing..."
                onSuccess={handlePurchaseSuccess}
                onError={handlePurchaseError}
              />
            </div>
          </div>
          
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Token Sale Information</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-zinc-400">Sale Price:</span>
                <span className="text-white font-medium">$0.10 per $SYPH</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-zinc-400">Minimum Purchase:</span>
                <span className="text-white font-medium">100 $SYPH</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-zinc-400">Maximum Purchase:</span>
                <span className="text-white font-medium">1,000,000 $SYPH</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-zinc-400">Tokens Sold:</span>
                <span className="text-white font-medium">23,456,789 / 40,000,000</span>
              </div>
              
              <div className="w-full bg-zinc-800 rounded-full h-3 mb-2">
                <div className="bg-green-400 h-3 rounded-full" style={{ width: "58.6%" }}></div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-zinc-400">Sale Ends In:</span>
                <span className="text-white font-medium">14 days 6 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 