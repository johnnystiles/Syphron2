"use client";

import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import { client } from "@/app/client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll event listener to create sticky effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`w-full border-b border-zinc-800/20 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group">
            <div className="size-10 bg-gradient-to-tr from-green-400 to-green-300 rounded-full mr-2 group-hover:from-green-300 group-hover:to-yellow-300 transition-all duration-300"></div>
            <span className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-yellow-300 transition-all duration-300">Syphron</span>
          </Link>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/tokenomics" label="Tokenomics" />
          <NavLink href="/roadmap" label="Roadmap" />
          <NavLink href="/analytics" label="Analytics" />
        </div>

        <div className="ml-4">
          <div className="bg-gradient-to-tr from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 px-0.5 py-0.5 rounded transition-all duration-300">
            <ConnectButton
              client={client}
              appMetadata={{
                name: "Syphron",
                url: "https://syphron.finance",
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="text-zinc-300 hover:text-white transition-colors relative group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default Navbar; 