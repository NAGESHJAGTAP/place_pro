// import React from 'react';

// const About = () => {
//   return (
//     <div className="font-sans text-gray-800">
//       <section className="bg-gradient-to-r from-orange-600 to-orange-600 text-white py-24 text-center">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">About PlacePro</h1>
//           <p className="text-xl max-w-3xl mx-auto opacity-90">
//             Discover nearby locations with ease and convenience.
//           </p>
//         </div>
//       </section>
//       <section className="py-10 px-4 md:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//           {["Explore Nearby Services", "Find Attractions Easily", "Simplify Your Travel"].map((title, index) => (
//             <div 
//               key={index}
//               className="bg-gray-100 p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform"
//             >
//               <h3 className="text-xl font-semibold mb-4">{title}</h3>
//               <p className="text-gray-600">
//                 Access essential places like hospitals, pharmacies, and attractions effortlessly.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Core Features */}
//       <section className="py-10 px-4 md:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Core Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {["Hospitals & Pharmacies", "Food Shops & Restaurants", "Hotels & Events", "Attractions & Sports"].map((feature, index) => (
//               <div 
//                 key={index}
//                 className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:-translate-y-2 transition-transform"
//               >
//                 <h3 className="text-xl font-semibold mb-4">{feature}</h3>
//                 <p className="text-gray-600">Easily locate and access nearby services anytime, anywhere.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-10 px-4 md:px-6 lg:px-8 bg-gray-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">What Travelers Say</h2>
//           <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 gap-6">
//             {["PlacePro made finding a hospital so easy!", "We discovered amazing attractions nearby!"]
//               .map((feedback, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform"
//                 >
//                   <p className="text-lg italic mb-4">"{feedback}"</p>
//                   <p className="font-bold text-right">- Traveler</p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-10 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-center">
//         <div className="container mx-auto px-4 max-w-3xl">
//           <h2 className="text-3xl font-bold mb-4">Start Exploring with PlacePro!</h2>
//           <p className="text-lg mb-6">Find nearby places effortlessly for your next journey.</p>
//           <a 
//             href="/contact" 
//             className="inline-block bg-white text-orange-500 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-transform hover:-translate-y-2"
//           >
//             Get Started
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;










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

      {/* Meet the Team */}
      {/* <div className="container mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Travel Revolution
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Be part of the next generation of smart, responsible travel.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-orange-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            Download The App
          </motion.button>
        </div>
      </div> */}
    </div>
  );
};

export default About;