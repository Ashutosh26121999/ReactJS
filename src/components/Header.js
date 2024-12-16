/**
 * Header component which contains logo and navigation menu
 * @returns {React.ReactElement} Header component
 */

import {useState} from "react";
import logo from "../components/Utils/img/RestaurantLogo.png";
import {Link} from "react-router-dom";
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
          <li>
            <Link to='/' className='link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='link'>
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to='/contact' className='link'>
              Contact
            </Link>
          </li>
          <li>
            <Link to='/cart' className='link'>
              Cart
            </Link>
          </li>
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
