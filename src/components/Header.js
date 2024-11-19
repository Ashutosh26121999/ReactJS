/**
 * Header component which contains logo and navigation menu
 * @returns {React.ReactElement} Header component
 */

import {LOGO } from "./Utils/constaints"
const Header=()=>{
    return(
        <div className='header'>
            {/* Logo */}
            <div className='logo-container'>
               <img className='logo' src={LOGO} alt="Logo" />
            </div>
            {/* Navigation Menu */}
            <div className='nav-items'>
               <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Cart</li>
               </ul>

            </div>
        </div>
    )
}
export default Header