import React from 'react';

const About = () => {
  return (
    <div className="font-sans text-gray-800">
      <section className="bg-gradient-to-r from-orange-600 to-orange-600 text-white py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About PlacePro</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover nearby locations with ease and convenience.
          </p>
        </div>
      </section>
      <section className="py-10 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Explore Nearby Services", "Find Attractions Easily", "Simplify Your Travel"].map((title, index) => (
            <div 
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600">
                Access essential places like hospitals, pharmacies, and attractions effortlessly.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section className="py-10 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Hospitals & Pharmacies", "Food Shops & Restaurants", "Hotels & Events", "Attractions & Sports"].map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:-translate-y-2 transition-transform"
              >
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-600">Easily locate and access nearby services anytime, anywhere.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 px-4 md:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">What Travelers Say</h2>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 gap-6">
            {["PlacePro made finding a hospital so easy!", "We discovered amazing attractions nearby!"]
              .map((feedback, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-2 transition-transform"
                >
                  <p className="text-lg italic mb-4">"{feedback}"</p>
                  <p className="font-bold text-right">- Traveler</p>
                </div>
              ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default About;