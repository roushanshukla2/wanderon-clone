import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/HeroBanner.css';
import google from "../assets/google.webp";
import tripadvisor from '../assets/tripadvisor.webp';
import facebook from '../assets/facebook.svg';

const HeroBanner = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine trip type
  const isIndiaTrip = path === '/india-trips';
  const isInternationalTrip = path === '/international-trips';

  const heading = isIndiaTrip
    ? 'Book India Holiday Packages – Unbeatable Deals At Best Prices'
    : isInternationalTrip
    ? 'International Tour Package – Book Now At Best Prices'
    : 'Explore Premium Packages – Handpicked for You';

  const subtext = isIndiaTrip
    ? 'India Holiday Packages Crafted For Every Dream, Every Destination'
    : isInternationalTrip
    ? 'Discover The World Your Way – Find The Perfect International Tour Package Today!'
    : 'Choose from our exclusive range of curated travel experiences.';

  const backgroundClass = isIndiaTrip
    ? 'india-banner-wrapper'
    : 'international-banner-wrapper';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className={backgroundClass}>
      <div className="banner-content">
        <div className="text-container">
          <h2>{heading}</h2>
          <p className="bg-yellow">{subtext}</p>
        </div>

        <div className="callback-form">
          <h3>
            Not sure what to do? We’ll give you a <span className="blue-text">Call back</span>
          </h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="blue-text font-light">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />

            <label htmlFor="email" className="blue-text font-light">Email</label>
            <input type="email" id="email" placeholder="Enter your email id" required />

            <label htmlFor="tel" className="blue-text font-light">Phone</label>
            <input type="tel" id="tel" placeholder="Enter your phone number" required />

            <button type="submit">Submit</button>
          </form>
        </div>
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

export default HeroBanner;
