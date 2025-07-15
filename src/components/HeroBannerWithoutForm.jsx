import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/HeroBanner.css';
import google from '../assets/google.webp';
import tripadvisor from '../assets/tripadvisor.webp';
import facebook from '../assets/facebook.svg';  

const HeroBannerWithoutForm = () => {
  const path = useLocation().pathname;

  const isHoneymoon = path === '/honeymoon';
  const isWeekend = path === '/weekend-getaways';

  const heading = isHoneymoon
    ? 'Honeymoon Packages – Romantic Journeys Start Here'
    : isWeekend
    ? 'Weekend Getaways – Quick Escapes from the City Life'
    : 'Explore Premium Packages – Handpicked for You';

  const subtext = isHoneymoon
    ? 'Celebrate Love with Our Handpicked Honeymoon Destinations'
    : isWeekend
    ? 'Rejuvenate, Relax, and Recharge – Your Ideal Weekend Awaits'
    : 'Choose from our exclusive range of curated travel experiences.';

  const backgroundClass = isHoneymoon
    ? 'honeymoon-banner-wrapper'
    : isWeekend
    ? 'weekend-banner-wrapper'
    : 'international-banner-wrapper';

  return (
    <div className={backgroundClass}>
      <div className="centered-text-container">
          <h2>{heading}</h2>
          <p className="bg-yellow">{subtext}</p>
        </div>

      <div className="review-count-wrapper">
        <div className="review">
          <img src={google} alt="Google" />
          <div className="international-review-count">
            <span className="rating">★ 4.9</span>
            <span>(13150 reviews)</span>
          </div>
        </div>
        <div className="review">
          <img src={tripadvisor} alt="Tripadvisor" />
          <div className="international-review-count">
            <span className="rating">★ 5.0</span>
            <span>(3690 reviews)</span>
          </div>
        </div>
        <div className="review">
          <img src={facebook} alt="Facebook" />
          <div className="international-review-count">
            <span className="rating">★ 4.9</span>
            <span>(1031 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerWithoutForm;
