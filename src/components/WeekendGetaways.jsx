import React, { useState, useEffect, useRef } from 'react';
import '../styles/WeekendGetaways.css';

// 📦 Importing images directly
import hospitalityImg from '../assets/hospitality.png';
import staysImg from '../assets/stays.png';
import captainsImg from '../assets/captains.png';

const images = [
  { src: hospitalityImg, alt: 'Top Notch Hospitality', label: 'Top Notch Hospitality' },
  { src: staysImg, alt: 'Beautiful Handpicked Stays', label: 'Beautiful Handpicked Stays' },
  { src: captainsImg, alt: 'Fun Team Captains', label: 'Fun Team Captains' }
];

const WeekendGetaways = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const goToSlide = (index) => setCurrentIndex(index);

  const moveSlide = (direction) => {
    const total = images.length;
    setCurrentIndex((prevIndex) => (prevIndex + direction + total) % total);
  };

  useEffect(() => {
    const updateSlider = () => {
      setIsMobile(window.innerWidth < 800);
      if (trackRef.current && isMobile) {
        const slideWidth = trackRef.current.children[0].offsetWidth;
        trackRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    };

    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [currentIndex, isMobile]);

  return (
    <div className="weekend-getaway-slider-wrapper">
      <h2>Weekend Getaways From Delhi</h2>
      <div className="slider-container">
        {isMobile && <button className="arrow prev" onClick={() => moveSlide(-1)}>&#10094;</button>}

        <div className="slider-track" ref={trackRef}>
          {images.map((img, index) => (
            <div className="weekend-slider-card" key={index}>
              <img src={img.src} alt={img.alt} />
              <p>{img.label}</p>
            </div>
          ))}
        </div>

        {isMobile && <button className="arrow next" onClick={() => moveSlide(1)}>&#10095;</button>}
      </div>

      {isMobile && (
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={currentIndex === index ? 'active' : ''}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeekendGetaways;
