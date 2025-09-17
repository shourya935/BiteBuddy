import React from "react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 px-6 py-16 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
          About <span className="text-blue-500">BiteBuddy</span>
        </h2>
        <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
          We are your go-to food delivery app in <span className="font-semibold text-blue-600">Indore</span> — bringing
          delicious meals from the best local restaurants straight to your doorstep.
          Whether you're craving spicy Indian food, sizzling street snacks, or gourmet
          meals, <span className="font-semibold text-blue-600">BiteBuddy</span> delivers it hot and fast.
        </p>

        <div className="bg-white shadow-xl rounded-xl p-8 text-left md:text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            Why Choose BiteBuddy?
          </h3>
          <ul className="space-y-3 text-gray-700 text-md md:text-lg">
            <li>🚀 Lightning-fast delivery across Indore</li>
            <li>🍽️ Wide range of partner restaurants</li>
            <li>💸 Affordable pricing & exclusive discounts</li>
            <li>📍 Real-time order tracking & updates</li>
            <li>👨‍🍳 Quality food, carefully packed & safely delivered</li>
          </ul>
        </div>

        <div className="mt-10">
          <p className="text-blue-600 text-lg font-semibold">🍕 From cravings to doorstep – BiteBuddy’s got you!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
