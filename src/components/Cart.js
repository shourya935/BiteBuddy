import React from "react";
import Cartitem from "./Cartitem";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const restaurantName = useSelector((store) => store.cart.restaurantName);
  const restaurantLocality = useSelector((store) => store.cart.restaurantLocality);

  const calculateItemTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const grandTotal = calculateItemTotal();
  const deliveryFee = 50;
  const gst = 30;
  const toPay = grandTotal + deliveryFee + gst;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {cartItems.length > 0 && (
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-green-700 flex items-center justify-center gap-2">
            🏪 {restaurantName}
          </h2>
          <p className="text-sm text-gray-600">{restaurantLocality}</p>
        </div>
      )}

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-semibold">
          🛒 Your cart is empty.
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <Cartitem key={item.id} {...item} />
            ))}
          </div>

          {/* Billing Summary */}
          <div className="mt-6 border rounded-lg shadow bg-white p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
              Billing Summary
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span>GST & Other Charges</span>
                <span>₹{gst}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg text-gray-900">
                <span>Total To Pay</span>
                <span>₹{toPay}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
