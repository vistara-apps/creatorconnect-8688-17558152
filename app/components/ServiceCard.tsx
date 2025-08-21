
"use client";

interface ServiceCardProps {
  service: any;
  onClick: () => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div 
      className="card-hover cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-start space-x-md mb-md">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
          <span className="text-xl">{service.emoji}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          <p className="text-muted text-sm">by {service.creator}</p>
        </div>
        <div className="text-right">
          <div className="font-bold text-lg text-success">{service.price}</div>
          <div className="badge">{service.category}</div>
        </div>
      </div>

      <p className="text-muted mb-md line-clamp-2">{service.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-lg text-sm text-muted">
          <span>⭐ {service.rating}</span>
          <span>📦 {service.orders} orders</span>
          <span>⏱️ {service.deliveryTime}</span>
        </div>
        
        <div className="flex space-x-xs">
          {service.tags.slice(0, 2).map((tag: string) => (
            <span key={tag} className="badge text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
