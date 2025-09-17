// components/SearchBar.jsx
import { useState, useEffect, useRef } from "react";

function SearchBar({ categories = [], onSearchResults, onClear }) {
  const [searchText, setSearchText] = useState("");
  const debounceTimer = useRef(null);

  const performSearch = (text) => {
    const searchValue = text.toLowerCase().trim();

    if (searchValue === "") {
      // If search is empty, show original categories
      onSearchResults(null);  // null or undefined means "show original"
      return;
    }

    const matchedItems = [];

    categories.forEach((category) => {
      const itemCards = category?.card?.card?.itemCards || [];

      itemCards.forEach((item) => {
        const info = item?.card?.info || {};
        const name = info?.name?.toLowerCase() || "";
        const description = info?.description?.toLowerCase() || "";

        if (name.includes(searchValue) || description.includes(searchValue)) {
          matchedItems.push(item);
        }
      });
    });

    onSearchResults(matchedItems);
  };

  // Debounced effect
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      performSearch(searchText);
    }, 500);

    return () => clearTimeout(debounceTimer.current);
  }, [searchText]);

  const handleClear = () => {
    setSearchText("");
    onSearchResults(null); // Show original categories again
    onClear?.();
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8 w-full">
      <input
        type="text"
        placeholder="Search dishes or cuisines..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full sm:w-[400px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {searchText && (
        <button
          onClick={handleClear}
          className="text-sm text-gray-500 underline hover:text-gray-700"
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBar;


