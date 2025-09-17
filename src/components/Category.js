import { useState } from "react";
import Menuitem from "./Menuitem";

function Category({ data, filterType, isOpen, onToggle, restaurantInfo }) {
  // const [isOpen, setIsOpen] = useState(false);//when category was a unControlled component
  const itemCards = data?.itemCards || [];

  const filteredItems = itemCards.filter((item) => {
    const vegFlag = item?.card?.info?.isVeg;
    if (filterType === "VEG") return vegFlag === 1;
    if (filterType === "NONVEG") return vegFlag !== 1;
    return true;
  });
  // key={`${id}-${index}`}

  return (
    <div className="border border-gray-300 rounded-xl shadow-sm bg-white">
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex justify-between items-center text-lg font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-t-xl transition"
      >
        <span>{data?.title}</span>
        <span className="text-gray-500 text-xl">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-4 space-y-4 bg-gray-50 rounded-b-xl">
          {Array.isArray(filteredItems) && filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              const info = item?.card?.info || {};
              const id = info?.id || info?.itemId || `${info?.name}-${index}`;
              const {
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
                  id={id} 
                  key={id}
                  itemName={itemName}
                  price={(price ?? defaultPrice ?? 0) / 100}
                  AverageRating={ratings?.aggregatedRating?.rating || "N/A"}
                  smallvalue={ratings?.aggregatedRating?.ratingCountV2 || 0}
                  para={description}
                  imgId={imageId}
                  vegClassifier={isVeg ? "VEG" : "NON-VEG"}
                  restaurantInfo = {restaurantInfo}
                />
              );
            })
          ) : (
            <p className="text-center text-gray-500 text-sm">No items found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Category;
