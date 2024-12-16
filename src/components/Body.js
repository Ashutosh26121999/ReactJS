import {useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantsList from "./Utils/restaurantList";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
export default Body = () => {
  const [mainList, setMainList] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const responseData = await response.json();
    const data = await responseData.data;
    setRestaurants(
      data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setMainList(
      data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };
  const searchRestaurants = () => {
    const filterData = mainList.filter((res) =>
      res.info.name.toLowerCase().includes(filteredRestaurants.toLowerCase()),
    );
    if (filterData.length !== 0) {
      setRestaurants(filterData);
    }
    return setFilteredRestaurants("");
  };
  const mainBody = () => {
    return (
      <div className='body'>
        {/* Search Bar */}
        <div className='search-container'>
          {/* <input className='search-bar' type="text" /> */}
          <div>
            <input
              className='search-bar'
              type='text'
              placeholder='Search'
              value={filteredRestaurants}
              onChange={(e) => {
                setFilteredRestaurants(e.target.value);
              }}
            />
            <button className='search-btn' onClick={searchRestaurants}>
              Search
            </button>
          </div>
          <button
            className='reating-search-btn'
            onClick={() => {
              setRestaurants(
                mainList.filter((res) => res.info.avgRating > 4.4),
              );
            }}
          >
            Top Rated🌟
          </button>
        </div>

        <div className='restaurant-wrapper'>
          {/* Restaurant Container */}
          {/* Restaurant Card */}
          {/* not using key << using index as key< use unique key */}
          {restaurants?.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.info.id} className='link'>
                <RestaurantCard
                  key={restaurant.info.id}
                  restaurant={restaurant}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  };
  return restaurants?.length === 0 ? <Shimmer /> : mainBody();
};
