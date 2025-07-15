


import React from 'react';
import '../styles/BannerSection.css';
// Importing images and videos for the banner
import cta_banner from '../assets/cta-banner.webp';

import ladakh from '../assets/ladakh.webp';
import spiti from '../assets/spiti.webp'; 
import meghalaya from '../assets/meghalaya.webp';
import kerala from '../assets/kerala.webp';
import himachal from '../assets/himachal.webp';
import desktopRender from '../assets/Desktop-render-new-f.mp4';
import upcomingCommunityImage from '../assets/upcomming-community-image.webp';
import internationalTrip from '../assets/international_trip.mp4';

const RomanticEscapesBanner = () => {
  const slide = (dir, sliderId) => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.scrollBy({ left: dir * 220, behavior: 'smooth' });
    }
  };

  const destinations = [
    { src: ladakh, title: 'Ladakh', price: 'Rs. 21,999' },
    { src: spiti, title: 'Spiti', price: 'Rs. 17,999' },
    { src: meghalaya, title: 'Meghalaya', price: 'Rs. 21,499' },
    { src: kerala, title: 'Kerala', price: 'Rs. 12,999' },
    { src: himachal, title: 'Himachal', price: 'Rs. 7,999' },
  ];

  const renderSlider = (sliderId) => (
    <div className="new-slider-wrap">
      <div className="new-nav-arrow new-nav-left" onClick={() => slide(-1, sliderId)}>
        <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" /></svg>
      </div>

      <div className="new-slider" id={sliderId}>
        {[...destinations, ...destinations].map((item, index) => (
          <div className="new-slide-card" key={index}>
            <img src={item.src} alt={item.title} />
            <div className="new-info">
              <h3>{item.title}</h3>
              <p>Starting {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="new-nav-arrow new-nav-right" onClick={() => slide(1, sliderId)}>
        <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
      </div>
    </div>
  );

  return (
    
    <div>
      <h1>this is Romantic Escapse Section</h1>
      
    </div>

    
  );
};



export default RomanticEscapesBanner;
