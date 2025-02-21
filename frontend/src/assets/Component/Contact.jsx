import React from 'react';

const Contact = () => {
  return (
    <div className="font-sans text-gray-800">
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-xl mx-auto opacity-90">
            We're here to help! Reach out with any questions or feedback.
          </p>
        </div>
      </section>

      <section className="py-10 px-4 md:px-6 lg:px-8">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-xl p-6 md:p-8 border-t-4 border-orange-600 hover:shadow-2xl transition-all">
          <h2 className="text-3xl font-semibold text-center mb-6 text-orange-600">Get in Touch</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none resize-none"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-transform transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="py-6 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-700">Coding gita Rai university Ahmedabad</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-700">support@placepro.com</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-700">+123 456 7890</p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">Why Contact Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">Our team is always ready to assist you with your travel queries.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-3">Personalized Assistance</h3>
              <p className="text-gray-600">We provide tailored recommendations to make your journey smoother.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
              <p className="text-gray-600">We ensure fast and reliable responses to all your inquiries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
