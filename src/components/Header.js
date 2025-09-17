import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Utils/useContext";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const toggleState = () => setIsLoggedin(!isLoggedin);

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50 w-full">
      {/* Logo */}
      <div className="text-3xl font-bold text-blue-600 tracking-tight">
        <Link to="/">BiteBuddy</Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 items-center text-gray-700 font-medium text-lg">
        <li className="hover:text-blue-600 transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-600 transition duration-300">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:text-blue-600 transition duration-300">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-blue-600 transition duration-300">
          <Link to="/groceries">Groceries</Link>
        </li>
      </ul>

      {/* Right Side: Cart + Login */}
      <div className="flex items-center gap-6">
        {/* Cart */}
        <Link
          to="/cart"
          className="relative flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50 transition"
        >
          <IoCartOutline size={28} className="text-blue-600" />
          <span className="text-blue-700 font-semibold">Cart</span>
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </Link>

        {/* Login / Logout Button */}
        <button
          onClick={toggleState}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {isLoggedin ? "Logout" : "Login"}
        </button>

        {/* User */}
        <div className="hidden md:inline-block text-sm font-medium text-gray-700">
          👋 {loggedInUser}
        </div>
      </div>
    </nav>
  );
}

export default Header;
