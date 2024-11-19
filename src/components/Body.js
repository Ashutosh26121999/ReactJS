import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import restaurantsList from "./Utils/restaurantList"
export default Body=()=>{
    const [restaurants, setRestaurants] = useState(restaurantsList)
    return(
        <div className='body'>
            {/* Search Bar */}
            <div className='search-container'>
                {/* <input className='search-bar' type="text" /> */}
                <button className='search-btn' onClick={() => {setRestaurants(restaurants.filter((res) => res.info.avgRating > 4.4))}}>Top Rated🌟</button>
            </div>   

            <div className='restaurant-wrapper'>
            {/* Restaurant Container */}
            <div className='restaurant-container'>
            {/* Restaurant Card */}
            {/* not using key << using index as key< use unique key */}
            {
                restaurants.map((restaurant)=>{
                    return <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>
                })
            }
            </div>
            </div>
        </div>
        )
}