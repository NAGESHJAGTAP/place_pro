import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const [formData, setFormData] = useState({
    userName: "",
    mobileNumber: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message, { position: "top-right" });
        setTimeout(() => navigate("/login"), 2000); // Delay navigation for better UX
      } else {
        toast.error(data.message || "Sign-in failed!", { position: "top-right" });
      }
    } catch (error) {
      console.error("Signin error:", error);
      toast.error("Something went wrong. Try again!", { position: "top-right" });
    }
  };

  return (
    <div
      className="flex items-center justify-end min-h-screen bg-cover bg-center px-10 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1530789253388-582c481c54b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <ToastContainer />

      <motion.div 
        className="absolute top-40 left-24 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold max-w-lg text-center italic font-serif"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        "Let your heart be your compass, your soul be your guide, and PlacePro be your gateway to the world. Explore, experience, and embrace the adventure that awaits!"
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200 mr-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-orange-600 text-3xl font-bold mb-6">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter your Mobile No"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email Id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter your Email Id"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Enter your Password"
              required
            />
          </div>

          <div className="text-right">
            <p className="text-sm text-orange-500 cursor-pointer hover:underline">
              Forgot password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="text-center my-4 font-medium text-gray-500">OR</div>

        <button className="w-full bg-gray-100 text-black py-2 rounded-lg flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition duration-200">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
      </motion.div>
    </div>
  );
}
