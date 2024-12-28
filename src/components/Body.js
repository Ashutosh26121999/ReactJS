import {useEffect, useState} from "react";
import RestaurantCard from "./RestaureantUtils/RestaurantCard";
import Shimmer from "./SimmerUtils/Shimmer";
import {Link} from "react-router-dom";
import {RESTAURANT_MENU_API} from "../Utils/constaints";
import {useFetchAPI} from "../Utils/customHooks/useFetchAPI";

export default function Body() {
  const mainList = useFetchAPI(RESTAURANT_MENU_API);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState("");

  // Once data is fetched, initialize the state
  useEffect(() => {
    if (mainList) {
      const restaurantData =
        mainList?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurants(restaurantData);
    }
  }, [mainList]);

  const searchRestaurants = () => {
    // Filter the restaurants
    if (filteredRestaurants !== "") {
      const filterData = restaurants.filter((res) =>
        res.info.name.toLowerCase().includes(filteredRestaurants.toLowerCase()),
      );
      if (filterData.length !== 0) {
        setRestaurants(filterData);
      } else {
        setFilteredRestaurants("");
      }
    } else {
      setRestaurants(
        mainList?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [],
      );
    }
  };

  const mainBody = () => (
    <div className='body'>
      {/* Search Bar */}
      <div className='search-container'>
        <div>
          <input
            className='search-bar'
            type='text'
            placeholder='Search'
            value={filteredRestaurants}
            onChange={(e) => setFilteredRestaurants(e.target.value)}
          />
          <button className='search-btn' onClick={searchRestaurants}>
            Search
          </button>
        </div>
        <button
          className='reating-search-btn'
          onClick={() => {
            setRestaurants(
              restaurants.filter((res) => res.info.avgRating > 4.4),
            );
          }}
        >
          Top Rated🌟
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className='restaurant-wrapper'>
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              className='link'
              key={restaurant.info.id}
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );

  return mainList === null ? <Shimmer /> : mainBody();
}
