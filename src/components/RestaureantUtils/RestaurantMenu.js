import React from "react";
import {useDispatch, useSelector} from "react-redux"; // Import dispatch
import {addItem} from "../../Rduex/cartSlice"; // Import the addItem action
import StarRating from "../../Utils/StarRating";
import {useParams} from "react-router-dom";
import {MENU_API, RESTAURANT_MENU_IMG} from "../../Utils/constaints";
import SimmerResMenu from "../SimmerUtils/SimmerResMenu";
import {useFetchAPI} from "../../Utils/customHooks/useFetchAPI";
import Shimmer from "../SimmerUtils/Shimmer";
import {BsCart3} from "react-icons/bs";

function RestaurantMenu() {
  const {restaurant_id} = useParams();
  const dispatch = useDispatch(); // Initialize dispatch
  const data = useFetchAPI(MENU_API + restaurant_id);
  const {items} = useSelector((state) => state.cart); // Get cart state

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

  const handleAddToCart = (item) => {
    dispatch(
      addItem({
        id: item.card.info.id,
        name: item.card.info.name,
        price: item.card.info.price / 100 || item.card.info.defaultPrice / 100,
        image: item.card.info.imageId
          ? `${RESTAURANT_MENU_IMG}${item.card.info.imageId}`
          : "https://via.placeholder.com/200x150",
        quantity: 1, // Default quantity
      }),
    );
  };
  const checkExistItemInStore = (item) => {
    // Check if the item exists in the cart
    const existingItem = items.find(
      (cartItem) => cartItem.id === item.card.info.id,
    );
    // Return the item's quantity or false if it doesn't exist
    return existingItem ? existingItem.quantity : false;
  };
  return (
    <div className='p-6 bg-gray-100 dark:bg-gray-900'>
      {/* Restaurant Details */}
      <div className='bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 mb-8 border-t-4 border-orange-500 dark:border-orange-400'>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-white mb-3 hover:text-orange-600 transition duration-300'>
          {name}
        </h1>
        <p className='text-gray-600 dark:text-gray-300 text-lg mb-3'>
          {slugs?.restaurant
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
          , {locality}, {city}
        </p>
        <p className='text-gray-700 dark:text-gray-300 text-xl font-medium mb-5'>
          {cuisines.join(", ")}
        </p>
        <p className='text-gray-700 dark:text-gray-300 text-xl font-semibold mb-6'>
          {costForTwoMessage}
        </p>

        <div className='flex items-center space-x-2'>
          <StarRating rating={avgRating} />
          <span className='text-gray-600 dark:text-gray-300 text-lg font-medium'>
            ({totalRatings} ratings)
          </span>
        </div>
      </div>

      {/* Menu Section */}
      <div>
        <h2 className='text-2xl font-semibold text-gray-800 dark:text-white mb-4'>
          Recommended Menu
        </h2>

        {restaurantMenuItems.length === 0 ? (
          <Shimmer />
        ) : (
          <ul className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {restaurantMenuItems.map((item) => (
              <li
                key={item.card.info.id}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl hover:scale-105 transition-transform duration-300 group'
              >
                <img
                  src={
                    item?.card?.info?.imageId
                      ? `${RESTAURANT_MENU_IMG}${item.card.info.imageId}`
                      : "https://via.placeholder.com/200x150"
                  }
                  alt={item?.card?.info?.name}
                  className='w-full h-40 object-cover rounded-md mb-4'
                />
                <div className='menu-item-details'>
                  {/* Name */}
                  <h3 className='text-xl font-semibold text-gray-800 dark:text-white group-hover:text-orange-600 transition duration-300'>
                    {item.card.info.name}
                  </h3>

                  {/* Price */}
                  <p className='text-lg font-medium text-orange-500 mt-2'>
                    ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>

                  {/* Description */}
                  <p className='text-sm text-gray-500 dark:text-gray-300 mt-2 text-justify  dark:group-hover:text-gray-100 group-hover:text-black transition duration-400'>
                    {item.card.info.description || "No description available."}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button
                  className='mt-4 w-full flex justify-center items-center py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300'
                  onClick={() => handleAddToCart(item)}
                >
                  <BsCart3 className='text-2xl mr-2' />
                  {checkExistItemInStore(item)
                    ? `In Cart: ${checkExistItemInStore(item)}`
                    : "Add to Cart"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RestaurantMenu;
