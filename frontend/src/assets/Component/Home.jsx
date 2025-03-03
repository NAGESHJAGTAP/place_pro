import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, Phone, Camera, Users, Globe, Lightbulb, Video, Ticket, Calendar } from 'lucide-react';
import categories from './Categories';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleViewAll = (categoryTitle) => {
    navigate(`/categories/${categoryTitle.toLowerCase()}`);
  };
  return (
    <div>
      <div className="relative h-[600px]">
        <img
          src="https://s-i.huffpost.com/gen/2243136/images/o-ADVENTURE-TRAVEL-facebook.jpg"
          alt="Travel Adventure"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-5xl md:text-7xl text-center font-extrabold mb-6 max-w-4xl drop-shadow-lg">
            Experience AI & AR-Powered Smart Travel
          </h1>
          <h2 className="text-2xl md:text-3xl text-center mb-8 text-gray-200 font-light">
            Your ultimate companion for seamless exploration
          </h2>
          <div className="flex gap-6">
            <button className="bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all shadow-lg">
              Start Exploring
            </button>
            <button className="bg-white text-orange-500 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900">Smart Travel Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {[{icon: Camera, title: "AR Guide", desc: "Scan locations with your camera to see details, reviews & directions."},
            {icon: Globe, title: "AI Travel Planner", desc: "Get personalized travel plans based on your interests."},
            {icon: Lightbulb, title: "Hidden Gems", desc: "Unlock secret spots by completing fun challenges."},
            {icon: Users, title: "Travel Buddy Match", desc: "Find travelers with similar interests & language."},
            {icon: Search, title: "Live Crowd & Safety", desc: "See real-time crowd density & safety alerts."},
            {icon: Phone, title: "AI Voice Assistant", desc: "Ask for travel tips, even offline!"},
            {icon: Ticket, title: "Instant Discounts", desc: "Get exclusive traveler discounts at partner locations."},
            {icon: Calendar, title: "Memory Timeline", desc: "Automatically create & share your travel story."},
            {icon: Video, title: "Local Guide Videos", desc: "Watch 30-sec clips from locals about each place."}].map((feature, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-2xl text-center hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-orange-500 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
