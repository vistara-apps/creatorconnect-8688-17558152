"use client";

import { useState } from "react";
import { GigCard } from "./GigCard";

const mockGigs = [
  {
    id: "1",
    title: "I will create viral TikTok content for your brand",
    description: "Professional TikTok content creation with trending sounds, effects, and hashtags. Guaranteed engagement boost.",
    price: 150,
    category: "content",
    creator: {
      address: "0x1234...5678",
      name: "CreativeGuru"
    },
    deliveryTime: "3 days",
    rating: 4.9,
    reviews: 127
  },
  {
    id: "2",
    title: "I will design stunning Instagram posts and stories",
    description: "Eye-catching Instagram designs that convert. Includes 10 posts + 5 stories with your brand colors.",
    price: 75,
    category: "design",
    creator: {
      address: "0x8765...4321",
      name: "DesignPro"
    },
    deliveryTime: "2 days",
    rating: 4.8,
    reviews: 89
  },
  {
    id: "3",
    title: "I will write engaging blog posts for your website",
    description: "SEO-optimized blog posts that drive traffic. Research included, 1000+ words, unlimited revisions.",
    price: 100,
    category: "writing",
    creator: {
      address: "0x9999...1111",
      name: "WordSmith"
    },
    deliveryTime: "5 days",
    rating: 4.7,
    reviews: 203
  },
  {
    id: "4",
    title: "I will edit professional YouTube videos",
    description: "Complete video editing with transitions, music, thumbnails. Perfect for content creators and businesses.",
    price: 200,
    category: "video",
    creator: {
      address: "0x5555...7777",
      name: "VideoMaster"
    },
    deliveryTime: "1 week",
    rating: 4.9,
    reviews: 156
  }
];

export function GigBrowser() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "content", name: "Content Creation" },
    { id: "design", name: "Design" },
    { id: "video", name: "Video Editing" },
    { id: "writing", name: "Writing" },
    { id: "social", name: "Social Media" }
  ];

  const filteredGigs = mockGigs.filter(gig => {
    const matchesCategory = selectedCategory === "all" || gig.category === selectedCategory;
    const matchesSearch = gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gig.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-text mb-4">Browse Gigs</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search gigs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field flex-1"
          />
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input-field md:w-48"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category.id
                  ? "bg-accent text-bg"
                  : "bg-surface text-muted hover:text-text"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGigs.map(gig => (
          <GigCard key={gig.id} gig={gig} />
        ))}
      </div>

      {filteredGigs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted text-lg">No gigs found matching your criteria.</p>
          <p className="text-muted">Try adjusting your search or category filter.</p>
        </div>
      )}
    </div>
  );
}
