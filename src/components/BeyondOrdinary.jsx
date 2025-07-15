import React from 'react';
import '../styles/BeyondOrdinary.css'; // Adjust path as needed

import icon1 from '../assets/byo-icon-1.svg';
import icon2 from '../assets/byo-icon-2.svg';
import icon3 from '../assets/byo-icon-3.svg';
import icon4 from '../assets/byo-icon-4.svg';
import icon5 from '../assets/byo-icon-5.svg';
import icon6 from '../assets/byo-icon-6.svg';

const cards = [
  {
    title: 'End to End Content',
    description:
      "We've got everything you need from start to finish – the best places to stay, cool guides, smooth rides, and more. Your trip's in good hands!",
    icon: icon1,
    bgClass: 'red',
  },
  {
    title: 'No Visa Worries',
    description: "You focus on fun planning, and we'll handle all the boring visa stuff.",
    icon: icon2,
    bgClass: 'blue',
  },
  {
    title: 'Dreamy Stays & Flights',
    description:
      "Getting to your dream spots is a breeze. We'll make sure you stay in awesome places and catch your flights without a hitch.",
    icon: icon3,
    bgClass: 'green',
  },
  {
    title: 'Local Buddies',
    description:
      'Our buddies on the ground will help you explore the heart of every place you visit.',
    icon: icon4,
    bgClass: 'orange',
  },
  {
    title: 'Picture-Perfect Moments',
    description:
      "We've got a team that can help you snap those amazing pics you'll cherish forever.",
    icon: icon5,
    bgClass: 'teal',
  },
  {
    title: 'Travel Magic Makers',
    description:
      'We make sure your adventure is not just hassle-free but sprinkled with the pixie dust of unforgettable memories.',
    icon: icon6,
    bgClass: 'purple',
  },
];

const BeyondOrdinary = () => {
  return (
    <div className="beyond-section">
      <h2>
        Beyond <strong>Ordinary?</strong>
      </h2>
      <p>We're firm believers that business trips should be anything but ordinary.</p>

      <div className="card-grid">
        {cards.map((card, index) => (
          <div className={`beyond-card ${card.bgClass}`} key={index}>
            <div className="beyond-card-heading">
              <img src={card.icon} alt="icon" className="beyond-icon" />
              <div className="beyond-title">{card.title}</div>
            </div>
            <div className="beyond-description">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeyondOrdinary;
