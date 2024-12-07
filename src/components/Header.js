/**
 * Header component which contains logo and navigation menu
 * @returns {React.ReactElement} Header component
 */

import {LOGO} from "./Utils/constaints";
import {useState} from "react";
import logo from "../components/Utils/img/RestaurantLogo.png";
const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className='header'>
      {/* Logo */}
      <div className='logo-container'>
        <img className='logo' src={logo} alt='Logo' />
      </div>
      {/* Navigation Menu */}
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className='login'
            onClick={() => {
              setLogin(!login);
            }}
          >
            {login ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
