import React, { useState, useEffect } from "react";
import { MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const GarageFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Finding your location...");
  const [garages, setGarages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await response.json();
            setLocation(data.address.city || data.address.village || "Unknown Location");
          } catch (error) {
            setLocation("Location not found");
          }
        },
        () => setLocation("Location access denied")
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);

  useEffect(() => {
    const fetchGarages = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/garages");
        if (!response.ok) throw new Error("Failed to fetch garages");

        const data = await response.json();
        if (!Array.isArray(data)) throw new Error("Invalid response format");

        setTimeout(() => {
          setGarages(data);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching garages:", error);
        setError("Failed to load garages. Please try again later.");
        setLoading(false);
      }
    };

    fetchGarages();
  }, []);

  const filteredGarages = garages.filter((garage) =>
    garage.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/05/61/6b/05616b208ff9c38393e4debca000137e.jpg"
            alt="Garage background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Find the Best Garage in {location}
          </h2>
          <p className="text-gray-600 mb-8">Locate nearby garages quickly.</p>
          <div className="max-w-2xl">
            <div className="flex items-center bg-white rounded-lg shadow-lg">
              <MapPin className="ml-4 text-orange-500" />
              <input
                type="text"
                placeholder="Search garage"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 focus:outline-none rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h3 className="text-2xl font-bold text-center flex-grow ml-48">GARAGE LOCATIONS</h3>
          <Link to="/garage/addgarage">
            <button className="mt-4 md:mt-0 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors w-full md:w-auto">
              Add Garage
            </button>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredGarages.length === 0 ? (
          <p className="text-center text-gray-500">No garages found...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGarages.map((garage) => (
              <div key={garage._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={
                    garage.image?.startsWith("http")
                      ? garage.image
                      : `http://localhost:3000/uploads/${garage.image}`
                  }
                  alt={garage.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=No+Image")}
                />
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">{garage.name}</h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>
                      {garage.city}, {garage.state}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{garage.openingHours || "No data available"}</span>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    <Link to={`/garage/viewdetails/${garage._id}`}>VIEW DETAILS</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GarageFinder;
