import React from "react";
import "./RestaurantMenu.css";

function SimmerResMenu({itemType}) {
  if (itemType === "menu") {
    return (
      <div className='shimmer-menu-container'>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div className='shimmer-menu-item' key={index}>
              <div className='shimmer-image' />
              <div className='shimmer-text' />
              <div className='shimmer-text small' />
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className='shimmer-container'>
      <div className='shimmer-header'>
        <div className='shimmer-text large' />
        <div className='shimmer-text medium' />
      </div>
      <div className='shimmer-description'>
        <div className='shimmer-text small' />
        <div className='shimmer-text small' />
      </div>
    </div>
  );
}

export default SimmerResMenu;
