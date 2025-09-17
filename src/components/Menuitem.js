import React from "react";
import { Menuitem_URL } from "../Utils/constant";
import { additem, clearCart } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
import RestaurantDetails from "./RestaurantDetails";
import { useSelector } from "react-redux";
import { useState } from "react";

function Menuitem(props) {
  const {
    imgId,
    itemName,
    price,
    AverageRating,
    smallvalue,
    para,
    vegClassifier,
    id,
    restaurantInfo,
  } = props;

  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  const cartRestaurant = useSelector((store) => store.cart.restaurantName);

  const [showModal, setShowModal] = useState(false);
  const [pendingItem, setPendingItem] = useState(null);

  const addItem = {
      imgId,
      itemName,
      price,
      AverageRating,
      smallvalue,
      para,
      vegClassifier,
      id,
      restaurantName: restaurantInfo?.name,
      restaurantLocality: restaurantInfo?.locality,
    };


   const handleAddItem = () => {
    if (cartItems.length > 0 && cartRestaurant !== restaurantInfo?.name) {
      setPendingItem(addItem); // store it temporarily
      setShowModal(true);
    } else {
      dispatch(additem(addItem));
    }
  };

  const confirmResetCart = () => {
    dispatch(clearCart());
    dispatch(additem(pendingItem));
    setShowModal(false);
    setPendingItem(null);
  };

  // redux will put this pizza inside an object inside payload  and this dispath pass this inside 2nd argument of
  //add item
  // {
  //   payload: "pizza"
  // }

  return (
    <>
      <div data-testid="menu-item" className="flex justify-between items-start gap-6 border-b pb-6 pt-4 px-2 max-w-4xl mx-auto">
        {/* Left: Dish Info */}
        <div className="flex-1">
          {/* Veg Icon + Title */}
          <div className="flex items-center gap-2 mb-1">
            {/* Veg / Non-Veg mark */}
            <div
              className="w-4 h-4 border-2 rounded-sm flex items-center justify-center"
              style={{
                borderColor: vegClassifier === "VEG" ? "#16a34a" : "#dc2626", // green or red border
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor:
                    vegClassifier === "VEG" ? "#16a34a" : "#dc2626", // green or red dot
                }}
              ></div>
            </div>

            <h3 className="text-xl font-semibold text-blue-800">{itemName}</h3>
          </div>

          {/* Price */}
          <p className="text-md font-semibold text-gray-800 mb-1">{price}</p>

          {/* Rating */}
          <div className="flex items-center text-green-600 font-semibold text-sm mb-2">
            ⭐ {AverageRating}{" "}
            <span className="text-gray-600 font-normal ml-1">
              ({smallvalue})
            </span>
          </div>

          {/* Nutritional Info */}
          <p className="text-gray-600 text-sm leading-snug">
            {para}
            <span className="font-medium text-blue-600 ml-1 cursor-pointer">
              more
            </span>
          </p>
        </div>

        {/* Right: Image + Add */}
        <div className="w-32 flex flex-col items-center">
          {/* Dish Image */}
          <img
            src={Menuitem_URL + imgId}
            alt="Chocolate Thick Shake"
            className="w-28 h-28 object-cover rounded-lg shadow mb-3"
          />

          {/* ADD Button */}
          <button
            className="border border-green-600 text-green-700 font-bold px-6 py-1 rounded-md hover:bg-green-50 transition"
            onClick={() => handleAddItem()}
          >
            ADD
          </button>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
              <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-xl text-center space-y-4">
                <h2 className="text-xl font-bold">Items already in cart</h2>
                <p>
                  Your cart contains items from another restaurant.
                  <br />
                  Would you like to reset your cart?
                </p>
                <div className="flex justify-around mt-4">
                  <button
                    className="border-2 border-green-500 px-6 py-2 rounded font-bold text-green-700"
                    onClick={() => setShowModal(false)}
                  >
                    NO
                  </button>
                  <button
                    className="bg-green-600 px-6 py-2 rounded text-white font-bold"
                    onClick={confirmResetCart}
                  >
                    YES, START AFRESH
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Menuitem;
