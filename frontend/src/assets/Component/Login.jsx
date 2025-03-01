import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login Successful! Redirecting...");
        setTimeout(() => navigate("/Home"), 2000);
      } else {
        toast.error(data.message || "Invalid credentials! Try again.");
      }
    } catch (error) {
      toast.error("Network error! Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="https://media.istockphoto.com/id/1169562119/video/young-couple-of-parents-with-two-children-holding-hands-of-each-other-and-running-through.mp4?s=mp4-640x640-is&k=20&c=d3Y2O3dW8OETJFOsEBCKeSriYs0_mi4SpQ29ODD8x44=" type="video/mp4" />
      </video>

      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 text-white text-5xl font-extrabold italic text-right animate-fade-in shadow-2xl p-8 leading-snug max-w-lg">
        "Explore the world, find your way—PlacePro guides your journey every day!"
      </div>

      <div className="relative z-10 w-full max-w-md ml-24 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-center text-orange-600 text-3xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email Id</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="Enter your Email Id" required />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="Enter your Password" required />
          </div>

          <div className="text-right">
            <p className="text-sm text-orange-500 cursor-pointer hover:underline">Forgot password?</p>
          </div>

          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200">Login</button>
        </form>

        <div className="text-center my-4 font-medium text-gray-500">OR</div>

        <button className="w-full bg-gray-100 text-black py-2 rounded-lg flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition duration-200">
          <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
