import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/AllPackages.css';

// ✅ International trip images
import spitiImg from '../assets/spiti.webp';
import euroPathwaysImg from '../assets/europe_card.webp';


// ✅ India trip images
import ladakhImg from '../assets/ladakh.webp';
import goaImg from '../assets/rajasthan.webp';


const internationalTrips = [
  {
    id: 1,
    price: '₹17,999/- Onwards',
    img: spitiImg,
    title: 'Spiti Backpacking - Bliss in Budget',
    duration: '6N/7D',
    route: 'Delhi - Delhi',
    dates: '6 Dec, 13 Dec',
  },
  {
    id: 2,
    price: '₹1,69,990/- Onwards',
    img: euroPathwaysImg,
    title: '11 Days European Pathways Community Trip',
    duration: '10N/11D',
    route: 'Paris - Prague',
    dates: '22 Dec',
  },
  
];

const indiaTrips = [
  {
    id: 1,
    price: '₹19,999/- Onwards',
    img: ladakhImg,
    title: 'Ladakh Adventure Expedition',
    duration: '7N/8D',
    route: 'Leh - Leh',
    dates: '15 Sep, 22 Sep',
  },
  {
    id: 2,
    price: '₹14,999/- Onwards',
    img: goaImg,
    title: 'Goa Beach Party Trip',
    duration: '4N/5D',
    route: 'Goa - Goa',
    dates: '1 Oct, 8 Oct',
  },
  
];

const AllPackages = () => {
  const location = useLocation();
  const isIndiaTrips = location.pathname.includes('/india-trips');
  const allTrips = isIndiaTrips ? indiaTrips : internationalTrips;

  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleTrips, setVisibleTrips] = useState([]);
  const rowCount = 2;

  const getColumnCount = () => {
    const el = document.querySelector('.International-trip-packages');
    if (!el) return 3;
    const style = window.getComputedStyle(el);
    const columns = style.getPropertyValue('grid-template-columns').split(' ').length;
    return columns;
  };

  const showNextTrips = useCallback(() => {
    const cols = getColumnCount();
    const toShow = rowCount * cols;
    const nextSet = allTrips.slice(visibleCount, visibleCount + toShow);
    setVisibleTrips(prev => [...prev, ...nextSet]);
    setVisibleCount(prev => prev + nextSet.length);
  }, [visibleCount, allTrips]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setVisibleCount(0);
    setVisibleTrips([]);

    const timeout = setTimeout(() => {
      const cols = getColumnCount();
      const toShow = rowCount * cols;
      const nextSet = allTrips.slice(0, toShow);
      setVisibleTrips(nextSet);
      setVisibleCount(nextSet.length);
    }, 0);

    return () => clearTimeout(timeout);
  }, [allTrips]);

  return (
    <div className="International-upcoming-trips-container">
      <div className="International-community-header">
        <h2>All Packages</h2>
      </div>

      <div className="International-trip-packages">
        {visibleTrips.map(trip => (
          <div
            key={trip.id}
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

      {visibleCount < allTrips.length && (
        <button className="exploreButton" onClick={showNextTrips}>
          Explore More
        </button>
      )}
    </div>
  );
};

export default AllPackages;
