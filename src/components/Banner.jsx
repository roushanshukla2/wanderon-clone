// src/components/Banner.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Banner.css';

// Image imports
import internationalBanner from '../assets/international_trip_banner.webp';
import indiaBanner from '../assets/international_trip_banner.webp';
import honeymoonBanner from '../assets/international_trip_banner.webp';

const Banner = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isIndiaTrips = pathname.includes('/india-trips');
  const isHoneymoon = pathname.includes('/honeymoon');

  const bannerImage = isIndiaTrips
    ? indiaBanner
    : isHoneymoon
    ? honeymoonBanner
    : internationalBanner;

  const bannerLink = isIndiaTrips
    ? '/india-trips/rajasthan'
    : isHoneymoon
    ? '/honeymoon/maldives'
    : '/international-trips/bali-tour-packages';

  const bannerLabel = isIndiaTrips
    ? 'Explore Rajasthan Tour Packages'
    : isHoneymoon
    ? 'Explore Honeymoon Packages'
    : 'Explore Bali Tour Packages';

  return (
    <div className="international-static-banner">
      <a
        aria-label={bannerLabel}
        target="_blank"
        rel="noopener noreferrer"
        className="static-banner"
        href={bannerLink}
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></a>
    </div>
  );
};

export default Banner;
