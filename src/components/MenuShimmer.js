import React from "react";

// components/MenuShimmer.jsx
function MenuShimmer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 animate-pulse space-y-8">
      {/* Restaurant Header Shimmer */}
      <div className="bg-gray-200 h-8 w-2/3 rounded-md"></div>
      <div className="flex justify-between items-center gap-4">
        <div className="bg-gray-200 h-5 w-1/4 rounded-md"></div>
        <div className="bg-gray-200 h-5 w-1/4 rounded-md"></div>
      </div>

      {/* Search bar shimmer */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="h-10 w-full sm:w-[400px] bg-gray-200 rounded-md"></div>
        <div className="h-10 w-24 bg-gray-200 rounded-md"></div>
      </div>

      {/* Filter button shimmer */}
      <div className="flex gap-4 justify-center mt-4">
        <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
        <div className="h-8 w-28 bg-gray-200 rounded-full"></div>
        <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
      </div>

      {/* Accordion Category Shimmers */}
      {[1, 2, 3].map((_, idx) => (
        <div key={idx} className="space-y-3 border-b pb-6">
          {/* Accordion header shimmer */}
          <div className="h-6 bg-gray-300 rounded-md w-1/3"></div>

          {/* Menu item shimmer cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-gray-100 rounded-lg p-4 shadow-sm"
              >
                <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 w-3/4 rounded-md"></div>
                  <div className="h-3 bg-gray-300 w-1/2 rounded-md"></div>
                  <div className="h-3 bg-gray-300 w-full rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuShimmer;
