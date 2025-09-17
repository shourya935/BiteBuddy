import React from "react";
import { CDN_URL } from "../Utils/constant"; //named import
import { Link } from "react-router-dom";

function DishRestaurantCard(propsObject) {
  const { resData } = propsObject;
  const { name, avgRating, cuisines, cloudinaryImageId, id } =
    resData?.card?.card?.info;

  const deliveryTime = resData?.card?.card?.info?.sla?.slaString || "NA";
  const Header = resData?.card?.card?.info?.aggregatedDiscountInfoV3?.Header;
  const SubHeader =
    resData?.card?.card?.info?.aggregatedDiscountInfoV3?.subHeader;

  return (
    <>
     <Link to={`/restaurants/${id}`}>
    <div className="bg-white rounded-xl shadow-md p-4 w-72 hover:shadow-lg transition duration-300">
      {/* Image */}
      <div className="relative h-48">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant Dish"
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 w-full text-outline-black text-white text-3xl font-extrabold px-3 py-2 font-[Poppins] tracking-wide">
          {Header} {SubHeader}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-1">
        {/* Ad & Restaurant Name */}
        <div className="flex items-center gap-2">
          <span className="bg-gray-200 text-xs font-semibold px-1.5 py-0.5 rounded">
            Ad
          </span>
          <h3 className="font-bold text-lg">{name}</h3>
        </div>

        {/* Rating and Time */}
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <span className="text-green-600 font-semibold">★ {avgRating}</span>
          <span>•</span>
          <span>{deliveryTime}</span>
        </div>

        {/* Cuisine */}
        <p className="text-sm text-gray-700">{cuisines?.join(", ")}</p>

        {/* Location or tag */}
        <p className="text-sm text-gray-500 font-semibold">THE ONE</p>
      </div>
    </div>
    </Link>
    </>
  );
}

export default DishRestaurantCard;
