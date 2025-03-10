"use client";

import { useState, useEffect } from "react";
import { client, syphContract } from "@/app/client";
import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
import Link from "next/link";

export default function Analytics() {
  const account = useActiveAccount();
  
  // Read total supply data
  const { data: totalSupply, isPending: isTotalSupplyLoading } = useReadContract({
    contract: syphContract,
    method: "function totalSupply() view returns (uint256)",
    params: [],
  });
  
  // Read max total supply data
  const { data: maxTotalSupply, isPending: isMaxTotalSupplyLoading } = useReadContract({
    contract: syphContract,
    method: "function maxTotalSupply() view returns (uint256)",
    params: [],
  });
  
  // Read claim conditions
  const { data: claimConditionData, isPending: isClaimConditionLoading } = useReadContract({
    contract: syphContract,
    method: "function claimCondition() view returns (uint256 currentStartId, uint256 count)",
    params: [],
  });
  
  // Read token name
  const { data: tokenName, isPending: isTokenNameLoading } = useReadContract({
    contract: syphContract,
    method: "function name() view returns (string)",
    params: [],
  });
  
  // Read token symbol
  const { data: tokenSymbol, isPending: isTokenSymbolLoading } = useReadContract({
    contract: syphContract,
    method: "function symbol() view returns (string)",
    params: [],
  });
  
  // Read token decimals
  const { data: tokenDecimals, isPending: isTokenDecimalsLoading } = useReadContract({
    contract: syphContract,
    method: "function decimals() view returns (uint8)",
    params: [],
  });
  
  // Read primary sale recipient
  const { data: primarySaleRecipient, isPending: isPrimarySaleRecipientLoading } = useReadContract({
    contract: syphContract,
    method: "function primarySaleRecipient() view returns (address)",
    params: [],
  });
  
  // Format large numbers for display
  const formatNumber = (value: any) => {
    if (!value) return "Loading...";
    return new Intl.NumberFormat().format(Number(value.toString()));
  };
  
  // Format percentage
  const formatPercentage = (current: any, max: any) => {
    if (!current || !max) return "Loading...";
    const percentage = (Number(current.toString()) / Number(max.toString())) * 100;
    return `${percentage.toFixed(2)}%`;
  };
  
  // Component to display user balance
  const UserBalance = () => {
    // Only run this hook when account is available
    const { data: userBalance, isPending: isUserBalanceLoading } = useReadContract({
      contract: syphContract,
      method: "function balanceOf(address account) view returns (uint256)",
      params: [account!.address],
    });
    
    return (
      <div className="flex justify-between">
        <span className="text-zinc-400">Your Balance</span>
        <span className="text-white font-medium">
          {isUserBalanceLoading ? "Loading..." : `${formatNumber(userBalance)} $SYPH`}
        </span>
      </div>
    );
  };
  
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
              $SYPH Analytics
            </h1>
            <p className="text-zinc-400 mt-2">Real-time data and metrics for the SYPH token</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-tr from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 px-0.5 py-0.5 rounded">
              <ConnectButton
                client={client}
                appMetadata={{
                  name: "Syphron",
                  url: "https://syphron.finance",
                }}
              />
            </div>
            <Link href="/" className="bg-transparent border border-green-400 hover:border-green-300 text-green-400 hover:text-green-300 px-4 py-2 rounded font-medium transition-all">
              Back to Home
            </Link>
          </div>
        </div>
        
        {/* Token Overview */}
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Token Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-zinc-400 mb-1">Token Name</p>
              <p className="text-2xl font-semibold text-white">{isTokenNameLoading ? "Loading..." : tokenName}</p>
            </div>
            
            <div>
              <p className="text-zinc-400 mb-1">Token Symbol</p>
              <p className="text-2xl font-semibold text-white">{isTokenSymbolLoading ? "Loading..." : tokenSymbol}</p>
            </div>
            
            <div>
              <p className="text-zinc-400 mb-1">Decimals</p>
              <p className="text-2xl font-semibold text-white">{isTokenDecimalsLoading ? "Loading..." : tokenDecimals?.toString()}</p>
            </div>
          </div>
        </div>
        
        {/* Supply Metrics */}
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Supply Metrics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-zinc-400 mb-1">Total Supply</p>
              <p className="text-3xl font-semibold text-white">{formatNumber(totalSupply)}</p>
            </div>
            
            <div>
              <p className="text-zinc-400 mb-1">Max Supply</p>
              <p className="text-3xl font-semibold text-white">{formatNumber(maxTotalSupply)}</p>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-zinc-400">Supply Progress</span>
              <span className="text-zinc-400">{formatPercentage(totalSupply, maxTotalSupply)}</span>
            </div>
            
            <div className="w-full bg-zinc-800 rounded-full h-4">
              {!isTotalSupplyLoading && !isMaxTotalSupplyLoading && totalSupply && maxTotalSupply && (
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full" 
                  style={{ width: `${(Number(totalSupply.toString()) / Number(maxTotalSupply.toString())) * 100}%` }}
                ></div>
              )}
            </div>
          </div>
        </div>
        
        {/* Claim Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white">Claim Conditions</h2>
            
            {isClaimConditionLoading ? (
              <p className="text-zinc-400">Loading claim conditions...</p>
            ) : claimConditionData ? (
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Current Phase ID</span>
                  <span className="text-white font-medium">{claimConditionData[0].toString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total Phases</span>
                  <span className="text-white font-medium">{claimConditionData[1].toString()}</span>
                </div>
                
                <div className="p-4 bg-zinc-800/50 rounded border border-zinc-700 mt-4">
                  <p className="text-zinc-300">
                    The token is currently in phase {claimConditionData[0].toString()} of {claimConditionData[1].toString()}.
                    Each phase may have different claim limits, prices, and eligibility requirements.
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-zinc-400">No claim conditions found</p>
            )}
          </div>
          
          {/* User Information */}
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Information</h2>
            
            {account ? (
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Connected Address</span>
                  <span className="text-white font-medium truncate ml-4">
                    {account.address.substring(0, 6)}...{account.address.substring(account.address.length - 4)}
                  </span>
                </div>
                
                {/* Conditionally render the balance component */}
                {account && <UserBalance />}
                
                <div className="p-4 bg-zinc-800/50 rounded border border-zinc-700 mt-4">
                  <p className="text-zinc-300">
                    You can claim or buy more tokens from the home page. Your tokens can be used for governance
                    and accessing premium features on the Syphron platform.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center p-6">
                <p className="text-zinc-400 mb-4">Connect your wallet to view your token information</p>
                <div className="inline-block bg-gradient-to-tr from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 px-0.5 py-0.5 rounded">
                  <ConnectButton
                    client={client}
                    appMetadata={{
                      name: "Syphron",
                      url: "https://syphron.finance",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Contract Information */}
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Contract Information</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Contract Address</span>
              <span className="text-white font-medium truncate ml-4">0xd63eF2172B982Cf27F9f5ca45911eABb1710B1d1</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Network</span>
              <span className="text-white font-medium">Base (Chain ID: 8453)</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Primary Sale Recipient</span>
              <span className="text-white font-medium truncate ml-4">
                {isPrimarySaleRecipientLoading ? "Loading..." : primarySaleRecipient}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Standard</span>
              <span className="text-white font-medium">ERC-20</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 