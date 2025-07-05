
import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { FaSearch, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      {/* Left Section: Logo + Search */}
      <div className="header-left-content">
        <div className="logo">
          <img src={logo} alt="Wanderon Logo" />
        </div>

        <div className="header-search-box">
          <input type="text" placeholder="Where do you want to go?" />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {/* Right Section: Nav + Call */}
      <div className="header-right-content">
        <nav className="nav-menu-header">
          <a href="/upcoming-trips">
            <FaCalendarAlt /> Upcoming Trips
          </a>
          <a href="corporate-tours">Corporate Tours</a>
          <a href="blog">Blogs</a>
          <a href="about-us">About Us</a>
          <a href="payment">Payments</a>
        </nav>
        <a href="tel:+919090403075" className="call-button">
          <FaPhoneAlt /> +91-9090403075
        </a>

      </div>
    </header>
  );
};

export default Header;