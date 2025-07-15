import React, { useState } from 'react';
import '../styles/UpcomingTrips.css';

// ✅ Import images properly
import spiti from '../assets/spiti.webp';

const months = ['dec', 'nov', 'oct', 'sep', 'aug', 'jul'];

const tripData = [
  {
    month: 'dec',
    price: '₹17,999/- Onwards',
    img: spiti,
    title: 'Spiti Backpacking - Bliss in Budget',
    duration: '6N/7D',
    route: 'Delhi - Delhi',
    dates: '6 Dec, 13 Dec',
  },
  {
    month: 'dec',
    price: '₹1,69,990/- Onwards',
    img: spiti,
    title: '11 Days European Pathways Community Trip',
    duration: '10N/11D',
    route: 'Paris - Prague',
    dates: '22 Dec',
  },
  {
    month: 'dec',
    price: '₹1,44,990/- Onwards',
    img: spiti,
    title: '8 Days European Trails Community Trip',
    duration: '7N/8D',
    route: 'Amsterdam - Prague',
    dates: '25 Dec',
  },
  {
    month: 'nov',
    price: '₹1,44,990/- Onwards',
    img: spiti,
    title: '8 Days European Trails Community Trip',
    duration: '7N/8D',
    route: 'Amsterdam - Prague',
    dates: '25 Nov',
  },
  {
    month: 'oct',
    price: '₹1,44,990/- Onwards',
    img: spiti,
    title: '8 Days European Trails Community Trip',
    duration: '7N/8D',
    route: 'Amsterdam - Prague',
    dates: '25 Oct',
  },
  {
    month: 'sep',
    price: '₹1,44,990/- Onwards',
    img: spiti,
    title: '8 Days European Trails Community Trip',
    duration: '7N/8D',
    route: 'Amsterdam - Prague',
    dates: '25 Sep',
  },
  {
    month: 'aug',
    price: '₹17,999/- Onwards',
    img: spiti,
    title: 'Spiti Backpacking - Bliss in Budget',
    duration: '6N/7D',
    route: 'Delhi - Delhi',
    dates: '6 Aug, 13 Aug',
  },
  {
    month: 'jul',
    price: '₹17,999/- Onwards',
    img: spiti,
    title: 'Spiti Backpacking - Bliss in Budget',
    duration: '6N/7D',
    route: 'Delhi - Delhi',
    dates: '6 Jul, 13 Jul',
  },
];

const UpcomingTrips = () => {
  const [activeMonth, setActiveMonth] = useState('dec');

  const filteredTrips = tripData.filter(trip => trip.month === activeMonth);

  return (
    <div>
      <div className="community-header">
        <h2>Upcoming Community Trips</h2>
        <a href="/upcoming-community-trips" className="view-all">
          {/* View All <span className="arrow">&gt;</span> */}
        </a>
      </div>

      <div className="date-buttons">
        {months.map(month => (
          <button
            key={month}
            className={`date-btn ${activeMonth === month ? 'active' : ''}`}
            onClick={() => setActiveMonth(month)}
          >
            {month.toUpperCase()} '25
          </button>
        ))}
      </div>

      <div className="trip-packages">
        {filteredTrips.map((trip, index) => (
          <div className="trip-card" key={index} data-price={trip.price}>
            <img src={trip.img} alt={trip.title} />
            <div className="trip-details">
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

export default UpcomingTrips;
