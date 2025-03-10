import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syphron | AI DeFi Agent",
  description:
    "Syphron is the first AI-powered DeFi agent that automates yield strategies and returns profit to tokenholders. Syphron is a fully autonoumous agent designed to maximize profit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          <div className="min-h-screen bg-zinc-950 bg-[radial-gradient(ellipse_at_center,rgba(17,24,39,0.15),rgba(0,0,0,0))]">
            <Navbar />
            {children}
          </div>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
