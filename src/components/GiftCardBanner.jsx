import React from 'react';
import '../styles/BodyContent.css';
import giftCardBannerImage from '../assets/gift-card-banner.jpeg';  

const GiftCardBanner = () => {
  return (
    <div className="container height-20vh">
      <img
        src={giftCardBannerImage}
        className="background-clip"
        alt="Blog Background"
      />
      <div className="content">
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default GiftCardBanner;
