
"use client";

import { useState } from "react";

interface CreateServiceModalProps {
  onClose: () => void;
}

export function CreateServiceModal({ onClose }: CreateServiceModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'content',
    price: '',
    deliveryTime: '3-5 days',
    tags: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Creating service:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="animate-slide-up">
      <div className="flex items-center justify-between mb-lg">
        <h2 className="text-2xl font-bold">Create New Service</h2>
        <button onClick={onClose} className="btn-ghost">
          ✕
        </button>
      </div>

      <div className="card max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-lg">
          <div>
            <label className="block text-sm font-medium mb-sm">Service Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="I will create amazing content for your brand"
              className="input-field w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-sm">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what you'll deliver and what makes your service unique..."
              className="input-field w-full h-24 resize-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div>
              <label className="block text-sm font-medium mb-sm">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input-field w-full"
              >
                <option value="content">Content Creation</option>
                <option value="social">Social Media</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="video">Video</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-sm">Starting Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="$50"
                className="input-field w-full"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div>
              <label className="block text-sm font-medium mb-sm">Delivery Time</label>
              <select
                name="deliveryTime"
                value={formData.deliveryTime}
                onChange={handleChange}
                className="input-field w-full"
              >
                <option value="1 day">1 day</option>
                <option value="2-3 days">2-3 days</option>
                <option value="3-5 days">3-5 days</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-sm">Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="content, social, instagram"
                className="input-field w-full"
              />
            </div>
          </div>

          <div className="pt-md border-t border-white/10">
            <div className="flex space-x-md">
              <button type="submit" className="btn-primary flex-1">
                Create Service
              </button>
              <button type="button" onClick={onClose} className="btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
