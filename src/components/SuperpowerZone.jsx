import React from 'react';
import '../styles/SuperpowerZone.css'; // Adjust path as needed

const superpowers = [
  {
    icon: require('../assets/superpower-card-icon1.png'),
    alt: 'Team Outings Icon',
    title: 'Team Outings',
    description: 'Bring your work crew together for a day of bonding and enjoyment outside the office.',
  },
  {
    icon: require('../assets/superpower-card-icon2.png'),
    alt: 'Corporate Trips Icon',
    title: 'Corporate Trips',
    description: 'Elevate team spirit and performance with incentive trips that turn dreams into reality.',
  },
  {
    icon: require('../assets/superpower-card-icon3.png'),
    alt: 'Incentive Tour Icon',
    title: 'Incentive Tour',
    description: 'Bring your work crew together for a day of bonding and enjoyment outside the office.',
  },
  {
    icon: require('../assets/superpower-card-icon4.png'),
    alt: 'Workcations Icon',
    title: 'Workcations',
    description: 'Why work in the same old way when you can do the same in your favorite destinations with our Workcations?',
  },
  {
    icon: require('../assets/superpower-card-icon5.png'),
    alt: 'Conferences Icon',
    title: 'Conferences',
    description: 'Transform ordinary conferences into extraordinary journeys combined with innovation, networking, and adventure.',
  },
  {
    icon: require('../assets/superpower-card-icon6.png'),
    alt: 'Exhibition Icon',
    title: 'Exhibition',
    description: 'Discover, connect, and inspire, elevate your brand at global exhibitions.',
  },
];

const SuperpowerZone = () => {
  return (
    <div className="superpower-container">
      <div className="superpower-content-heading">
        <h2>
          Our <strong>Superpower</strong> Zone
        </h2>
      </div>
      <div className="superpower-card-container">
        {superpowers.map((item, index) => (
          <div className="superpower-card" key={index}>
            <div className="superpower-card-icon">
              <img src={item.icon} alt={item.alt} />
            </div>
            <div className="superpower-card-title">{item.title}</div>
            <div className="superpower-card-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperpowerZone;
