
"use client";

import { ServiceCard } from "./ServiceCard";

interface ServiceGridProps {
  services: any[];
  onServiceClick: (service: any) => void;
}

export function ServiceGrid({ services, onServiceClick }: ServiceGridProps) {
  if (services.length === 0) {
    return (
      <div className="text-center py-2xl">
        <div className="text-6xl mb-lg">🔍</div>
        <h3 className="text-xl font-semibold mb-sm">No services found</h3>
        <p className="text-muted">Try adjusting your search or browse different categories</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-lg animate-fade-in">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          onClick={() => onServiceClick(service)}
        />
      ))}
    </div>
  );
}
