import { useState } from "react";
import axios from "axios";

const AddPharmacy = () => {
  const [pharmacy, setPharmacy] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    website: "",
    openingHours: "",
    services: "",
    latitude: "",
    longitude: "",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPharmacy({ ...pharmacy, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPharmacy({ ...pharmacy, image: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(pharmacy).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      const response = await axios.post("http://localhost:3000/api/pharmacies", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Pharmacy added successfully!");
      console.log("Success:", response.data);

      setPharmacy({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
        website: "",
        openingHours: "",
        services: "",
        latitude: "",
        longitude: "",
        image: null,
      });
      setPreviewImage(null);
    } catch (error) {
      console.error("Error adding pharmacy:", error.response?.data || error.message);
      alert(`Failed to add pharmacy: ${error.response?.data?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Add Pharmacy</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Pharmacy Name" value={pharmacy.name} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
          <input type="text" name="address" placeholder="Address" value={pharmacy.address} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="city" placeholder="City" value={pharmacy.city} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
          <input type="text" name="state" placeholder="State" value={pharmacy.state} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="number" name="zip" placeholder="ZIP Code" value={pharmacy.zip} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
          <input type="text" name="phone" placeholder="Phone Number" value={pharmacy.phone} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        </div>
        <input type="email" name="email" placeholder="Email" value={pharmacy.email} onChange={handleChange} required className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        <input type="url" name="website" placeholder="Website" value={pharmacy.website} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />

        <input type="text" name="openingHours" placeholder="Opening Hours (e.g. 9AM - 6PM)" value={pharmacy.openingHours} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />

        <input type="text" name="services" placeholder="Services (comma separated)" value={pharmacy.services} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="latitude" placeholder="Latitude" value={pharmacy.latitude} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
          <input type="text" name="longitude" placeholder="Longitude" value={pharmacy.longitude} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm focus:outline-blue-400" />
        </div>
        <div className="flex flex-col items-center">
          <label className="w-full text-center border p-3 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
            Upload Image
            <input type="file" name="image" onChange={handleFileChange} className="hidden" />
          </label>
          {previewImage && <img src={previewImage} alt="Preview" className="mt-4 w-40 h-40 object-cover rounded-lg shadow-md border border-gray-300" />}
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition duration-200 flex justify-center items-center" disabled={loading}>
          {loading ? <span className="loader"></span> : "Add Pharmacy"}
        </button>
      </form>
    </div>
  );
};

export default AddPharmacy;

