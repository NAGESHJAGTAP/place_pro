
import { useState } from "react";
import axios from "axios";
const AddHospital = () => {
  const [hospital, setHospital] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    website: "",
    openingHours: "",
    specialties: "",
    facilities: "",
    latitude: "",
    longitude: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setHospital({ ...hospital, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setHospital({ ...hospital, image: file });
    setPreviewImage(URL.createObjectURL(file)); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData();
    for (const key in hospital) {
      formData.append(key, hospital[key]);
    }

    try {
      await axios.post("http://localhost:3000/api/hospitals", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Hospital added successfully!");
      setHospital({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
        website: "",
        openingHours: "",
        specialties: "",
        facilities: "",
        latitude: "",
        longitude: "",
        image: null,
      });
      setPreviewImage(null);
    } catch (error) {
      console.error("Error adding hospital:", error);
      alert("Failed to add hospital.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">Add Hospital</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Hospital Name" value={hospital.name} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
          <input type="text" name="address" placeholder="Address" value={hospital.address} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="city" placeholder="City" value={hospital.city} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
          <input type="text" name="state" placeholder="State" value={hospital.state} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="number" name="zip" placeholder="ZIP Code" value={hospital.zip} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
          <input type="text" name="phone" placeholder="Phone Number" value={hospital.phone} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        </div>
        <input type="email" name="email" placeholder="Email" value={hospital.email} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        <input type="url" name="website" placeholder="Website" value={hospital.website} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />

        <input type="text" name="openingHours" placeholder="Opening Hours (e.g. 9AM - 6PM)" value={hospital.openingHours} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />

        <input type="text" name="specialties" placeholder="Specialties (comma separated)" value={hospital.specialties} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        <input type="text" name="facilities" placeholder="Facilities (comma separated)" value={hospital.facilities} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="latitude" placeholder="Latitude" value={hospital.latitude} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-orange-400" />
          <input type="text" name="longitude" placeholder="Longitude" value={hospital.longitude} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-orange-400" />
        </div>
        <div className="flex flex-col items-center">
          <label className="w-full text-center border p-3 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
            Upload Image
            <input type="file" name="image" onChange={handleFileChange} required className="hidden" />
          </label>
          {previewImage && <img src={previewImage} alt="Preview" className="mt-4 w-40 h-40 object-cover rounded-lg shadow-md border border-gray-300" />}
        </div>
        <button type="submit" className="w-full bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition duration-200 flex justify-center items-center" disabled={loading}>
          {loading ? <span className="loader"></span> : "Add Hospital"}
        </button>
      </form>
    </div>
  );
};

export default AddHospital;
