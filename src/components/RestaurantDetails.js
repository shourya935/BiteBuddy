// RestaurantDetails.js
const RestaurantDetails = ({
  name,
  avgRating,
  totalRatingsString,
  costForTwoMessage,
  cuisines,
  locality,
  deliveryTime,
  freeDelivery,
}) => {
  return (
    <>
     <h2 className="text-3xl font-bold text-black  mt-4 text-center">{name}</h2>
    <div className="max-w-3xl mx-auto mt-3 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
     

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-gray-700 text-lg font-medium mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-green-600 font-bold">⭐ {avgRating}</span>
          <span className="text-gray-500">({totalRatingsString})</span>
          <span>• {costForTwoMessage}</span>
        </div>
      </div>

      <div className="text-orange-600 mb-2 font-medium">
        {cuisines?.join(", ")}
      </div>

      <div className="flex flex-col sm:flex-row justify-between text-gray-700 text-md">
        <p>
          <strong>📍 Outlet:</strong> {locality}
        </p>
        <p>
          <strong>⏱️ Delivery:</strong> {deliveryTime}
        </p>
      </div>

      <div className="mt-4 bg-orange-50 p-4 rounded-xl text-orange-700 font-medium shadow-inner text-sm sm:text-base">
        🛵 One Free delivery on orders above ₹99
      </div>
    </div>
    </>
  );
};

export default RestaurantDetails;
