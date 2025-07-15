import React, { useEffect, useRef, useState } from 'react';
import '../styles/CorporateTestimonialCarousel.css'; // Adjust path as needed

const testimonials = [
  {
    image: 'https://images.wanderon.in/mice-images-collection/Reviews/review%201?updatedAt=1701845083666',
    logo: 'https://images.wanderon.in/mice-images-collection/our-clients/tvs1?updatedAt=1701068195949',
    name: 'Varun Vairavan',
    role: 'CTO | HighLevel',
    quote: 'Addressing the challenge of maintaining a cohesive remote culture is no easy feat...',
  },
  {
    image: 'https://images.wanderon.in/mice-images-collection/Reviews/review%201?updatedAt=1701845083666',
    logo: 'https://images.wanderon.in/mice-images-collection/our-clients/tvs1?updatedAt=1701068195949',
    name: 'Varun Vairavan',
    role: 'CTO | HighLevel',
    quote: 'Addressing the challenge of maintaining a cohesive remote culture is no easy feat...',
  },
  {
    image: 'https://images.wanderon.in/mice-images-collection/Reviews/review%201?updatedAt=1701845083666',
    logo: 'https://images.wanderon.in/mice-images-collection/our-clients/tvs1?updatedAt=1701068195949',
    name: 'Varun Vairavan',
    role: 'CTO | HighLevel',
    quote: 'Addressing the challenge of maintaining a cohesive remote culture is no easy feat...',
  },
  {
    image: 'https://images.wanderon.in/mice-images-collection/Reviews/review%201?updatedAt=1701845083666',
    logo: 'https://images.wanderon.in/mice-images-collection/our-clients/tvs1?updatedAt=1701068195949',
    name: 'Varun Vairavan',
    role: 'CTO | HighLevel',
    quote: 'Addressing the challenge of maintaining a cohesive remote culture is no easy feat...',
  },
  {
    image: 'https://images.wanderon.in/mice-images-collection/Reviews/review%201?updatedAt=1701845083666',
    logo: 'https://images.wanderon.in/mice-images-collection/our-clients/tvs1?updatedAt=1701068195949',
    name: 'Varun Vairavan',
    role: 'CTO | HighLevel',
    quote: 'Addressing the challenge of maintaining a cohesive remote culture is no easy feat...',
  },
  {
    image: 'https://images.wanderon.in/mice-images-collection/Reviews/review%201?updatedAt=1701845083666',
    logo: 'https://images.wanderon.in/mice-images-collection/our-clients/tvs1?updatedAt=1701068195949',
    name: 'Varun Vairavan',
    role: 'CTO | HighLevel',
    quote: 'Addressing the challenge of maintaining a cohesive remote culture is no easy feat...',
  },
  // Add more testimonial objects as needed
];

const CorporateTestimonialCarousel = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);

  const getCardsPerView = () => {
    const width = window.innerWidth;
    if (width >= 993) return 3;
    if (width >= 601) return 2;
    return 1;
  };

  const updateCarousel = () => {
    const perView = getCardsPerView();
    setCardsPerView(perView);
    setTotalSlides(Math.ceil(testimonials.length / perView));
    setCurrentSlide(0);
    goToSlide(0, perView);
  };

  const goToSlide = (index, perView = cardsPerView) => {
    if (containerRef.current && trackRef.current) {
      const scrollX = containerRef.current.offsetWidth * index;
      trackRef.current.scrollTo({ left: scrollX, behavior: 'smooth' });
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    return () => window.removeEventListener('resize', updateCarousel);
  }, []);

  return (
    <div className="corporate-carousel-wrapper">
      <div className="corporate-carousel-container" ref={containerRef}>
        <div className="corporate-carousel-track" ref={trackRef}>
          {testimonials.map((item, index) => (
            <div className="corporate-carousel-card" key={index}>
              <img src={item.image} alt="testimonial" className="corporate-carousel-image" />
              <div className="corporate-carousel-content">
                <img src={item.logo} alt="logo" className="corporate-carousel-logo" />
                <div className="corporate-carousel-name">{item.name}</div>
                <div className="corporate-carousel-role">{item.role}</div>
                <div className="corporate-carousel-quote">{item.quote}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button
            className="carousel-btn"
            onClick={() => currentSlide > 0 && goToSlide(currentSlide - 1)}
          >
            &#8592;
          </button>
          <div className="corporate-carousel-dots">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span
                key={i}
                className={i === currentSlide ? 'active' : ''}
                onClick={() => goToSlide(i)}
              ></span>
            ))}
          </div>
          <button
            className="carousel-btn"
            onClick={() => currentSlide < totalSlides - 1 && goToSlide(currentSlide + 1)}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorporateTestimonialCarousel;
