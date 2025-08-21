"use client";

import { Avatar, Name } from "@coinbase/onchainkit/identity";

interface GigCardProps {
  gig: {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    creator: {
      address: string;
      name?: string;
    };
    deliveryTime: string;
    rating: number;
    reviews: number;
  };
}

export function GigCard({ gig }: GigCardProps) {
  return (
    <div className="card hover:shadow-glow transition-all duration-300 cursor-pointer">
      <div className="aspect-video bg-surface rounded-md mb-4 flex items-center justify-center">
        <span className="text-muted">Preview Image</span>
      </div>
      
      <h3 className="font-semibold text-text mb-2 line-clamp-2">{gig.title}</h3>
      <p className="text-muted text-sm mb-4 line-clamp-3">{gig.description}</p>
      
      <div className="flex items-center space-x-2 mb-4">
        <Avatar className="w-6 h-6" />
        <Name className="text-sm text-muted" />
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
          {gig.category}
        </span>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">★</span>
          <span className="text-sm text-muted">{gig.rating} ({gig.reviews})</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-accent">${gig.price}</span>
        <span className="text-sm text-muted">{gig.deliveryTime}</span>
      </div>
    </div>
  );
}
