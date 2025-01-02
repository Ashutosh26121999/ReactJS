import {useEffect, useState} from "react";
import RestaurantCard from "./RestaureantUtils/RestaurantCard"; // Ensure this component handles the image rendering
import Shimmer from "./SimmerUtils/Shimmer";
import {Link} from "react-router-dom";
import {RESTAURANT_MENU_API} from "../Utils/constaints";
import {useFetchAPI} from "../Utils/customHooks/useFetchAPI";

export default function Body() {
  const mainList = useFetchAPI(RESTAURANT_MENU_API);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState("");

  // Initialize the state once data is fetched
  useEffect(() => {
    if (mainList) {
      const restaurantData =
        mainList?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurants(restaurantData);
    }
  }, [mainList]);

  const searchRestaurants = () => {
    if (filteredRestaurants !== "") {
      const filterData = restaurants.filter((res) =>
        res.info.name.toLowerCase().includes(filteredRestaurants.toLowerCase()),
      );
      setRestaurants(filterData.length > 0 ? filterData : []);
    } else {
      setRestaurants(
        mainList?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [],
      );
    }
  };

  const mainBody = () => (
    <div className='p-6'>
      {/* Search Bar */}
      <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
        <div className='flex items-center space-x-4'>
          <input
            className='border border-gray-300 rounded-lg p-2 w-72 focus:outline-none focus:ring focus:ring-orange-300'
            type='text'
            placeholder='Search restaurants'
            value={filteredRestaurants}
            onChange={(e) => setFilteredRestaurants(e.target.value)}
          />
          <button
            className='bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition'
            onClick={searchRestaurants}
          >
            Search
          </button>
        </div>
        <button
          className='bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition mt-4 md:mt-0'
          onClick={() =>
            setRestaurants(
              restaurants.filter((res) => res.info.avgRating > 4.4),
            )
          }
        >
          Top Rated 🌟
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
              className='hover:shadow-lg transition'
            >
              {/* Use your RestaurantCard component to handle image and details */}
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))
        ) : (
          <p className='text-center text-gray-500'>No restaurants found</p>
        )}
      </div>
    </div>
  );

  return mainList === null ? <Shimmer /> : mainBody();
}
