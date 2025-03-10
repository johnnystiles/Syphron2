"use client";

export default function Whitepaper() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent text-center">
          Syphron Whitepaper
        </h1>
        
        <div className="max-w-3xl mx-auto bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Abstract</h2>
          <p className="text-zinc-300 mb-6">
            Syphron introduces a paradigm shift in decentralized finance through an AI-powered DeFi agent that optimizes crypto portfolios, automates trading strategies, and maximizes yield farming returns. This whitepaper outlines the architecture, algorithms, tokenomics, and governance model of the Syphron ecosystem.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-white">Table of Contents</h2>
          <ul className="space-y-2 mb-6">
            {[
              "1. Introduction",
              "2. Market Analysis",
              "3. Technical Architecture",
              "4. AI Trading Algorithms",
              "5. Yield Optimization Strategies",
              "6. Smart Contract Infrastructure",
              "7. $SYPH Token Utility",
              "8. Tokenomics",
              "9. Governance Model",
              "10. Security Considerations",
              "11. Roadmap",
              "12. Team & Advisors",
              "13. Conclusion",
              "14. References"
            ].map((item, index) => (
              <li key={index} className="text-zinc-300 hover:text-green-400 transition-colors cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
          <p className="text-zinc-300 mb-4">
            The decentralized finance (DeFi) landscape has grown exponentially in recent years, offering innovative financial instruments without traditional intermediaries. However, the complexity, volatility, and rapidly evolving nature of DeFi markets create significant barriers to entry for average users and inefficiencies even for experienced traders.
          </p>
          <p className="text-zinc-300 mb-6">
            Syphron addresses these challenges by combining advanced machine learning algorithms with blockchain technology to create an intelligent DeFi agent. This agent analyzes market conditions, user preferences, and risk profiles to autonomously execute optimal trading strategies and yield farming operations.
          </p>
          
          <div className="flex justify-center mb-6">
            <a 
              href="/whitepaper.pdf" 
              target="_blank"
              className="bg-gradient-to-tr from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 px-6 py-3 rounded text-black font-medium transition-all flex items-center"
            >
              Download Full Whitepaper
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
} 