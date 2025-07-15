import React, { useRef } from 'react';
import '../styles/BestOfHoneymoonPackage.css';
import archana from '../assets/archana.webp';
import HoneymoonStaticBanner from './HoneymoonStaticBanner';

const destinations = [
  {
    title: 'Vietnam Honeymoon Packages',
    user: 'ariel',
    packages: [
      {
        title: '7 Days Couple Special Tour Package To Vietnam',
        duration: '6N/7D',
        location: 'Hanoi Airport - Tan Son Nhat Airport',
        date: 'Any date of your choice',
        path: 'romantic-bali-tour-package-6n-7d',
        image: archana,
      },
      {
        title: '7 Days Exotic Vietnam Tour Package For Couple',
        duration: '6N/7D',
        location: 'Hanoi Airport - Tan Son Nhat Airport',
        date: 'Any date of your choice',
        path: 'exotic-vietnam-tour-package',
        image: archana,
      },
      {
        title: 'Vietnam Honeymoon Tour Package With Flights',
        duration: '5N/6D',
        location: 'Ahmedabad Airport - Ahmedabad',
        date: 'Any date of your choice',
        path: 'honeymoon-tour-package-with-flights',
        image: archana,
      },
    ],
  },
  {
    title: 'Maldives Honeymoon Packages',
    user: 'ariel',
    packages: [
      {
        title: '4 Nights Luxury Honeymoon in Maldives',
        duration: '4N/5D',
        location: 'Male Airport - Male',
        date: 'Any date of your choice',
        path: 'maldives-honeymoon-1',
        image: archana,
      },
      {
        title: 'Romantic Getaway in Maldives Overwater Villa',
        duration: '5N/6D',
        location: 'Male Airport - Male',
        date: 'Any date of your choice',
        path: 'maldives-honeymoon-2',
        image: archana,
      },
    ],
  },
  {
    title: 'Test Packages',
    user: 'ariel',
    packages: [
      {
        title: '4 Nights Luxury Honeymoon in Maldives',
        duration: '4N/5D',
        location: 'Male Airport - Male',
        date: 'Any date of your choice',
        path: 'maldives-honeymoon-1',
        image: archana,
      },
      {
        title: 'Romantic Getaway in Maldives Overwater Villa',
        duration: '5N/6D',
        location: 'Male Airport - Male',
        date: 'Any date of your choice',
        path: 'maldives-honeymoon-2',
        image: archana,
      },
    ],
  },
  {
    title: 'Test Honeymoon Packages',
    user: 'ariel',
    packages: [
      {
        title: '4 Nights Luxury Honeymoon in Maldives',
        duration: '4N/5D',
        location: 'Male Airport - Male',
        date: 'Any date of your choice',
        path: 'maldives-honeymoon-1',
        image: archana,
      },
      {
        title: 'Romantic Getaway in Maldives Overwater Villa',
        duration: '5N/6D',
        location: 'Male Airport - Male',
        date: 'Any date of your choice',
        path: 'maldives-honeymoon-2',
        image: archana,
      },
    ],
  },
];

const BestOfHoneymoonPackage = () => {
  const scrollRefs = useRef({});

  const scroll = (key, direction) => {
    const ref = scrollRefs.current[key];
    if (ref) {
      ref.scrollBy({ left: direction * 370, behavior: 'smooth' });
    }
  };

  return (
    <>
      {destinations.map((destination, index) => {
        const carouselKey = `carousel-${index}`;
        const basePath = `/${destination.user}`;

        const showBanner =
          (index === 2 && destinations.length >= 3) ||
          (index === destinations.length - 1 && destinations.length < 3);

        return (
          <React.Fragment key={carouselKey}>
            <div className="honeymoon-slider-section">
              <h2>{destination.title}</h2>

              <div className="honeymoon-carousel-container">
                <button
                  className="honeymoon-nav-button honeymoon-nav-left"
                  onClick={() => scroll(carouselKey, -1)}
                  aria-label="Scroll left"
                >
                  &#10094;
                </button>

                <div
                  className="honeymoon-carousel-wrapper"
                  ref={(el) => (scrollRefs.current[carouselKey] = el)}
                >
                  {destination.packages.map((pkg, pkgIdx) => {
                    const fullLink = `${basePath}/${pkg.path}`;

                    return (
                      <div className="honeymoon-trip-card" key={pkgIdx}>
                        <img src={pkg.image} alt={pkg.title} />
                        <a href={fullLink} className="honeymoon-customised-tag">
                          Customised
                        </a>
                        <div className="honeymoon-trip-info">
                          <h3>{pkg.title}</h3>
                          <div className="honeymoon-trip-meta">
                            <span>
                              <img src="the-clock.svg" alt="clock" />
                              {pkg.duration}
                            </span>
                            <span>
                              <img src="the-location.svg" alt="location" />
                              {pkg.location}
                            </span>
                            <span>
                              <img src="the-calender.svg" alt="calendar" />
                              {pkg.date}
                            </span>
                          </div>
                          <a href={fullLink} className="honeymoon-view-btn">
                            View Details
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  className="honeymoon-nav-button honeymoon-nav-right"
                  onClick={() => scroll(carouselKey, 1)}
                  aria-label="Scroll right"
                >
                  &#10095;
                </button>
              </div>
            </div>

            {showBanner && <HoneymoonStaticBanner />}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default BestOfHoneymoonPackage;
