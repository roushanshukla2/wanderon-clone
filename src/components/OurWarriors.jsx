import React from 'react';
import '../styles/OurWarriors.css';
import tripCaptains from '../assets/trip-captions.png';
import localVendor from '../assets/local-vendor.png';
import transportDriver from '../assets/transport-driver.svg';

const data = [
  {
    title: 'Trip Captains',
    image: tripCaptains,
    description:
      "Our trip captains are nothing short of heroes. Brave, dynamic, and great leaders, they’re certainly the showrunners of the community trips. They’ve been handpicked from India’s best travel institutes, and know all tricks of trade to lead and manage all kinds of trips, including biking and trekking expeditions.",
  },
  {
    title: 'Local Vendors',
    image: localVendor,
    description:
      "Being the bridge between the local vendors and the customers, we’re very selective about the former. After a rigorous recci, we’ve found the most kind and hospitable vendors, who make our travelers feel at home, even when they might be miles away from it. Over the period of time, we’ve managed to make a family-like relationship with our vendors, thus giving back to the local community in every way possible!",
  },
  {
    title: 'Transport Drivers',
    image: transportDriver,
    description:
      "We understand the responsibility of taking utmost care of our travelers when they’re off to experience the toughest terrains of the country. Hence everything depends on the competency of our drivers. All the drivers at WanderOn are local professionals, who’ve been in practice since years, and we assure that they know all nooks and corners of the roads by heart!",
  },
];

const OurWarriors = () => {
  return (
    <div className="our-warrior-container">
      <div className="our-warrior-section-heading">
        <h3>Our WARRIORS who have helped us build this holistic community</h3>
      </div>
      <div className="our-warrior-card-wrapper">
        {data.map((item, index) => (
          <div className="our-warrior-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3 className="our-warrior-yellow-line">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWarriors;
