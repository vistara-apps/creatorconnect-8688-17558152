"use client";

import { useMiniKit } from "@coinbase/onchainkit/minikit";
import { useEffect, useState } from "react";
import { MarketplaceHeader } from "./components/MarketplaceHeader";
import { GigBrowser } from "./components/GigBrowser";
import { CreateGigForm } from "./components/CreateGigForm";

export default function App() {
  const { setFrameReady, isFrameReady } = useMiniKit();
  const [activeTab, setActiveTab] = useState("browse");

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <div className="min-h-screen bg-bg text-text">
      <MarketplaceHeader />
      
      <nav className="bg-surface border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("browse")}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === "browse"
                  ? "border-accent text-accent"
                  : "border-transparent text-muted hover:text-text"
              }`}
            >
              Browse Gigs
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === "create"
                  ? "border-accent text-accent"
                  : "border-transparent text-muted hover:text-text"
              }`}
            >
              Create Gig
            </button>
          </div>
        </div>
      </nav>

      <main className="py-8">
        {activeTab === "browse" && <GigBrowser />}
        {activeTab === "create" && <CreateGigForm />}
      </main>

      <footer className="bg-surface border-t border-white/10 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted">
            Built on Base with MiniKit • Decentralized Freelance Marketplace
          </p>
        </div>
      </footer>
    </div>
  );
}
