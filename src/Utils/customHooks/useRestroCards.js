import { useState, useEffect } from "react";

export default function useRestroCards() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7487485&lng=75.8715502&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
       
        setCardData(json);
      } catch (error) {
        console.error("❌ Failed to fetch restaurant data:", error);
        setListofrestaurants([]);
        setCopyOfList([]);
      }
    }

    fetchData();
  }, []);
  return cardData;
}
