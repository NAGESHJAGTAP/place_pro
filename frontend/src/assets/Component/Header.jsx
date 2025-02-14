// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
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
  );
};

export default Header;