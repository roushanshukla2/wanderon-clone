import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/BestSellerPackages.css';

// ✅ Import images for international trips
import spitiImg from '../assets/spiti.webp';
import euroPathwaysImg from '../assets/europe_card.webp';
import euroTrailsImg from '../assets/europe_card.webp';

// ✅ Import images for India trips
import ladakhImg from '../assets/ladakh.webp';
import goaImg from '../assets/uttarakhand.webp';
import keralaImg from '../assets/kerala.webp';

const internationalTrips = [
  {
    price: '₹17,999/- Onwards',
    img: spitiImg,
    title: 'Spiti Backpacking - Bliss in Budget',
    duration: '6N/7D',
    route: 'Delhi - Delhi',
    dates: '6 Dec, 13 Dec',
  },
  {
    price: '₹1,69,990/- Onwards',
    img: euroPathwaysImg,
    title: '11 Days European Pathways Community Trip',
    duration: '10N/11D',
    route: 'Paris - Prague',
    dates: '22 Dec',
  },
  {
    price: '₹1,44,990/- Onwards',
    img: euroTrailsImg,
    title: '8 Days European Trails Community Trip',
    duration: '7N/8D',
    route: 'Amsterdam - Prague',
    dates: '25 Dec',
  },
];

const indiaTrips = [
  {
    price: '₹19,999/- Onwards',
    img: ladakhImg,
    title: 'Ladakh Adventure Expedition',
    duration: '7N/8D',
    route: 'Leh - Leh',
    dates: '15 Sep, 22 Sep',
  },
  {
    price: '₹14,999/- Onwards',
    img: goaImg,
    title: 'Goa Beach Party Trip',
    duration: '4N/5D',
    route: 'Goa - Goa',
    dates: '1 Oct, 8 Oct',
  },
  {
    price: '₹21,999/- Onwards',
    img: keralaImg,
    title: 'Kerala Backwaters & Hills Tour',
    duration: '6N/7D',
    route: 'Cochin - Trivandrum',
    dates: '10 Oct, 20 Oct',
  },
];

const BestSellerPackages = () => {
  const location = useLocation();
  const isIndiaTrips = location.pathname.includes('/india-trips');
  const selectedTrips = isIndiaTrips ? indiaTrips : internationalTrips;

  return (
    <div className="International-upcoming-trips-container">
      <div className="International-community-header">
        <h2>Best Seller Packages</h2>
        <p>Find your perfect travel experience with our top-rated packages</p>
      </div>

      <div className="International-trip-packages">
        {[...selectedTrips, ...selectedTrips].map((trip, index) => (
          <div
            key={index}
            className="International-trip-card"
            data-price={trip.price}
          >
            <img src={trip.img} alt={trip.title} />
            <div className="International-trip-details">
              <h3>{trip.title}</h3>
              <p>{trip.duration}</p>
              <p>{trip.route}</p>
              <p>{trip.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellerPackages;
