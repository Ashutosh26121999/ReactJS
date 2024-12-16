import React, {useEffect, useState} from "react";
import StarRating from "./StarRating";
import "./RestaurantMenu.css"; // Add a CSS file for styling
import {useParams} from "react-router-dom";
import {MENU_API, RESTAURANT_MENU_IMG} from "./Utils/constaints";
import SimmerResMenu from "./SimmerResMenu";

function RestaurantMenu() {
  const [restaurantsDetails, setRestaurantsDetails] = useState({});
  const [restaurantMenuItems, setRestaurantMenuItems] = useState([]);

  const {restaurant_id} = useParams();

  useEffect(() => {
    fetchRestaurantMenuData();
  }, []);

  const fetchRestaurantMenuData = async () => {
    try {
      const response = await fetch(MENU_API + restaurant_id);
      const responseData = await response.json();

      setRestaurantsDetails(
        responseData?.data?.cards[2]?.card?.card?.info || {},
      );
      setRestaurantMenuItems(
        responseData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[1]?.card?.card?.itemCards || [],
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  const {
    name,
    slugs,
    city,
    locality,
    cuisines = [],
    costForTwoMessage,
    avgRating,
    totalRatings,
  } = restaurantsDetails;

  return Object.keys(restaurantsDetails).length === 0 ? (
    <SimmerResMenu />
  ) : (
    <div className='restaurant-container'>
      {/* Restaurant Details */}
      <div className='restaurant-header'>
        <h1 className='restaurant-name'>{name}</h1>
        <p className='restaurant-location'>
          {slugs?.restaurant
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
          , {locality}, {city}
        </p>
        <p className='restaurant-cuisines'>{cuisines.join(", ")}</p>
        <p className='restaurant-cost'>{costForTwoMessage}</p>
        <div className='restaurant-rating'>
          <StarRating rating={avgRating} />
          <span>({totalRatings} ratings)</span>
        </div>
      </div>

      {/* Menu Section */}
      <div className='restaurant-menu'>
        <h2 className='menu-title'>Recommended Menu</h2>
        <ul className='menu-list'>
          {restaurantMenuItems.length === 0 ? (
            <Shimmer itemType='menu' />
          ) : (
            restaurantMenuItems.map((item) => (
              <li className='menu-item' key={item.card.info.id}>
                <img
                  src={
                    item?.card?.info?.imageId
                      ? `${RESTAURANT_MENU_IMG}${item.card.info.imageId}`
                      : "https://via.placeholder.com/200x150"
                  }
                  alt={item?.card?.info?.name}
                  className='menu-item-image'
                />
                <div className='menu-item-details'>
                  <h3 className='menu-item-name'>{item.card.info.name}</h3>
                  <p className='menu-item-price'>
                    ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>
                  <p className='menu-item-description'>
                    {item.card.info.description || "No description available."}
                  </p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
