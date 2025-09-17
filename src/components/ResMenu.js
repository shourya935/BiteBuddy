import React, { useEffect } from "react";
import { useState } from "react";
import Menuitem from "./Menuitem";
import useMenudata from "../Utils/customHooks/useMenudata";
import MenuShimmer from "./MenuShimmer";
import RestaurantDetails from "./RestaurantDetails";
import FilterButtons from "./FilterBtns";
import Category from "./Category";
import SearchBar from "./SearchBar";
import { useParams } from "react-router-dom";

function ResMenu() {
  const [filterType, setFilterType] = useState("ALL"); // "ALL" | "VEG" | "NONVEG"
  const [searchResults, setSearchResults] = useState(null); // null = no search yet
  const [openCategoryIndex, setOpenCategoryIndex] = useState(0);
  const [resInfo,setResInfo] = useState()
  const {resId} = useParams()


   async function fetchData() {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7487485&lng=75.8715502&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        );

        const contentType = response.headers.get("content-type");

        // ✅ check if it's actually JSON (Swiggy sends HTML on 404/invalid id)
        if (!response.ok || !contentType?.includes("application/json")) {
          throw new Error("Invalid restaurant or non-JSON response");
        }

        const data = await response.json();
        setResInfo(data)
       
      } catch (err) {
        console.error("❌ Failed to fetch menu:", err.message);
      
      }
    }

    useEffect(() => {
      fetchData()
    },[])

  // const resInfo = useMenudata(); // Custom Hook to fetch restaurant data
  const isLoading = !resInfo?.data; // For shimmer effect

  if (isLoading) return <MenuShimmer />;

  // Extract restaurant details
  const restaurantInfo = resInfo?.data?.cards[2]?.card?.card?.info || {};
  const {
    name,
    avgRating,
    cuisines,
    locality,
    totalRatingsString,
    costForTwoMessage,
    sla,
    loyaltyDiscoverPresentationInfo,
  } = restaurantInfo;
  const deliveryTime = sla?.slaString;
  const freeDelivery = loyaltyDiscoverPresentationInfo?.freedelMessage;

  // Extract categories
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  if (!resInfo?.data) {
    return (
      <div className="text-center py-10 text-red-500 font-bold text-lg">
        ⚠️ Unable to load menu. Please try another restaurant.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <RestaurantDetails
        name={name}
        avgRating={avgRating}
        totalRatingsString={totalRatingsString}
        costForTwoMessage={costForTwoMessage}
        cuisines={cuisines}
        locality={locality}
        deliveryTime={deliveryTime}
        freeDelivery={freeDelivery}
      />

      {/* Heading */}
      <div className="flex flex-col items-center gap-6 mt-3 mb-8">
        <h1 className="text-3xl font-bold text-orange-600 tracking-tight border-b-4 border-orange-300 pb-1 px-4">
          Menu
        </h1>
      </div>

      {/* Search Input with Debounce */}
      <SearchBar
        categories={categories}
        onSearchResults={(results) => setSearchResults(results)}
        onClear={() => setSearchResults(null)}
      />

      {/* Filter Buttons */}
      <FilterButtons filterType={filterType} setFilterType={setFilterType} />

      {/* Conditionally show Search Results or Category Accordions */}
      {searchResults !== null ? (
        searchResults.length > 0 ? (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-orange-500 mb-1 text-center">
              Search Results
            </h2>
            {searchResults.map((item, index) => {
              const info = item?.card?.info;
              const {
                id,
                name: itemName,
                price,
                defaultPrice,
                description,
                imageId,
                isVeg,
                ratings,
              } = info;

              return (
                <Menuitem
                  key={`${id}-${index}`}
                  itemName={itemName}
                  price={`₹${(price ?? defaultPrice ?? 0) / 100}`}
                  AverageRating={ratings?.aggregatedRating?.rating || "N/A"}
                  smallvalue={ratings?.aggregatedRating?.ratingCountV2 || 0}
                  para={description}
                  imgId={imageId}
                  vegClassifier={isVeg ? "VEG" : "NON-VEG"}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-center text-red-500 text-lg font-semibold">
            No items found.
          </p>
        )
      ) : (
        <div className="space-y-4">
          {categories.map((category, index) => (
            <Category
              key={index}
              restaurantInfo={{
                name,
                locality,
              }}
              data={category?.card?.card}
              filterType={filterType}
              isOpen={openCategoryIndex === index}
              onToggle={() =>
                setOpenCategoryIndex(openCategoryIndex === index ? null : index)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ResMenu;
