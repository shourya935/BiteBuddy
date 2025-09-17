import React from "react";
import { WithTopRatedLabel} from "./Card";
import RestaurantCard from "./Card";
import dataList from "../Utils/mockData";
import { useContext, useState } from "react";
import { useEffect } from "react";
import ShimmerCard from "./Shimmer";
import SearchUI from "./SearchUi";
import { Link } from "react-router-dom";
import useRestroCards from "../Utils/customHooks/useRestroCards";
import useOnlineStatus from "../Utils/customHooks/useOnlineStatues";
import DishPage from "./DishPage";
import DishCarousel from "./DishCarousel";
import UserContext from "../Utils/useContext";


function CardContainer() {
  const [Listofrestaurants,setListofrestaurants] = useState()
  const [copyOfList,setCopyOfList] = useState()
  const [searchInput, setSearchInput] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  async function fetchData() {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7487485&lng=75.8715502&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const cardInfo =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setListofrestaurants(cardInfo);
        setCopyOfList(cardInfo);
       
      } catch (error) {
        console.error("❌ Failed to fetch restaurant data:", error);
        
      }
    }

    useEffect(() => {
      fetchData()
    },[])

//   let DATA  = useRestroCards()
//   console.log("cardInfo:-",DATA)

//    useEffect(() => {
//   const cardInfo =
//     DATA?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

//   if (cardInfo.length > 0) {
//     setListofrestaurants(cardInfo);
//     setCopyOfList(cardInfo);
//   }
// }, [DATA]); // 👈 depend on DATA, not cardInfo

  const TopRatedCardsWithLabel = WithTopRatedLabel(RestaurantCard)

  const handelClick = () => {
    const topRated = copyOfList.filter((res) => res.info.avgRating >= 4.5);
    setListofrestaurants(topRated);
  };
  const handelClick2 = () => {
    const searchedRestraunts = copyOfList.filter((res) => 
    {
     const nameMatch =  res.info.name.toLowerCase().includes(searchInput.toLowerCase()) 
      const cuisinesMatch = res.info.cuisines.join(",").toLowerCase().includes(searchInput.toLowerCase())
      return(
        nameMatch || cuisinesMatch
      )
    }
    );
    setListofrestaurants(searchedRestraunts);
    setIsSearched(true);
  };

  const onlineStatus = useOnlineStatus()
  if(onlineStatus === false){
    return (
      <h1>You are offline</h1>
    )
  }

  const userData  = useContext(UserContext)

  const { loggedInUser , setUsername} = userData


  if (
    Array.isArray(Listofrestaurants) &&
    Listofrestaurants.length === 0 &&
    !isSearched
  ) {
    // Initial state: Loading shimmer
    return (
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    );
  }

  if (
    Array.isArray(Listofrestaurants) &&
    Listofrestaurants.length === 0 &&
    isSearched
  ) {
    // No results found after search
    return (
      <>
        <SearchUI
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handelClick={handelClick}
          handelClick2={handelClick2}
        />
        <div className="text-center w-full mt-10 text-xl font-semibold text-gray-600">
          😔 No restaurants found. Please try another name.
        </div>
      </>
    );
  }

  // Actual data render
  return (
    <>
    <input
    type="text"
    value={loggedInUser}
    onChange={(e)=> setUsername(e.target.value)}

    >
    </input>
   
    <DishCarousel/>
    {/* <DishPage/> */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 px-4 mt-6 text-center">
        🍽️ Restaurants with Online Food Delivery in{" "}
        <span className="text-blue-500">Indore</span>
      </h2>

      <SearchUI
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handelClick={handelClick}
        handelClick2={handelClick2}
      />
      <div className="flex flex-wrap gap-4 p-4 justify-center my-20">
        {Array.isArray(Listofrestaurants) &&
          Listofrestaurants.filter((res) => res?.info?.cloudinaryImageId)
          .map(
            (restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id }>
                {
                  restaurant.info.avgRating >= 4.5 ? (<TopRatedCardsWithLabel resData={restaurant} />
                  )  : ( <RestaurantCard resData={restaurant} />)
                 
                }
                </Link>
            )
          )}
      </div>
    </>
  );
}

export default CardContainer;
