import React from "react";
import DishRestaurantCard from "./DishRestaurantCard";
import useDifferentDishesdata from "../Utils/customHooks/useDiffrentDishesdata";
import { Link } from "react-router-dom";

function DishPage() {
  const DishPagedata = useDifferentDishesdata();
  console.log("dishdata", DishPagedata);

  const title = DishPagedata?.data?.cards[0]?.card?.card?.title ?? "Discover Restaurants";
  const description = DishPagedata?.data?.cards[0]?.card?.card?.description ?? "";

  const Restaurants = DishPagedata?.data?.cards || [];
  const filteredRestaurants = Restaurants.slice(3); // skip first 3 cards

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {Array.isArray(filteredRestaurants) && filteredRestaurants.length > 0 ? (
          filteredRestaurants
          .filter(
             (res) => res?.card?.card?.info?.id
                                       )
          .map((res) => (
              <DishRestaurantCard
              key={res?.card?.card?.info?.id}
              resData={res}
            />
          ))
        ) : (
          <p className="text-gray-500 text-lg text-center mt-10">
            No restaurants found.
          </p>
        )}
      </div>
    </div>
  );
}

export default DishPage;
