// src/components/MainBody.js
import React, { useState } from 'react';
import categories from './categories';

const MainBody = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Discover Everything Around You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div 
            key={category.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            onMouseEnter={() => setSelectedCategory(category.title)}
            onMouseLeave={() => setSelectedCategory(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <div className="grid grid-cols-2 gap-1">
                {category.images.slice(0, 4).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${category.title} ${idx + 1}`}
                    className="w-full h-24 object-cover"
                  />
                ))}
              </div>
              {selectedCategory === category.title && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                    View All
                  </button>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">20+ locations</span>
                <button className="text-orange-500 hover:text-orange-600 transition-colors">
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBody;