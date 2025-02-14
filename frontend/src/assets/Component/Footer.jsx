// src/components/Footer.js
import React from 'react';
import { Phone, Mail, Instagram, Twitter, Facebook, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <MapPin className="mr-2" />
              PlacePro
            </div>
            <p className="text-gray-400 mb-4">Your one-stop destination for everything unique in your city.</p>
            <p className="text-sm"> 2025 PLACEPRO</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="Home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="Explore" className="hover:text-white transition-colors">Explore</a></li>
              <li><a href="Categories" className="hover:text-white transition-colors">Categories</a></li>
              <li><a href="Blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center"><Phone className="w-5 h-5 mr-2" /> +123 456 7890</li>
              <li className="flex items-center"><Mail className="w-5 h-5 mr-2" /> support@placepro.com</li>
              <li>123 Travel Street, Wonder-land City</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="https://x.com/home?lang=en" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/in/nagesh-jagtap-9bb56031a/" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;