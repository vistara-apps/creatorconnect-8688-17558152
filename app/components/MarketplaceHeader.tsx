"use client";

import { Identity, Name, Avatar } from "@coinbase/onchainkit/identity";
import { ConnectWallet, Wallet, WalletDropdown, WalletDropdownDisconnect } from "@coinbase/onchainkit/wallet";
import { useAddFrame } from "@coinbase/onchainkit/minikit";
import { useState } from "react";

export function MarketplaceHeader() {
  const [frameAdded, setFrameAdded] = useState(false);
  const addFrame = useAddFrame();

  const handleAddFrame = async () => {
    const result = await addFrame();
    setFrameAdded(Boolean(result));
  };

  return (
    <header className="bg-surface border-b border-white/10 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-accent">CreatorMarket</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#browse" className="text-muted hover:text-text transition-colors">Browse</a>
            <a href="#create" className="text-muted hover:text-text transition-colors">Create Gig</a>
            <a href="#dashboard" className="text-muted hover:text-text transition-colors">Dashboard</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={handleAddFrame}
            className="btn-primary text-sm"
            disabled={frameAdded}
          >
            {frameAdded ? "Added ✓" : "Add Frame"}
          </button>
          
          <Wallet className="z-10">
            <ConnectWallet>
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8" />
                <Name className="text-text" />
              </div>
            </ConnectWallet>
            <WalletDropdown>
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name />
              </Identity>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
