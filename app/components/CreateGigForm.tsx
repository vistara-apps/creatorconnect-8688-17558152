"use client";

import { useState } from "react";
import { usePrimaryButton } from "@coinbase/onchainkit/minikit";

export function CreateGigForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    deliveryTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  usePrimaryButton(
    { text: isSubmitting ? "Creating..." : "Create Gig" },
    async () => {
      if (!formData.title || !formData.description || !formData.price) return;
      
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        deliveryTime: "",
      });
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-text mb-6">Create New Gig</h2>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Gig Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="input-field w-full"
            placeholder="I will create amazing content for your brand..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="input-field w-full resize-none"
            placeholder="Describe what you'll deliver..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Price (USD)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="input-field w-full"
              placeholder="50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="input-field w-full"
            >
              <option value="">Select category</option>
              <option value="content">Content Creation</option>
              <option value="design">Design</option>
              <option value="video">Video Editing</option>
              <option value="social">Social Media</option>
              <option value="writing">Writing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-2">
              Delivery Time
            </label>
            <select
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleInputChange}
              className="input-field w-full"
            >
              <option value="">Select time</option>
              <option value="1 day">1 day</option>
              <option value="3 days">3 days</option>
              <option value="1 week">1 week</option>
              <option value="2 weeks">2 weeks</option>
            </select>
          </div>
        </div>

        <div className="bg-surface/50 p-4 rounded-lg">
          <h3 className="font-medium text-text mb-2">Preview</h3>
          <div className="text-sm text-muted">
            <p><strong>Title:</strong> {formData.title || "Your gig title"}</p>
            <p><strong>Price:</strong> ${formData.price || "0"}</p>
            <p><strong>Delivery:</strong> {formData.deliveryTime || "Not specified"}</p>
          </div>
        </div>
      </form>
    </div>
  );
}
