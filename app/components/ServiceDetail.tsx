
"use client";

import { useState } from "react";

interface ServiceDetailProps {
  service: any;
  onBack: () => void;
}

export function ServiceDetail({ service, onBack }: ServiceDetailProps) {
  const [selectedPackage, setSelectedPackage] = useState('basic');

  const packages = {
    basic: { price: service.price, features: service.basicFeatures },
    standard: { price: service.standardPrice, features: service.standardFeatures },
    premium: { price: service.premiumPrice, features: service.premiumFeatures }
  };

  return (
    <div className="animate-slide-up">
      <button 
        onClick={onBack}
        className="btn-ghost mb-lg"
      >
        ← Back to marketplace
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
        <div className="lg:col-span-2 space-y-lg">
          <div className="card">
            <div className="flex items-start space-x-md mb-lg">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <span className="text-3xl">{service.emoji}</span>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-sm">{service.title}</h1>
                <p className="text-muted">by {service.creator}</p>
                <div className="flex items-center space-x-lg mt-sm text-sm">
                  <span className="text-warning">⭐ {service.rating} ({service.reviews} reviews)</span>
                  <span className="text-muted">📦 {service.orders} orders completed</span>
                </div>
              </div>
            </div>

            <div className="space-y-md">
              <div>
                <h3 className="font-semibold mb-sm">About this service</h3>
                <p className="text-muted leading-relaxed">{service.fullDescription}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-sm">What you'll get</h3>
                <ul className="space-y-xs text-muted">
                  {service.deliverables.map((item: string, index: number) => (
                    <li key={index} className="flex items-center space-x-sm">
                      <span className="text-success">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-xs">
                {service.tags.map((tag: string) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold mb-md">Recent Reviews</h3>
            <div className="space-y-md">
              {service.recentReviews.map((review: any, index: number) => (
                <div key={index} className="border-b border-white/10 pb-md last:border-0">
                  <div className="flex items-center space-x-sm mb-sm">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-primary/30"></div>
                    <div>
                      <div className="font-medium text-sm">{review.author}</div>
                      <div className="text-warning text-sm">{'⭐'.repeat(review.rating)}</div>
                    </div>
                  </div>
                  <p className="text-muted text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card h-fit">
          <div className="mb-lg">
            <h3 className="font-semibold mb-md">Choose Package</h3>
            <div className="space-y-sm">
              {Object.entries(packages).map(([key, pkg]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPackage(key)}
                  className={`w-full p-md rounded-md border text-left transition-all ${
                    selectedPackage === key
                      ? 'border-accent bg-accent/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-center mb-sm">
                    <span className="font-medium capitalize">{key}</span>
                    <span className="font-bold text-success">{pkg.price}</span>
                  </div>
                  <ul className="text-sm text-muted space-y-xs">
                    {pkg.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center space-x-xs">
                        <span className="text-success">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-md">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Delivery time</span>
              <span>{service.deliveryTime}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted">Revisions</span>
              <span>{service.revisions}</span>
            </div>
          </div>

          <div className="border-t border-white/10 pt-lg mt-lg">
            <div className="flex justify-between items-center mb-md">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold text-success">
                {packages[selectedPackage as keyof typeof packages].price}
              </span>
            </div>
            <button className="btn-primary w-full mb-sm">
              Order Now
            </button>
            <button className="btn-secondary w-full">
              Contact Creator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
