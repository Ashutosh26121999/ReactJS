import React from "react";
import {StarHalf, Star, StarBorder} from "@mui/icons-material";

// Star Icons (You can use FontAwesome or custom SVGs)
const FullStar = () => <Star fontSize='small' />;
const HalfStar = () => <StarHalf fontSize='small' />;
const EmptyStar = () => <StarBorder fontSize='small' />;

// Rating Component
const StarRating = ({rating, maxStars = 5}) => {
  // Calculate the number of stars
  const fullStars = Math.floor(rating); // Full stars
  const hasHalfStar = rating % 1 >= 0.5; // Whether to show a half star
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Empty stars

  // Render stars
  return (
    <div style={{display: "flex"}}>
      {/* Render Full Stars */}
      {Array(fullStars)
        .fill(null)
        .map((_, index) => (
          <FullStar key={`full-${index}`} className='full-star-icon' />
        ))}

      {/* Render Half Star */}
      {hasHalfStar && <HalfStar className='half-star-icon' />}

      {/* Render Empty Stars */}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <EmptyStar key={`empty-${index}`} className='empty-star-icon' />
        ))}
    </div>
  );
};

export default StarRating;
