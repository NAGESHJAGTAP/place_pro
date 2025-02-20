import { useState } from 'react';

export default function SignIn() {
  const [formData, setFormData] = useState({
    userName: '',
    mobileNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Signin error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-center text-orange-600 text-3xl font-bold mb-6">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">User Name</label>
            <input 
              type="text" name="userName" value={formData.userName} onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" 
              placeholder="Enter your Name" required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Mobile Number</label>
            <input 
              type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" 
              placeholder="Enter your Mobile No" required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email Id</label>
            <input 
              type="email" name="email" value={formData.email} onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" 
              placeholder="Enter your Email Id" required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input 
              type="password" name="password" value={formData.password} onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none" 
              placeholder="Enter your Password" required
            />
          </div>

          <div className="text-right">
            <p className="text-sm text-orange-500 cursor-pointer hover:underline">Forgot password?</p>
          </div>

          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200">
            Sign In
          </button>
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
