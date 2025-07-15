import React from 'react';
import '../styles/LoveStoryDestinations.css';

// 🌍 Image imports
import baliCard from '../assets/bali_card.webp';
import thailandCard from '../assets/bali_card.webp';
import vietnamCard from '../assets/bali_card.webp';
import europeCard from '../assets/bali_card.webp';
import kashmirCard from '../assets/bali_card.webp';
import andamanCard from '../assets/bali_card.webp';
import keralaCard from '../assets/bali_card.webp';
import himachalCard from '../assets/bali_card.webp';
import loveHands from '../assets/love-hands.svg';

const destinations = [
  { name: 'Bali', image: baliCard, bg: '#d6e4aa' },
  { name: 'Thailand', image: thailandCard, bg: '#fcd2cc' },
  { name: 'Vietnam', image: vietnamCard, bg: '#f5f1e3' },
  { name: 'Europe', image: europeCard, bg: '#d6e4aa' },
  { name: 'Kashmir', image: kashmirCard, bg: '#fcd2cc' },
  { name: 'Andaman', image: andamanCard, bg: '#d6e4aa' },
  { name: 'Kerala', image: keralaCard, bg: '#fcd2cc' },
  { name: 'Himachal', image: himachalCard, bg: '#d6e4aa' }
];

const LoveStoryDestinations = () => {
  return (
    <div className="honeymoon-card-container">
      <div className="honeymoon-container-heading">
        <h2>Your Love Story, Our Destinations!</h2>
      </div>

      <div className="honeymoon-card-wrapper">
        {destinations.map((dest, index) => (
          <div
            className="honeymoon-card"
            key={index}
            style={{ backgroundColor: dest.bg }}
          >
            <div
              className="destination-img"
              style={{ backgroundImage: `url(${dest.image})` }}
            ></div>
            <p>{dest.name}</p>
          </div>
        ))}
      </div>

      <img src={loveHands} alt="Love Hands" className="lovehand-image" />
    </div>
  );
};

export default LoveStoryDestinations;
