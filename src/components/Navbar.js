// import React from 'react';
// import '../styles/Navbar.css';
// import downArrowIcon from '../assets/down-chevron.svg';
// import giftIcon from '../assets/gift.webp';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <ul className="nav-menu">
//         <li className="dropdown">
//           <button type="button" className="nav-link">
//             International Trips <span className="dropdown-icon"><img src={downArrowIcon} alt="Dropdown" /></span>
//           </button>
//           <div className="dropdown-menu">
//             <ul>
//               <li>Europe</li>
//               <li>Georgia</li>
//               <li>Bali</li>
//               <li>Vietnam</li>
//               <li>Thailand</li>
//               <li>Spain</li>
//               <li>Singapore</li>
//             </ul>
//             <ul>
//               <li>Kazakhstan</li>
//               <li>Japan</li>
//               <li>Sri Lanka</li>
//               <li>Dubai</li>
//               <li>Malaysia</li>
//               <li>Bhutan</li>
//               <li>South Africa</li>
//             </ul>
//             <ul>
//               <li>Kenya</li>
//               <li>Switzerland</li>
//               <li>Australia</li>
//               <li>Mauritius</li>
//               <li>France</li>
//               <li>Maldives</li>
//               <li>New Zealand</li>
//             </ul>
//           </div>
//         </li>

//         <li className="dropdown">
//           <button type="button" className="nav-link">
//             India Trips <span className="dropdown-icon"><img src={downArrowIcon} alt="Dropdown" /></span>
//           </button>
//           <div className="dropdown-menu">
//             <ul>
//               <li>Ladakh</li>
//               <li>Spiti</li>
//               <li>Meghalaya</li>
//               <li>Kerala</li>
//               <li>Himachal Pradesh</li>
//               <li>Kashmir</li>
//             </ul>
//             <ul>
//               <li>Rajasthan</li>
//               <li>Uttarakhand</li>
//               <li>Andaman</li>
//               <li>Sikkim</li>
//               <li>Leh Ladakh Bike Trips</li>
//               <li>Spiti Valley Bike Trips</li>
//             </ul>
//           </div>
//         </li>

//         <li className="dropdown">
//           <button type="button" className="nav-link">
//             Weekend Trips <span className="dropdown-icon"><img src={downArrowIcon} alt="Dropdown" /></span>
//           </button>
//           <div className="dropdown-menu">
//             <ul>
//               <li>Weekend Getaways</li>
//             </ul>
//           </div>
//         </li>

//         <li className="dropdown">
//           <button type="button" className="nav-link">
//             Group Tours <span className="dropdown-icon"><img src={downArrowIcon} alt="Dropdown" /></span>
//           </button>
//           <div className="dropdown-menu">
//             <ul>
//               <li>Europe</li>
//               <li>Vietnam</li>
//               <li>Bali</li>
//               <li>Kazakhstan</li>
//               <li>Thailand</li>
//               <li>Bhutan</li>
//               <li>Himachal Pradesh</li>
//             </ul>
//             <ul>
//               <li>Ladakh</li>
//               <li>Spiti Valley</li>
//               <li>Kashmir</li>
//               <li>Meghalaya</li>
//               <li>Kerala</li>
//               <li>Andaman</li>
//               <li>Sikkim</li>
//             </ul>
//           </div>
//         </li>

//         <li><a className="nav-link" href="/honeymoon">Honeymoon Package</a></li>
//         <li>
//           <a className="nav-link" href="/gift-cards">
//             <img
//               src={giftIcon}
//               alt="Gift Card Icon"
//               width="20"
//               height="20"
//               style={{ verticalAlign: 'middle', marginRight: '6px' }}
//             />
//             Gift Cards
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import '../styles/Navbar.css';
import downArrowIcon from '../assets/down-chevron.svg';
import giftIcon from '../assets/gift.webp';
import menuIcon from '../assets/menu.svg'; // Add a hamburger icon
import closeIcon from '../assets/close.svg'; // Add a close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-header">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOpen ? closeIcon : menuIcon} alt="Menu" />
        </button>
      </div>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {/* International Trips */}
        <li className="dropdown">
          <button type="button" className="nav-link">
            International Trips <span className="dropdown-icon"><img src={downArrowIcon} alt="Dropdown" /></span>
          </button>
          <div className="dropdown-menu">
            <ul>
              <li>Europe</li><li>Georgia</li><li>Bali</li><li>Vietnam</li><li>Thailand</li><li>Spain</li><li>Singapore</li>
            </ul>
            <ul>
              <li>Kazakhstan</li><li>Japan</li><li>Sri Lanka</li><li>Dubai</li><li>Malaysia</li><li>Bhutan</li><li>South Africa</li>
            </ul>
            <ul>
              <li>Kenya</li><li>Switzerland</li><li>Australia</li><li>Mauritius</li><li>France</li><li>Maldives</li><li>New Zealand</li>
            </ul>
          </div>
        </li>

        {/* India Trips */}
        <li className="dropdown">
          <button type="button" className="nav-link">
            India Trips <span className="dropdown-icon"><img src={downArrowIcon} alt="Dropdown" /></span>
          </button>
          <div className="dropdown-menu">
            <ul>
              <li>Ladakh</li><li>Spiti</li><li>Meghalaya</li><li>Kerala</li><li>Himachal Pradesh</li><li>Kashmir</li>
            </ul>
            <ul>
              <li>Rajasthan</li><li>Uttarakhand</li><li>Andaman</li><li>Sikkim</li><li>Leh Ladakh Bike Trips</li><li>Spiti Valley Bike Trips</li>
            </ul>
          </div>
        </li>

        {/* Weekend Trips */}
        <li className="dropdown">
          <button type="button" className="nav-link">
            Weekend Trips <span className="dropdown-icon"><img src={downArrowIcon} alt="Dropdown" /></span>
          </button>
          <div className="dropdown-menu">
            <ul><li>Weekend Getaways</li></ul>
          </div>
        </li>

        {/* Group Tours */}
        <li className="dropdown">
          <button type="button" className="nav-link">
            Group Tours <span className="dropdown-icon"><img src={downArrowIcon} alt="Dropdown" /></span>
          </button>
          <div className="dropdown-menu">
            <ul>
              <li>Europe</li><li>Vietnam</li><li>Bali</li><li>Kazakhstan</li><li>Thailand</li><li>Bhutan</li><li>Himachal Pradesh</li>
            </ul>
            <ul>
              <li>Ladakh</li><li>Spiti Valley</li><li>Kashmir</li><li>Meghalaya</li><li>Kerala</li><li>Andaman</li><li>Sikkim</li>
            </ul>
          </div>
        </li>

        <li><a className="nav-link" href="/honeymoon">Honeymoon Package</a></li>
        <li>
          <a className="nav-link" href="/gift-cards">
            <img src={giftIcon} alt="Gift Card Icon" width="20" height="20" style={{ verticalAlign: 'middle', marginRight: '6px' }} />
            Gift Cards
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
