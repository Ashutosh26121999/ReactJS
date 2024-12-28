import React from "react";
import StarRating from "../../Utils/StarRating";
import "../CSS/RestaurantMenu.css"; // Add a CSS file for styling
import {useParams} from "react-router-dom";
import {MENU_API, RESTAURANT_MENU_IMG} from "../../Utils/constaints";
import SimmerResMenu from "../SimmerUtils/SimmerResMenu";
import {useFetchAPI} from "../../Utils/customHooks/useFetchAPI";

function RestaurantMenu() {
  const {restaurant_id} = useParams();
  const data = useFetchAPI(MENU_API + restaurant_id);

  if (data === null) {
    return <SimmerResMenu />;
  }

  const {
    name,
    slugs,
    city,
    locality,
    cuisines = [],
    costForTwoMessage,
    avgRating,
    totalRatings,
  } = data?.cards[2]?.card?.card?.info || {};

  const restaurantMenuItems =
    data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  return (
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
        {restaurantMenuItems.length === 0 ? (
          <Shimmer itemType='menu' />
        ) : (
          <ul className='menu-list'>
            {restaurantMenuItems.map((item) => (
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
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RestaurantMenu;
