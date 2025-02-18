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
  {
    id: 3,
    name: 'Apollo Healthcare',
    distance: '1.2 km',
    support: '24/7 Support',
    image: 'https://media.gettyimages.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=StV1gAkbzgp14Us0XAfuIRoWo8iXO7CUwUOlh66Y9S0='
  },
  {
    id: 4,
    name: 'Regional Medical Center',
    distance: '1.2 km',
    support: '24/7 Support',
    image: 'https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=0&k=20&c=oUILskmtaPiA711DP53DFhOUvE7pfdNeEK9CfyxlGio='
  },
  {
    id: 5,
    name: 'Emergency Care Unit',
    distance: '1.2 km',
    support: '24/7 Support',
    image: 'https://t4.ftcdn.net/jpg/03/88/00/37/360_F_388003741_3pDGioOwlLIEr0Af2DaepDlLxc3tgqUZ.jpg'
  },
  {
    id: 6,
    name: 'Community Hospital',
    distance: '1.2 km',
    support: '24/7 Support',
    image: 'https://episodelife.com/backgrounds/EXT_HOSPITAL_BUILDING_CLOUDY_DAY.jpg'
  },
  {
    id: 7,
    name: 'St. John Medical',
    distance: '1.2 km',
    support: '24/7 Support',
    image: 'https://media.istockphoto.com/id/182172308/photo/hospital.jpg?s=612x612&w=0&k=20&c=rbCU08kZ5-BNV-yagONOpcF-kFfjLR_3310EHU0EGP8='
  },
  {
    id: 8,
    name: 'City Health Center',
    distance: '1.2 km',
    support: '24/7 Support',
    image: 'https://media.istockphoto.com/id/993985508/photo/building-with-large-h-sign-for-hospital.jpg?s=612x612&w=0&k=20&c=0K07VYHMEpmKFfhzcGOfmBt9PST05h8ZVddhtsECLMU='
  },
  {
    id: 9,
    name: 'Modern Care Hospital',
    distance: '1.2 km',
    support: '24/7 Support',
    image: 'https://media.istockphoto.com/id/685808588/photo/urban-skyline-with-hospital-and-office-buildings.jpg?s=612x612&w=0&k=20&c=dh3e9oKcY-NCpQ1-t7h7AcRJjzjqfW9X-gUxsHR7IJ8='
  }
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