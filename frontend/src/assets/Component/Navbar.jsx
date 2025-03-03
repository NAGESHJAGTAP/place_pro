import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Menu, X, User } from 'lucide-react';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50 h-20">
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

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/Home" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link>
          <Link to="/login" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">Log in</Link>
          <Link to="/signin" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">Sign In</Link>
          
          {/* Profile Section */}
          <div className="relative">
            <button onClick={toggleProfile} className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
              <User className="text-gray-700" />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
                <p className="text-gray-800 font-semibold">Nagesh Jagtap</p>
                <p className="text-gray-600 text-sm">nageshjagtap063@gmail.com</p>
                <hr className="my-2" />
                <Link to="/profile" className="block text-orange-500 hover:underline">View Profile</Link>
              </div>
            )}
          </div>
        </nav>

        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-lg p-4">
          <Link to="/Home" className="hover:text-orange-500 transition-colors py-2" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="hover:text-orange-500 transition-colors py-2" onClick={toggleMenu}>About Us</Link>
          <Link to="/contact" className="hover:text-orange-500 transition-colors py-2" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/login" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors my-2" onClick={toggleMenu}>Log in</Link>
          <Link to="/signin" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors my-2" onClick={toggleMenu}>Sign In</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
