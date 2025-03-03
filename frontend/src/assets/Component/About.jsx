import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Globe, Shield, Zap, Heart } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/400/400",
      bio: "Former Google AI researcher with a passion for travel technology.",
    },
    {
      name: "Maya Rodriguez",
      role: "Chief Travel Officer",
      image: "/api/placeholder/400/400",
      bio: "Travel journalist who's visited 75+ countries across 7 continents.",
    },
    {
      name: "David Chen",
      role: "Head of AR Development",
      image: "/api/placeholder/400/400",
      bio: "AR/VR pioneer with 12+ years of experience in spatial computing.",
    },
    {
      name: "Sophia Kim",
      role: "UX Design Lead",
      image: "/api/placeholder/400/400",
      bio: "Award-winning designer focused on intuitive travel experiences.",
    },
  ];

  const values = [
    {
      icon: Globe,
      title: "Sustainable Travel",
      desc: "We promote responsible tourism practices and partner with eco-conscious businesses.",
    },
    {
      icon: Shield,
      title: "Safety First",
      desc: "Real-time safety alerts and verified information to keep travelers secure.",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Constantly evolving our technology to provide cutting-edge travel solutions.",
    },
    {
      icon: Star,
      title: "Authenticity",
      desc: "Connecting travelers with genuine local experiences beyond tourist traps.",
    },
    {
      icon: Heart,
      title: "Inclusivity",
      desc: "Making travel accessible for everyone regardless of budget or abilities.",
    },
    {
      icon: MapPin,
      title: "Local Impact",
      desc: "Supporting local communities and businesses in each destination.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src="https://www.explore.co.uk/medialibraries/explore/explore-media/about%20us/shutterstock_420226171.jpg?ext=.jpg&width=1920&format=webp&quality=80&v=201904030916%201920w"
          alt="Our Team"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-5xl font-extrabold mb-6 max-w-4xl drop-shadow-lg">
            About Our Mission
          </h1>
          <p className="text-xl max-w-2xl">
            Transforming how people explore the world through AI and AR technology
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-700 text-lg mb-4">
            Founded in 2025 by me, PlacePro was created to revolutionize travel using AI. Seeing travelers struggle with outdated tools, me built a smart travel companion that makes exploring easier, safer, and more exciting.
            </p>
            <p className="text-gray-700 text-lg mb-4">
            PlacePro helps travelers discover hidden gems, connect with locals, find nearby essentials, and navigate new destinations with confidence—all powered by cutting-edge technology.
            </p>
            <p className="text-gray-700 text-lg">
            Wherever you go, PlacePro is with you!
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://www.reikipagoda.com/wp-content/uploads/2015/09/blog_the-journey-continues.png" 
              alt="Our journey" 
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-orange-50 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;