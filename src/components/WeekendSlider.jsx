import React, { useEffect, useRef, useState } from 'react';
import '../styles/WeekendSlider.css'; // Ensure you have the correct CSS file for styling
import hospitality from '../assets/hospitality.png';
import stays from '../assets/stays.png';
import captains from '../assets/captains.png';

const WeekendSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const slidesRef = useRef([]);
  const isMobile = window.innerWidth < 800;

  const updateSlider = () => {
    if (isMobile && trackRef.current && slidesRef.current[0]) {
      const slideWidth = slidesRef.current[0].offsetWidth;
      trackRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      const dots = document.querySelectorAll('.dots span');
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }
  };

  const moveSlide = (n) => {
    const newIndex = (currentIndex + n + 3) % 3;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    updateSlider();
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => updateSlider();
    window.addEventListener('resize', handleResize);
    updateSlider();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Swipe handling
  useEffect(() => {
    let startX = 0;
    let isDragging = false;

    const track = trackRef.current;
    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    };

    const onTouchMove = (e) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        moveSlide(diff < 0 ? 1 : -1);
        isDragging = false;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    if (track) {
      track.addEventListener('touchstart', onTouchStart);
      track.addEventListener('touchmove', onTouchMove);
      track.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      if (track) {
        track.removeEventListener('touchstart', onTouchStart);
        track.removeEventListener('touchmove', onTouchMove);
        track.removeEventListener('touchend', onTouchEnd);
      }
    };
  }, [currentIndex]);

  const cards = [
    {
      img: hospitality,
      alt: 'Top Notch Hospitality',
      text: 'Top Notch Hospitality',
    },
    {
      img: stays,
      alt: 'Beautiful Handpicked Stays',
      text: 'Beautiful Handpicked Stays',
    },
    {
      img: captains,
      alt: 'Fun Team Captains',
      text: 'Fun Team Captains',
    },
  ];

  return (
    <div className="weekend-getaway-slider-wrapper">
      <h2>Weekend Getaways From Delhi</h2>

      <div className="slider-container">
        {isMobile && (
          <button className="arrow prev" onClick={() => moveSlide(-1)}>
            &#10094;
          </button>
        )}

        <div className="slider-track" ref={trackRef}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="weekend-slider-card"
              ref={(el) => (slidesRef.current[idx] = el)}
            >
              <img src={card.img} alt={card.alt} />
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        {isMobile && (
          <button className="arrow next" onClick={() => moveSlide(1)}>
            &#10095;
          </button>
        )}
      </div>

      {isMobile && (
        <div className="dots">
          {cards.map((_, idx) => (
            <span
              key={idx}
              onClick={() => goToSlide(idx)}
              className={idx === currentIndex ? 'active' : ''}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeekendSlider;
