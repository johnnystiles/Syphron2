"use client";

import { useState } from "react";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import TransactionButton from "@/components/TransactionButton";

export default function ClaimToken() {
  const [amount, setAmount] = useState("");
  const [claimResult, setClaimResult] = useState<{ success: boolean; message: string } | null>(null);
  const account = useActiveAccount();

  // Handle successful claim
  const handleClaimSuccess = (result: any) => {
    setClaimResult({ success: true, message: "Tokens claimed successfully!" });
    // In a real app, you would update balances, etc.
  };
  
  // Handle claim error
  const handleClaimError = (error: Error) => {
    setClaimResult({ success: false, message: `Claim failed: ${error.message}` });
  };
  
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent text-center">
          Claim $SYPH Tokens
        </h1>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 mb-8">
            <div className="flex flex-col space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm text-zinc-400">Amount to Claim</label>
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
                  <div className="flex items-center pr-3">
                    <span className="text-white">$SYPH</span>
                  </div>
                </div>
              </div>
              
              {claimResult && (
                <div className={`p-3 rounded ${claimResult.success ? 'bg-green-900/30 border border-green-800' : 'bg-red-900/30 border border-red-800'}`}>
                  <p className={`text-sm ${claimResult.success ? 'text-green-400' : 'text-red-400'}`}>
                    {claimResult.message}
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
                buttonText="Claim $SYPH Tokens"
                loadingText="Processing Claim..."
                onSuccess={handleClaimSuccess}
                onError={handleClaimError}
              />
            </div>
          </div>
          
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Claim Information</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-zinc-400">Token:</span>
                <span className="text-white font-medium">$SYPH</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-zinc-400">Contract Address:</span>
                <span className="text-white font-medium truncate">0xd63eF2172B982Cf27F9f5ca45911eABb1710B1d1</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-zinc-400">Network:</span>
                <span className="text-white font-medium">Base (Chain ID: 8453)</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-zinc-400">Connected Wallet:</span>
                <span className="text-white font-medium">
                  {account ? `${account.address.substring(0, 6)}...${account.address.substring(account.address.length - 4)}` : "Not connected"}
                </span>
              </div>
              
              <p className="text-sm text-zinc-400 mt-4">
                Note: Tokens are claimed directly to your connected wallet address. Ensure you are connected to the Base network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 