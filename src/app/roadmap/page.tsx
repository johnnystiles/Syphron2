"use client";

export default function Roadmap() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
          Project Roadmap
        </h1>
        
        <div className="max-w-4xl">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-400 transform md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            <TimelineItem 
              title="Q1 2023: Research & Development" 
              side="left"
              completed={true}
              content={[
                "Research on AI-powered trading strategies",
                "Core team formation",
                "Initial whitepaper draft",
                "Smart contract architecture design"
              ]}
            />
            
            <TimelineItem 
              title="Q2 2023: MVP & Private Testing" 
              side="right"
              completed={true}
              content={[
                "Minimum viable product development",
                "Private alpha testing with select users",
                "Security audit preparation",
                "Community building initiatives"
              ]}
            />
            
            <TimelineItem 
              title="Q3-Q4 2023: Token Launch & Beta" 
              side="left"
              completed={true}
              content={[
                "$SYPH token launch",
                "Public beta release",
                "Initial liquidity pool formation",
                "Staking mechanism implementation",
                "Partnerships with key DeFi protocols"
              ]}
            />
            
            <TimelineItem 
              title="Q1-Q2 2024: AI Engine Expansion" 
              side="right"
              completed={false}
              current={true}
              content={[
                "Advanced AI trading algorithm deployment",
                "Multi-chain support",
                "Expanded yield optimization strategies",
                "Mobile app beta release",
                "DAO governance implementation"
              ]}
            />
            
            <TimelineItem 
              title="Q3-Q4 2024: Ecosystem Growth" 
              side="left"
              completed={false}
              content={[
                "Developer SDK & API",
                "Integration with major CEXs and DEXs",
                "Institutional product offering",
                "Expanded token utility",
                "Cross-chain bridge deployment"
              ]}
            />
            
            <TimelineItem 
              title="2025 & Beyond: Global DeFi Adoption" 
              side="right"
              completed={false}
              content={[
                "AI-powered DeFi index funds",
                "Institutional partnership program",
                "Decentralized identity integration",
                "Global expansion into emerging markets",
                "Advanced risk management protocols"
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function TimelineItem({ 
  title, 
  side, 
  content,
  completed = false,
  current = false 
}: { 
  title: string; 
  side: 'left' | 'right'; 
  content: string[];
  completed?: boolean;
  current?: boolean;
}) {
  const containerClasses = `
    mb-16 md:mb-24 relative
    ${side === 'left' ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto' : 'md:pl-8 md:ml-auto md:mr-0'}
    md:w-1/2 pl-12
  `;
  
  return (
    <div className={containerClasses}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-1.5 w-8 h-8 bg-zinc-900 border-4 border-green-400 rounded-full transform md:-translate-x-1/2 z-10">
        {completed && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-1 text-green-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      
      <div className={`
        bg-zinc-900/80 backdrop-blur-sm border ${current ? 'border-green-400' : 'border-zinc-800'} 
        rounded-lg p-6 ${current ? 'ring-2 ring-green-400/30' : ''}
      `}>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <ul className="space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-zinc-300 flex items-start">
              <span className="text-green-400 mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 