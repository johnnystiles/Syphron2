"use client";

export default function Tokenomics() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
          $SYPH Tokenomics
        </h1>
        
        <div className="max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Total Supply</h3>
              <p className="text-3xl font-bold text-white">100,000,000</p>
              <p className="text-zinc-400">$SYPH tokens</p>
            </div>
            
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Initial Price</h3>
              <p className="text-3xl font-bold text-white">$0.10</p>
              <p className="text-zinc-400">per $SYPH token</p>
            </div>
            
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Staking APY</h3>
              <p className="text-3xl font-bold text-white">12-18%</p>
              <p className="text-zinc-400">variable based on TVL</p>
            </div>
          </div>
          
          <p className="text-zinc-300 mb-6">
            The $SYPH token is the native utility token of the Syphron ecosystem, providing governance rights, fee discounts, and access to premium features.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white">Token Distribution</h2>
          
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-zinc-400 mb-1">Community & Ecosystem</p>
                <div className="w-full bg-zinc-800 rounded-full h-4 mb-2">
                  <div className="bg-green-400 h-4 rounded-full" style={{ width: "40%" }}></div>
                </div>
                <p className="text-white font-semibold">40%</p>
              </div>
              
              <div>
                <p className="text-zinc-400 mb-1">Team & Advisors</p>
                <div className="w-full bg-zinc-800 rounded-full h-4 mb-2">
                  <div className="bg-green-400 h-4 rounded-full" style={{ width: "20%" }}></div>
                </div>
                <p className="text-white font-semibold">20%</p>
              </div>
              
              <div>
                <p className="text-zinc-400 mb-1">Treasury</p>
                <div className="w-full bg-zinc-800 rounded-full h-4 mb-2">
                  <div className="bg-green-400 h-4 rounded-full" style={{ width: "15%" }}></div>
                </div>
                <p className="text-white font-semibold">15%</p>
              </div>
              
              <div>
                <p className="text-zinc-400 mb-1">Liquidity</p>
                <div className="w-full bg-zinc-800 rounded-full h-4 mb-2">
                  <div className="bg-green-400 h-4 rounded-full" style={{ width: "15%" }}></div>
                </div>
                <p className="text-white font-semibold">15%</p>
              </div>
              
              <div>
                <p className="text-zinc-400 mb-1">Staking Rewards</p>
                <div className="w-full bg-zinc-800 rounded-full h-4 mb-2">
                  <div className="bg-green-400 h-4 rounded-full" style={{ width: "10%" }}></div>
                </div>
                <p className="text-white font-semibold">10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 