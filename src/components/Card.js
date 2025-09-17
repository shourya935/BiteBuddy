import React from "react";
import { CDN_URL } from "../Utils/constant"; //named import
import { FcRating } from "react-icons/fc";

const RestaurantCard = (propsObject) => {
  const {resData} = propsObject
  //Destructuring
  const { name, avgRating, cuisines, cloudinaryImageId } = resData.info || {}; //aggregatedDiscountInfoV3

  const deliveryTime = resData?.info?.sla?.slaString || "NA";
  const Header = resData?.info?.aggregatedDiscountInfoV3?.Header;
  const SubHeader = resData?.info?.aggregatedDiscountInfoV3?.subHeader;

  console.log("cardData",resData)
  return (
    <div data-testid="restaurant-card"  className="w-[300px] rounded-xl overflow-hidden shadow-lg relative bg-white">
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
  );
};

export default RestaurantCard;

export const WithTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10 flex items-center gap-1">
          TopRated <FcRating size={20} />
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
