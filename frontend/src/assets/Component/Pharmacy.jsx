import React, { useState } from 'react';
import { Search, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const pharmacies = [
  {
    id: 1,
    name: 'City Pharmacy',
    distance: '0.8 km',
    support: '24/7 Support',
    image: 'https://images.unsplash.com/photo-1576091160501-bbe57469278b'
  },
  {
    id: 2,
    name: 'HealthPlus Pharmacy',
    distance: '1.0 km',
    support: '24/7 Support',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
  },
  {
    id: 3,
    name: 'Wellness Drugstore',
    distance: '1.2 km',
    support: '24/7 Support',
    image: 'https://images.unsplash.com/photo-1608069381915-43fc131f4fe4'
  },
  {
    id: 4,
    name: 'MediCare Pharmacy',
    distance: '1.5 km',
    support: '24/7 Support',
    image: 'https://images.unsplash.com/photo-1589652717406-1c69efaf1ff1'
  }
];

const Pharmacy = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/05/61/6b/05616b208ff9c38393e4debca000137e.jpg"
            alt="Pharmacy background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Discover the Best Pharmacy in [Village/City Name]
          </h2>
          <p className="text-gray-600 mb-8">
            Find nearby pharmacies easily.
          </p>
          <div className="max-w-2xl">
            <div className="flex items-center bg-white rounded-lg shadow-lg">
              <MapPin className="ml-4 text-orange-500" />
              <input
                type="text"
                placeholder="Search pharmacy"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 focus:outline-none rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-center mb-12">PHARMACY LOCATIONS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pharmacies.map((pharmacy) => (
            <div key={pharmacy.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={pharmacy.image}
                alt={pharmacy.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">[{pharmacy.name}]</h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{pharmacy.distance} away</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{pharmacy.support}</span>
                </div>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  <Link to="/pharmacy/viewdetails">VIEW DETAILS</Link>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
</div>
  );
};
export default Pharmacy;
