import React from 'react';
import '../styles/OurLocations.css';
import gurugramLogo from '../assets/wanderon-logo.webp';
import jaipurLogo from '../assets/wanderon-logo.webp';

const locations = [
  {
    city: 'Gurugram',
    address:
      '3rd Floor, Building No-436, Phase IV, Udyog Vihar, Sector-18, Gurugram, Haryana-122015',
    image: gurugramLogo,
  },
  {
    city: 'Jaipur',
    address:
      '3rd Floor, Workie Business Tower, V.T. Road, Mansarovar, Jaipur, Rajasthan-302020',
    image: jaipurLogo,
  },
];

const OurLocations = () => {
  return (
    <div className="our-location-container-wrapper">
      <div className="our-location-section-heading">
        <h3>Where We Call Home</h3>
        <p>
          A passionate group of professionals and experts, all driven by a commitment
          to crafting exceptional travel experience – where collaboration, creativity and
          culture thrive.
        </p>
      </div>

      <div className="our-location-section-card-wrapper">
        {locations.map((loc, index) => (
          <div className="our-location-section-card" key={index}>
            <img src={loc.image} alt={`${loc.city} Logo`} />
            <h4>{loc.city}</h4>
            <p>{loc.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLocations;
