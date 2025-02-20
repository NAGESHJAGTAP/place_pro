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

  const hospitalInfo = {
    name: "Central City Hospital",
    type: "Multi-Specialty Hospital",
    address: "123 Medical Center Drive, Manhattan, NY, 10001",
    phone: "+91 8155814237",
    emergencyPhone: "+1 (555) 911-0000",
    email: "contact@centralcityhospital.com",
    hours: {
      weekday: "8:00 AM - 9:00 PM",
      weekend: "9:00 AM - 5:00 PM",
      emergency: "24/7"
    },
    doctors: [
      { name: "Dr. Sarah Johnson", specialty: "Cardiology", schedule: "Mon-Fri" },
      { name: "Dr. Michael Chen", specialty: "Orthopedics", schedule: "Mon-Thu" },
      { name: "Dr. Emily Brown", specialty: "Pediatrics", schedule: "Tue-Sat" }
    ],
    departments: [
      "Emergency Care", "Cardiology", "Orthopedics", "Pediatrics", "Neurology", "Radiology"
    ],
    parking: {
      visitor: "P1 - Main Visitor Parking",
      emergency: "P2 - Emergency Department Parking",
      rates: "First hour free, $2/hour thereafter"
    },
    transport: {
      bus: ["B1 - Hospital Express", "B2 - City Loop"],
      subway: ["Blue Line - Medical Center Station", "Red Line - Central Station"],
      accessibility: "Wheelchair accessible from all entrances"
    }
  };

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

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        {['Doctors', 'Departments', 'Parking & Transport'].map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleChangeTab(index)}
            className={`px-4 py-2 mx-2 ${
              tabValue === index 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            } rounded`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {tabValue === 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Doctors</h3>
            {hospitalInfo.doctors.map((doctor, index) => (
              <div key={index} className="flex items-center mb-3">
                <User className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium">{doctor.name}</p>
                  <p className="text-gray-600">
                    Specialty: {doctor.specialty} | Schedule: {doctor.schedule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tabValue === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Departments</h3>
            {hospitalInfo.departments.map((dept, index) => (
              <div key={index} className="flex items-center mb-2">
                <Building2 className="w-5 h-5 text-blue-600 mr-3" />
                <span>{dept}</span>
              </div>
            ))}
          </div>
        )}

        {tabValue === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Parking & Transport</h3>
            <div className="mb-4">
              <h4 className="font-medium mb-2">Parking</h4>
              <div className="flex items-center">
                <Car className="w-5 h-5 text-blue-600 mr-3" />
                <span>
                  {hospitalInfo.parking.visitor} - {hospitalInfo.parking.rates}
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Public Transport</h4>
              <div className="flex items-center mb-2">
                <Bus className="w-5 h-5 text-blue-600 mr-3" />
                <span>Bus Routes: {hospitalInfo.transport.bus.join(", ")}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-600 mr-3" />
                <span>Subway Lines: {hospitalInfo.transport.subway.join(", ")}</span>
              </div>
            </div>
          </div>
        )}
      </div>

   
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6 flex items-center">
        <AlertTriangle className="w-6 h-6 mr-3" />
        <span>For medical emergencies, call: {hospitalInfo.emergencyPhone}</span>
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