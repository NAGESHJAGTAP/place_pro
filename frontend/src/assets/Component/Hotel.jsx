
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const hotels = [
  {
    id: 1,
    name: 'Grand Palace Hotel',
    distance: '0.7 km',
    support: 'Luxury Stay',
    image: 'https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg'
  },
  {
    id: 2,
    name: 'Cozy Inn',
    distance: '1.5 km',
    support: 'Budget Friendly',
    image: 'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI='
  },
  {
    id: 3,
    name: 'Sea View Resort',
    distance: '2.2 km',
    support: 'Beachfront Hotel',
    image: 'https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A='
  },
  {
    id: 3,
    name: 'Sea View Resort',
    distance: '2.2 km',
    support: 'Beachfront Hotel',
    image: 'https://www.luxuryabode.com/mona/img/hotels.jpg'
  },
  {
    id: 3,
    name: 'Sea View Resort',
    distance: '2.2 km',
    support: 'Beachfront Hotel',
    image: 'https://images.unsplash.com/photo-1536269404660-0a8d4e88bf1b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjBleHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 3,
    name: 'Sea View Resort',
    distance: '2.2 km',
    support: 'Beachfront Hotel',
    image: 'https://www.gingerhotels.com/resourcefiles/hotelprofile/udaipur-0.jpg?version=1312025221424'
  },
  {
    id: 3,
    name: 'Sea View Resort',
    distance: '2.2 km',
    support: 'Beachfront Hotel',
    image: 'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI='
  },
  {
    id: 3,
    name: 'Sea View Resort',
    distance: '2.2 km',
    support: 'Beachfront Hotel',
    image: 'https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg'
  },
  {
    id: 3,
    name: 'Sea View Resort',
    distance: '2.2 km',
    support: 'Beachfront Hotel',
    image: 'https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A='
  }
];

const Hotel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Your Location');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
          .then(response => response.json())
          .then(data => {
            setLocation(data.address.city || data.address.village || 'Unknown Location');
          })
          .catch(() => setLocation('Unknown Location'));
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd"
            alt="Hotel background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Find the Best Hotels in {location}
          </h2>
          <p className="text-gray-600 mb-8">
            Stay in the most comfortable and affordable hotels near you.
          </p>
          
          <div className="max-w-2xl">
            <div className="flex items-center bg-white rounded-lg shadow-lg">
              <MapPin className="ml-4 text-orange-500" />
              <input
                type="text"
                placeholder="Search hotels"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 focus:outline-none rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12 ml-32">
          <h3 className="text-2xl font-bold flex-grow text-center">HOTEL LOCATIONS</h3>
          <Link to="/hotels/add">
            <button className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors w-full md:w-auto">
              Add Hotel
            </button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">[{hotel.name}]</h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{hotel.distance} away</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{hotel.support}</span>
                </div>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  <Link to="/hotels/viewdetails">
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

export default Hotel;
