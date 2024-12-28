import StarRating from "../../Utils/StarRating";
import {CDN_URL} from "../../Utils/constaints";
export default RestaurantCard = (props) => {
  const {cloudinaryImageId, name, costForTwo, avgRatingString, sla, cuisines} =
    props.restaurant.info;
  return (
    <div className='restaurant-card'>
      {/* Image */}
      <img className='res-logo' src={CDN_URL + cloudinaryImageId} alt='Logo' />
      <div className='res-data-container'>
        {/* Name */}
        <h3 className='res-name'>{name}</h3>
        {/* Price */}
        <h3 className='res-price'>Rs: {costForTwo}</h3>
        {/* Rating */}
        <div className='restaurant-rating'>
          <StarRating rating={avgRatingString} />
        </div>

        {/* Delivery Time */}
        <h4 className='res-del-time'>Deliverd in {sla.deliveryTime} min</h4>
        {/* Cusines */}
        <h4 className='res-cusines'>{cuisines.join(", ")}</h4>
      </div>
    </div>
  );
};
