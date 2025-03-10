"use client";

export default function About() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
          About Syphron
        </h1>
        <div className="max-w-3xl">
          <p className="text-zinc-300 mb-4">
            Syphron is the first AI-powered DeFi agent that automates yield strategies and returns profit to tokenholders. Syphron is a fully autonoumous agent designed to maximize yield strategies.
          </p>
          <p className="text-zinc-300 mb-4">
            Our mission is to democratize access to sophisticated trading strategies and yield optimization techniques previously available only to institutional investors.
          </p>
          <p className="text-zinc-300">
            Built by a team of DeFi veterans and AI researchers, Syphron represents the next evolution in decentralized finance.
          </p>
        </div>
      </div>
    </main>
  );
} 