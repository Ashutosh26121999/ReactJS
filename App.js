import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'

/**
 * Basice food odring app prject wirefrem in react
 * Header
 * - Logo
 * - Navigation Menu
 * Body
 * -Search Bar
 * - RestaurantContainer
 *    - RestaurantCard
 *       - Image
 *       - Name 
 *       - Price  
 *       - Rating
 *       - Cusines
 *       - Dilivery Time
 * Footer
 * -Copyright
 * - Links
 * - Address
 * - Contact
 */







const Applayout=()=>{
    return(
      <div className='app'>
         {/* Header */}
         <Header />
         {/* Body */}
         <Body />
         {/* Footer */}
      </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>) //? this is way to render Componenet in react DOM

