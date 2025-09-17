import React from "react";
import { useEffect, useRef } from "react";
import useRestroCards from "../Utils/customHooks/useRestroCards";
import Dish from "./Dish";
import { Link } from "react-router-dom";

function DishCarousel() {
  const scrollRef = useRef(null);
  const Data = useRestroCards();

  const dishList =
    Data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];

  // Extract collection_id from entityId (swiggy format)
  function getCollectionId(entityId) {
    if (/^\d+$/.test(entityId)) return entityId;
    if (entityId.startsWith("swiggy://")) {
      try {
        const url = new URL(entityId.replace("swiggy://", "http://"));
        return url.searchParams.get("collection_id");
      } catch (e) {
        console.error("❌ Failed to parse entityId:", entityId);
      }
    }
    return null;
  }

  // Handle left/right arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") scrollRef.current.scrollLeft += 300;
      if (e.key === "ArrowLeft") scrollRef.current.scrollLeft -= 300;
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="relative px-4 py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Shourya, what's on your mind?
      </h2>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-6 mx-20 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {dishList.map((dish) => {
          const collectionId = getCollectionId(dish.entityId);
          return (
            <Link key={dish.id} to={`/dishpage/${collectionId}`}>
              <div className="flex-shrink-0 w-24 sm:w-32 text-center">
                <Dish dishData={dish} />
                {/* <p className="text-sm sm:text-base mt-2 text-gray-700 font-medium">
                  {dish.action.text}
                </p> */}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Left button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition duration-200"
        aria-label="Scroll left"
      >
        <span className="text-xl">←</span>
      </button>

      {/* Right button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition duration-200"
        aria-label="Scroll right"
      >
        <span className="text-xl">→</span>
      </button>
    </div>
  );
}

export default DishCarousel;
