import React, { useState } from 'react';
import { Search, MapPin, Clock, Phone, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const hospitals = [
  {
    id: 1,
    name: 'City Central Hospital',
    distance: '1.2 km',
    support: '24/7 Support',
    image: 'https://thumbs.dreamstime.com/z/modern-hospital-building-close-up-view-59693685.jpg'
  },
  {
    id: 2,
    name: 'Metro General Hospital',
    distance: '1.2 km',
    support: '24/7 Support',
    image: 'https://thumbs.dreamstime.com/b/modern-hospital-exterior-21083584.jpg'
  },
 
];
const HospitalFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/05/61/6b/05616b208ff9c38393e4debca000137e.jpg"
            alt="Hospital background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Discover the Best Hospital in [Village/City Name]
          </h2>
          <p className="text-gray-600 mb-8">
            Find emergency services near you in seconds.
          </p>
          
          <div className="max-w-2xl">
            <div className="flex items-center bg-white rounded-lg shadow-lg">
              <MapPin className="ml-4 text-orange-500" />
              <input
                type="text"
                placeholder="Search hospital"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 focus:outline-none rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-center mb-12">HOSPITAL LOCATION</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">[{hospital.name}]</h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{hospital.distance} per away</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{hospital.support}</span>
                </div>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    <Link to="/hospital/viewdetails">
                    VIEW DETAILS
                    </Link>
                  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalFinder;