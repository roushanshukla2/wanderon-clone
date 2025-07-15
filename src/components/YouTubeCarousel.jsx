import React, { useEffect, useRef, useState } from "react";
import "../styles/YouTubeCarousel.css"; 

const videos = [
  "https://www.youtube.com/embed/XXO0mdcyD6w",
  "https://www.youtube.com/embed/BagUzmZTJ58?si=ENV8kqZsHz0JCkvk",
  "https://www.youtube.com/embed/dQw4w9WgXcQ"
];

const YouTubeCarousel = () => {
  const containerRef = useRef(null);
  const [titles, setTitles] = useState(Array(videos.length).fill("Loading..."));
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollAmount = containerRef.current?.offsetWidth || 600;

  const scrollCarousel = (direction) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const updateDots = () => {
    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const handler = () => {
      clearTimeout(el._scrollTimeout);
      el._scrollTimeout = setTimeout(updateDots, 100);
    };
    el.addEventListener("scroll", handler);
    return () => el.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const fetchTitles = async () => {
      const fetchedTitles = await Promise.all(
        videos.map(async (src) => {
          const match = src.match(/embed\/([a-zA-Z0-9_-]{11})/);
          if (match && match[1]) {
            const videoId = match[1];
            const apiUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
            try {
              const response = await fetch(apiUrl);
              const data = await response.json();
              return data.title;
            } catch {
              return "Unable to fetch title";
            }
          }
          return "Invalid video ID";
        })
      );
      setTitles(fetchedTitles);
    };

    fetchTitles();
  }, []);

  return (
    <div className="carousel-wrapper-container">
      <div className="carousel-wrapper">
        <button className="nav-arrow left" onClick={() => scrollCarousel(-1)}>❮</button>

        <div className="carousel-container" ref={containerRef}>
          {videos.map((src, index) => (
            <div key={index} className="video-card">
              <iframe src={src} allowFullScreen title={`video-${index}`} />
              <div className="video-title">
                <img src="wanderon-logo.png" alt="logo" />
                <span>{titles[index]}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow right" onClick={() => scrollCarousel(1)}>❯</button>

        <div className="dots">
          {videos.map((_, idx) => (
            <div key={idx} className={`dot ${activeIndex === idx ? "active" : ""}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouTubeCarousel;
