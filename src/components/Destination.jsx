import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Destination.css';

// Import international destination images
import europeImg from '../assets/europe_card.webp';
import asiaImg from '../assets/europe_card.webp';


// Import India destination images
import ladakhImg from '../assets/ladakh.webp';
import himachalImg from '../assets/himachal.webp';


const internationalDestinations = [
  { href: "/international-trips/europe-tour-packages", ariaLabel: "Europe Tour Packages", image: europeImg },
  { href: "/international-trips/asia-tour-packages", ariaLabel: "Asia Tour Packages", image: asiaImg },
 
];

const indiaDestinations = [
  { href: "/india-trips/ladakh", ariaLabel: "Ladakh Tour Packages", image: ladakhImg },
  { href: "/india-trips/himachal", ariaLabel: "Himachal Tour Packages", image: himachalImg },
  
];

const InternationalDestination = () => {
  const location = useLocation();
  const isIndiaTrips = location.pathname === "/india-trips";
  const destinations = isIndiaTrips ? indiaDestinations : internationalDestinations;

  return (
    <div className="destination-section">
      <div className="destination-title"><h1>Destinations</h1></div>
      <div className="destination-card-wrapper">
        {destinations.map((dest, index) => (
  <a key={index} aria-label={dest.ariaLabel} href={dest.href}>
    <div
      className="card-container"
      style={{ backgroundImage: `url(${dest.image})` }}
    >
      <div className="card-content"></div>
      <div className="card-gradient-overlay"></div>
      <div className="card-shimmer-placeholder"></div>
    </div>
  </a>
))}

      </div>
    </div>
  );
};

export default InternationalDestination;
