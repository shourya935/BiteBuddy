import React from "react";

function ShimmerCard() {
  return (
    <div className="w-[300px] h-[320px] rounded-xl overflow-hidden shadow-lg bg-white animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gray-200"></div>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Ad & Name */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-4 bg-gray-300 rounded"></div>
          <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
        </div>

        {/* Rating & Time */}
        <div className="flex gap-2">
          <div className="w-12 h-3 bg-gray-300 rounded"></div>
          <div className="w-4 h-3 bg-gray-300 rounded"></div>
          <div className="w-16 h-3 bg-gray-300 rounded"></div>
        </div>

        {/* Cuisine */}
        <div className="w-full h-3 bg-gray-300 rounded"></div>

        {/* Footer text */}
        <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default ShimmerCard;






