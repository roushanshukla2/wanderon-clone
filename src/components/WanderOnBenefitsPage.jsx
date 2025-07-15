import React, { useState, useEffect, useRef } from 'react';
import '../styles/WanderOnBenefitsPage.css';
import benifitsBg1 from '../assets/benifitsBg1.svg';
import benifitsBg2 from '../assets/benifitsBg2.svg';
import benifitsBg3 from '../assets/benifitsBg3.svg';
import benifitsBg4 from '../assets/benifitsBg4.svg';

const benefitsData = [
  {
    title: 'No Third Party Mess',
    description: '100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!',
    image: benifitsBg1,
  },
  {
    title: 'Transparency & Security',
    description: 'Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!',
    image: benifitsBg2,
  },
  {
    title: 'Co-Travelers Filtering',
    description: 'Multi-step filtering to bring only like-minded people together! That\'s our key to have fuss-free trips!',
    image: benifitsBg3,
  },
  {
    title: 'One Stop Hassle Free Experience',
    description: 'Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!',
    image: benifitsBg4,
  },
];

const WhyWanderOn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Dynamically change heading based on pathname
  const pathname = window.location.pathname;
  const pageHeading = pathname === '/corporate-tours' ? "WanderOn’s Secret Sauce" : "Why WanderOn?";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1080);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % benefitsData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + benefitsData.length) % benefitsData.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchEndX.current - touchStartX.current;
    if (Math.abs(distance) > 50) {
      distance < 0 ? nextCard() : prevCard();
    }
  };

  return (
    <div className="BenefitsPageContainer">
      <div className="BenefitsPageHeader">
        <h3>{pageHeading}</h3>
      </div>

      <div className="arrow-wrapper">
        <button className="arrow-btn arrow-left" onClick={prevCard} style={{ display: isMobile ? 'flex' : 'none' }}>
          &#8592;
        </button>

        <div
          className="BenefitsPageCardContainer"
          id="benefits-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {isMobile ? (
            <div className="CardContainer">
              <h4>{benefitsData[currentIndex].title}</h4>
              <p>{benefitsData[currentIndex].description}</p>
              <img src={benefitsData[currentIndex].image} alt="benefit" />
            </div>
          ) : (
            benefitsData.map((benefit, i) => (
              <div className="CardContainer" key={i}>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
                <img src={benefit.image} alt="benefit" />
              </div>
            ))
          )}
        </div>

        <button className="arrow-btn arrow-right" onClick={nextCard} style={{ display: isMobile ? 'flex' : 'none' }}>
          &#8594;
        </button>
      </div>

      <div className="dots-container" style={{ display: isMobile ? 'flex' : 'none' }}>
        {benefitsData.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyWanderOn;
