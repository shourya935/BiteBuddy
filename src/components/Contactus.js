import React from 'react'

function Contactus() {
return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 px-6 py-16 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          Contact <span className="text-blue-500">BiteBuddy</span>
        </h1>
        <p className="text-lg md:text-xl font-medium mb-10">
          We’re always here to help you with your food cravings, delivery issues, or any feedback you have. 🛵🍔
        </p>

        <div className="bg-white rounded-xl shadow-lg p-8 text-left">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">📩 Email Us</h3>
          <p className="text-gray-700 text-lg mb-6">
            You can reach us at{" "}
            <a
              href="mailto:bitebuddy123@gmail.com"
              className="text-blue-600 font-medium hover:underline"
            >
              bitebuddy123@gmail.com
            </a>{" "}
            for any queries or support.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">📞 Customer Care</h3>
          <p className="text-gray-700 text-lg">
            Call us anytime between 9 AM - 11 PM at{" "}
            <span className="font-medium text-blue-700">+91 98765 43210</span>
          </p>
        </div>

        <p className="mt-10 text-blue-600 text-lg font-semibold mb-4">
          💬 We’d love to hear from you!
        </p>

         <input
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500 w-64"
          type="text"
          placeholder="Enter Your Message"
          id="123"
        />
        <button
          className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition"
        >
          Submit
        </button>
    
      </div>
    </div>
  );
}

export default Contactus