import React, { useState } from "react";
import "../styles/Navbar.css";
import downArrowIcon from "../assets/down-chevron.svg";
import giftIcon from "../assets/gift.webp";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import logo from "../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (slug) => {
    navigate(`/${slug}`);
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Wanderon Logo" />
      </div>

      <div className="nav-middle-content">
        <a href="tel:+919090403075" className="nav-call-button">
          <FaPhoneAlt /> +91-9090403075
        </a>
      </div>

      <div className="nav-header">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOpen ? closeIcon : menuIcon} alt="Menu" />
        </button>
      </div>

      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {/* International Trips */}
        <li className="dropdown">
          <span className="nav-link" onClick={() => handleNavigation("international-trips")}>
            International Trips{" "}
            <span className="dropdown-icon">
              <img src={downArrowIcon} alt="Dropdown" />
            </span>
          </span>
          <div className="dropdown-menu">
            <ul>
              <li onClick={() => handleNavigation("europe-tour-packages")}>Europe</li>
              <li onClick={() => handleNavigation("georgia-tour-packages")}>Georgia</li>
              <li onClick={() => handleNavigation("bali-tour-packages")}>Bali</li>
              <li onClick={() => handleNavigation("vietnam-tour-packages")}>Vietnam</li>
              <li onClick={() => handleNavigation("thailand-tour-packages")}>Thailand</li>
              <li onClick={() => handleNavigation("spain-tour-packages")}>Spain</li>
              <li onClick={() => handleNavigation("singapore-tour-packages")}>Singapore</li>
            </ul>
            <ul>
              <li onClick={() => handleNavigation("kazakhstan-tour-packages")}>Kazakhstan</li>
              <li onClick={() => handleNavigation("japan-tour-packages")}>Japan</li>
              <li onClick={() => handleNavigation("sri-lanka-tour-packages")}>Sri Lanka</li>
              <li onClick={() => handleNavigation("dubai-tour-packages")}>Dubai</li>
              <li onClick={() => handleNavigation("malaysia-tour-packages")}>Malaysia</li>
              <li onClick={() => handleNavigation("bhutan-tour-packages")}>Bhutan</li>
              <li onClick={() => handleNavigation("south-africa-tour-packages")}>South Africa</li>
            </ul>
            <ul>
              <li onClick={() => handleNavigation("kenya-tour-packages")}>Kenya</li>
              <li onClick={() => handleNavigation("switzerland-tour-packages")}>Switzerland</li>
              <li onClick={() => handleNavigation("australia-tour-packages")}>Australia</li>
              <li onClick={() => handleNavigation("mauritius-tour-packages")}>Mauritius</li>
              <li onClick={() => handleNavigation("france-tour-packages")}>France</li>
              <li onClick={() => handleNavigation("maldives-tour-packages")}>Maldives</li>
              <li onClick={() => handleNavigation("new-zealand-tour-packages")}>New Zealand</li>
            </ul>
          </div>
        </li>

        {/* India Trips */}
        <li className="dropdown">
          <span className="nav-link" onClick={() => handleNavigation("india-trips")}>
            India Trips{" "}
            <span className="dropdown-icon">
              <img src={downArrowIcon} alt="Dropdown" />
            </span>
          </span>
          <div className="dropdown-menu">
            <ul>
              <li onClick={() => handleNavigation("ladakh-tour-packages")}>Ladakh</li>
              <li onClick={() => handleNavigation("spiti-tour-packages")}>Spiti</li>
              <li onClick={() => handleNavigation("meghalaya-tour-packages")}>Meghalaya</li>
              <li onClick={() => handleNavigation("kerala-tour-packages")}>Kerala</li>
              <li onClick={() => handleNavigation("himachal-pradesh-tour-packages")}>Himachal Pradesh</li>
              <li onClick={() => handleNavigation("kashmir-tour-packages")}>Kashmir</li>
            </ul>
            <ul>
              <li onClick={() => handleNavigation("rajasthan-tour-packages")}>Rajasthan</li>
              <li onClick={() => handleNavigation("uttarakhand-tour-packages")}>Uttarakhand</li>
              <li onClick={() => handleNavigation("andaman-tour-packages")}>Andaman</li>
              <li onClick={() => handleNavigation("sikkim-tour-packages")}>Sikkim</li>
              <li onClick={() => handleNavigation("leh-ladakh-bike-trip")}>Leh Ladakh Bike Trips</li>
              <li onClick={() => handleNavigation("spiti-valley-bike-trip")}>Spiti Valley Bike Trips</li>
            </ul>
          </div>
        </li>

        {/* Weekend Trips */}
        <li className="dropdown">
          <span className="nav-link" onClick={() => handleNavigation("weekend-trips")}>
            Weekend Trips{" "}
            <span className="dropdown-icon">
              <img src={downArrowIcon} alt="Dropdown" />
            </span>
          </span>
          <div className="dropdown-menu">
            <ul>
              <li onClick={() => handleNavigation("weekend-getaways")}>Weekend Getaways</li>
            </ul>
          </div>
        </li>

        {/* Group Tours */}
        <li className="dropdown">
          <span className="nav-link" onClick={() => handleNavigation("group-tours")}>
            Group Tours{" "}
            <span className="dropdown-icon">
              <img src={downArrowIcon} alt="Dropdown" />
            </span>
          </span>
          <div className="dropdown-menu">
            <ul>
              <li onClick={() => handleNavigation("europe-group-tour")}>Europe</li>
              <li onClick={() => handleNavigation("vietnam-group-tour")}>Vietnam</li>
              <li onClick={() => handleNavigation("bali-group-tour")}>Bali</li>
              <li onClick={() => handleNavigation("kazakhstan-group-tour")}>Kazakhstan</li>
              <li onClick={() => handleNavigation("thailand-group-tour")}>Thailand</li>
              <li onClick={() => handleNavigation("bhutan-group-tour")}>Bhutan</li>
              <li onClick={() => handleNavigation("himachal-group-tour")}>Himachal Pradesh</li>
            </ul>
            <ul>
              <li onClick={() => handleNavigation("ladakh-group-tour")}>Ladakh</li>
              <li onClick={() => handleNavigation("spiti-group-tour")}>Spiti Valley</li>
              <li onClick={() => handleNavigation("kashmir-group-tour")}>Kashmir</li>
              <li onClick={() => handleNavigation("meghalaya-group-tour")}>Meghalaya</li>
              <li onClick={() => handleNavigation("kerala-group-tour")}>Kerala</li>
              <li onClick={() => handleNavigation("andaman-group-tour")}>Andaman</li>
              <li onClick={() => handleNavigation("sikkim-group-tour")}>Sikkim</li>
            </ul>
          </div>
        </li>

        {/* Honeymoon Package */}
        <li>
          <Link className="nav-link" to="/honeymoon" onClick={() => setMenuOpen(false)}>
            Honeymoon Package
          </Link>
        </li>

        {/* Gift Cards */}
        <li>
          <Link className="nav-link" to="/gift-cards" onClick={() => setMenuOpen(false)}>
            <img
              src={giftIcon}
              alt="Gift Card Icon"
              width="20"
              height="20"
              style={{ verticalAlign: "middle", marginRight: "6px" }}
            />
            Gift Cards
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
