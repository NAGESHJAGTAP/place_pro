// src/components/Navbar.js
import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-red-500 flex items-center">
          <MapPin className="mr-2" />
          PlacePro 
        </div>
        
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for places..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-4 top-2.5 text-gray-400" />
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <a href="about" className="hover:text-orange-500 transition-colors">About Us</a>
          <a href="contact" className="hover:text-orange-500 transition-colors">Contact Us</a>
          <a href="login" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">Log in</a>
          <a href="signin" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">Sign In</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;