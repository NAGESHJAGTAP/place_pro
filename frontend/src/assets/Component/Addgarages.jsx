import { useState } from "react";
import axios from "axios";

const AddGarage = () => {
  const [garage, setGarage] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    workingHours: "",
    services: "",
    specialties: "",
    latitude: "",
    longitude: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setGarage({ ...garage, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setGarage({ ...garage, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(garage).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      const response = await axios.post("http://localhost:3000/api/garages", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Garage added successfully!");
      console.log("Success:", response.data);

      setGarage({
        name: "",
        address: "",
        phone: "",
        email: "",
        website: "",
        workingHours: "",
        services: "",
        specialties: "",
        latitude: "",
        longitude: "",
        image: null,
      });
      setPreviewImage(null);
    } catch (error) {
      console.error("Error adding garage:", error.response?.data || error.message);
      alert(`Failed to add garage: ${error.response?.data?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Add Garage</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Garage Name" value={garage.name} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
          <input type="text" name="address" placeholder="Address" value={garage.address} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="phone" placeholder="Phone Number" value={garage.phone} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
          <input type="email" name="email" placeholder="Email" value={garage.email} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        </div>
        <input type="url" name="website" placeholder="Website" value={garage.website} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        <input type="text" name="workingHours" placeholder="Working Hours (e.g. Mon-Fri 8AM - 5PM)" value={garage.workingHours} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        <input type="text" name="services" placeholder="Services (comma separated)" value={garage.services} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        <input type="text" name="specialties" placeholder="Specialties (comma separated)" value={garage.specialties} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="latitude" placeholder="Latitude" value={garage.latitude} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
          <input type="text" name="longitude" placeholder="Longitude" value={garage.longitude} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        </div>

        <div className="flex flex-col items-center">
          <label className="w-full text-center border p-3 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
            Upload Image
            <input type="file" name="image" onChange={handleFileChange} className="hidden" />
          </label>
          {previewImage && <img src={previewImage} alt="Preview" className="mt-4 w-40 h-40 object-cover rounded-lg shadow-md border border-gray-300" />}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition duration-200 flex justify-center items-center" disabled={loading}>
          {loading ? <span className="loader"></span> : "Add Garage"}
        </button>
      </form>
    </div>
  );
};

export default AddGarage;
