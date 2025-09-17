// FilterButtons.js

const FilterButtons = ({ filterType, setFilterType }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10 mb-6">
      <div className="flex gap-4">
        <button
          onClick={() => setFilterType("VEG")}
          className={`px-4 py-2 rounded-full font-semibold border transition ${
            filterType === "VEG"
              ? "bg-green-600 text-white border-green-700"
              : "bg-white text-green-700 border-green-600"
          }`}
        >
          Veg Only
        </button>

        <button
          onClick={() => setFilterType("NONVEG")}
          className={`px-4 py-2 rounded-full font-semibold border transition ${
            filterType === "NONVEG"
              ? "bg-red-600 text-white border-red-700"
              : "bg-white text-red-700 border-red-600"
          }`}
        >
          Non-Veg Only
        </button>

        {(filterType === "VEG" || filterType === "NONVEG") && (
          <button
            onClick={() => setFilterType("ALL")}
            className="px-4 py-2 rounded-full font-semibold border border-gray-700 bg-gray-800 text-white transition"
          >
            Show All
          </button>
        )}
      </div>

      {/* <h1 className="text-3xl font-extrabold text-orange-600 tracking-tight border-b-2 border-orange-300 pb-2 w-fit">
        Menu
      </h1> */}
    </div>
  );
};

export default FilterButtons;
