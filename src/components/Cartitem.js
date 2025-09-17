import React from "react";
import { useDispatch } from "react-redux";
import { additem, removeItem } from "../Utils/cartSlice";
import { Menuitem_URL } from "../Utils/constant"; // Assuming image base URL is here

function Cartitem(props) {
  const {
    imgId,
    itemName,
    price,
    AverageRating,
    smallvalue,
    para,
    vegClassifier,
    id,
    quantity,
    defaultPrice,
  } = props;

  const dispatch = useDispatch();

  const addItem = {
    imgId,
    itemName,
    price: Number((price ?? defaultPrice ?? 0)),
    AverageRating,
    smallvalue,
    para,
    vegClassifier,
    id,
  };

  const numericPrice = Number(price.toString().replace(/[^\d.-]/g, ""));
  const itemPrice = numericPrice * quantity;

  return (
    <div className="flex justify-between items-center gap-4 border rounded-lg shadow p-4 mb-4 max-w-4xl mx-auto bg-white">
      {/* Image */}
      <img
        src={Menuitem_URL + imgId}
        alt={itemName}
        className="w-20 h-20 object-cover rounded-lg"
      />

      {/* Item Info */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {/* Veg / Non-Veg icon */}
          <div
            className="w-4 h-4 border-2 rounded-sm flex items-center justify-center"
            style={{
              borderColor: vegClassifier === "VEG" ? "#16a34a" : "#dc2626",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor:
                  vegClassifier === "VEG" ? "#16a34a" : "#dc2626",
              }}
            ></div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800">{itemName}</h3>
        </div>

        {/* Rating */}
        <div className="text-sm text-green-600 font-medium mb-2">
          ⭐ {AverageRating}{" "}
          <span className="text-gray-500">({smallvalue})</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600">{para}</p>
      </div>

      {/* Quantity & Price Controls */}
      <div className="flex flex-col items-end justify-between h-full gap-2">
        <div className="flex items-center border rounded overflow-hidden">
          <button
            className="px-3 py-1 bg-red-500 text-white hover:bg-red-600"
            onClick={() => dispatch(removeItem(id))}
          >
            –
          </button>
          <span className="px-3 py-1 font-semibold bg-gray-100">{quantity}</span>
          <button
            className="px-3 py-1 bg-green-500 text-white hover:bg-green-600"
            onClick={() => dispatch(additem(addItem))}
          >
            +
          </button>
        </div>
        <div className="text-right font-bold text-gray-700 text-lg">
          ₹{itemPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
