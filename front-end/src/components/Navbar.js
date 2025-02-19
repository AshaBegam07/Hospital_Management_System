import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import "../styles/Navbar.css";
import { FiUserPlus } from 'react-icons/fi';
import { FaUserInjured } from 'react-icons/fa';
import logo from "../assets/medicare.png"

const Navbar = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Example: Remove token or session data if applicable
    localStorage.removeItem("authToken");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-logo-link" aria-label="Medicare Logo ">
            <img
              src={logo}
              alt="Medicare Logo"
              className="navbar-logo-img"
            />
          </NavLink>
        </div>

        {/* Auth Buttons */}
        <div className="navbar-actions">
          {isAuthenticated ? (
            <button onClick={handleLogout} className="btn navbar-btn logout-btn" aria-label="Logout">
              Logout
            </button>
          ) : ( 
          < div className="nav-display">
          < div className='nav-links'>
           <NavLink to="/" className="dropdown-item" aria-label="Admin Login">
           Home
          </NavLink>
            <NavLink to="/appointment" className="dropdown-item" aria-label="Admin Login">
            Appointment
             </NavLink>
              <NavLink to="/about" className="dropdown-item" aria-label="Admin Login">
           About
            </NavLink></div>
          
           
           <div className="register-dropdown">
           
           <button className="btn navbar-btn register-dropdown-btn" aria-label="Register Here" >  
   <span className="register-btn"> Register Here ⇲ </span>
  </button>
  <div className="dropdown-menu">
    <NavLink to="/login" className="dropdown-item" aria-label="Admin Login">
      < FiUserPlus size={15} style={{ marginRight: '8px',marginTop:'4px' }} />
      Admin Login
    </NavLink>
    <NavLink to="/register" className="dropdown-item" aria-label="Patient Login">
    <FaUserInjured size={15} style={{ marginRight: '8px' ,marginTop:'4px'}} />
    Patient Login
    </NavLink>
  </div>
</div>

          </div>
          
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
