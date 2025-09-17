import React from "react";

function SearchUI({ searchInput, setSearchInput, handelClick, handelClick2, reset }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-6 bg-white shadow rounded-md">
      <div className="flex flex-wrap gap-2 items-center">
        <input
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 placeholder-gray-500 w-64"
          type="text"
          placeholder="Search restaurants..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          id="123"
        />
        <button
          className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition"
          onClick={handelClick2}
        >
          🔍 Search
        </button>
    
      </div>
      <button
        className="px-5 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        onClick={handelClick}
      >
        🌟 Top Rated
      </button>
    </div>
  );
}
export default SearchUI