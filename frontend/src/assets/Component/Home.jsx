import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import categories from './Categories';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleViewAll = (categoryTitle) => {
    navigate(`/categories/${categoryTitle.toLowerCase()}`);
  };

  return (
    <div>
      <div className="relative h-[500px]">
        <img
          src="https://s-i.huffpost.com/gen/2243136/images/o-ADVENTURE-TRAVEL-facebook.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl md:text-6xl text-center font-bold mb-6 max-w-4xl">
            Discover nearby hospitals, top hotels, and essential locations
          </h1>
          <h2 className="text-xl md:text-2xl text-center mb-8 text-gray-200">
            Your ultimate travel companion for every journey
          </h2>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
              Explore Now
            </button>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Main Body Section */}
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
                    <button
                      className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                      onClick={() => handleViewAll(category.title)}
                    >
                      {category.title} View All
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
    </div>
  );
};

export default Home;
