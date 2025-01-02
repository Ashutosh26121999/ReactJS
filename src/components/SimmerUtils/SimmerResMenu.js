import React from "react";

function SimmerResMenu() {
  return (
    <div className='p-6'>
      {/* Restaurant Details Shimmer */}
      <div className='bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 mb-8 border-t-4 border-orange-500 animate-pulse'>
        {/* Restaurant Name */}
        <div className='shimmer-text large bg-gray-300 dark:bg-gray-700 h-8 w-3/4 rounded-md mb-4'></div>
        {/* Restaurant Location */}
        <div className='shimmer-text medium bg-gray-300 dark:bg-gray-700 h-6 w-1/2 rounded-md mb-2'></div>
        {/* Cuisines */}
        <div className='shimmer-text medium bg-gray-300 dark:bg-gray-700 h-6 w-2/3 rounded-md mb-3'></div>
        {/* Cost for Two */}
        <div className='shimmer-text small bg-gray-300 dark:bg-gray-700 h-6 w-1/3 rounded-md mb-4'></div>
        {/* Rating */}
        <div className='shimmer-text small bg-gray-300 dark:bg-gray-700 h-4 w-1/4 rounded-md mb-2'></div>
      </div>

      {/* Menu Section Shimmer */}
      <div>
        <h2 className='text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 animate-pulse'>
          Recommended Menu
        </h2>

        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 animate-pulse'
              >
                <div className='shimmer-image bg-gray-300 dark:bg-gray-700 h-40 w-full rounded-md mb-4'></div>
                <div className='shimmer-text bg-gray-300 dark:bg-gray-700 h-6 w-3/4 mb-2 rounded-md'></div>
                <div className='shimmer-text small bg-gray-300 dark:bg-gray-700 h-4 w-1/2 rounded-md'></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SimmerResMenu;
