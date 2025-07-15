import React from 'react';
import '../styles/HoneymoonStaticBanner.css';
import bannerImage from '../assets/honeymoon-banner.svg'; // adjust path as needed

const HoneymoonStaticBanner = () => {
  return (
    <div className="honeymoon-static-banner-wrapper">
      <img src={bannerImage} alt="Banner" />
    </div>
  );
};

export default HoneymoonStaticBanner;
