import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { FaSearch, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      {/* Left Section: Logo + Search */}
      <div className="header-left-content">
        <div className="logo1">
          <img src={logo} alt="WanderOn Logo" />
        </div>

        <div className="header-search-box">
          <input type="text" placeholder="Where do you want to go?" />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {/* Right Section: Navigation + Call */}
      <div className="header-right-content">
        <nav className="nav-menu-header">
          <Link to="/upcoming-trips">
            <FaCalendarAlt /> Upcoming Trips
          </Link>
          <Link to="/corporate-tours">Corporate Tours</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/payment">Payments</Link>
        </nav>

        <a href="tel:+919090403075" className="call-button">
          <FaPhoneAlt /> +91-9090403075
        </a>
      </div>
    </header>
  );
};

export default Header;
