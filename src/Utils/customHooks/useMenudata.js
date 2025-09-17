import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useMenudata() {
  const [menuData, setMenuData] = useState(null);
  const [error, setError] = useState(null); // Optional: for error UI
  const { resId } = useParams();

  useEffect(() => {
    if (!resId) return;

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
        setMenuData(data);
        setError(null); // clear error if previously set
      } catch (err) {
        console.error("❌ Failed to fetch menu:", err.message);
        setMenuData(null);
        setError(err.message);
      }
    }

    fetchData();
  }, [resId]); // ✅ include resId in dependency array

  return menuData;
}
