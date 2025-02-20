import React, { useState } from "react";
import { 
  Hospital, 
  MapPin, 
  Phone, 
  Clock, 
  Car, 
  Bus, 
  Info, 
  AlertTriangle,
  User,
  Building2,
  Mail,
  MessageCircle 
} from "lucide-react";

const Hospitaldetails = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openContactModal, setOpenContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });


  const handleChangeTab = (newValue) => {
    setTabValue(newValue);
  };

  const handleContactOpen = () => {
    setOpenContactModal(true);
  };

  const handleContactClose = () => {
    setOpenContactModal(false);
    setContactForm({ name: "", email: "", message: "" });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = () => {
    console.log("Contact form submitted:", contactForm);
    alert("Message sent successfully!");
    handleContactClose();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      {/* Hospital Info Card */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <Hospital className="w-10 h-10 text-blue-600 mr-4" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{hospitalInfo.name}</h2>
            <p className="text-gray-500">{hospitalInfo.type}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-blue-600 mr-3" />
            <span>{hospitalInfo.address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 text-blue-600 mr-3" />
            <span>{hospitalInfo.phone}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-blue-600 mr-3" />
            <span>
              Weekdays: {hospitalInfo.hours.weekday} | 
              Weekends: {hospitalInfo.hours.weekend}
            </span>
          </div>
        </div>

        <div className="flex space-x-4 mt-6">
          <a 
            href={`https://maps.google.com/?q=${hospitalInfo.address}`} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Get Directions
          </a>
          <a 
            href={`tel:${hospitalInfo.phone}`} 
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
          >
            Call Hospital
          </a>
          <button 
            onClick={handleContactOpen}
            className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-50 transition"
          >
            Contact Us
          </button>
        </div>
      </div>

    

    

      {openContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Contact Hospital</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded mb-3"
              value={contactForm.name}
              onChange={handleContactChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded mb-3"
              value={contactForm.email}
              onChange={handleContactChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-3 py-2 border rounded mb-4 h-24"
              value={contactForm.message}
              onChange={handleContactChange}
            />
            <div className="flex justify-end space-x-2">
              <button 
                onClick={handleContactClose}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button 
                onClick={handleContactSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded"
                disabled={!contactForm.name || !contactForm.email || !contactForm.message}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Hospitaldetails;