// import React, { useRef, useState, useEffect } from "react";
// import "../styles/JourneyCarousel.css"; // Ensure you have the correct path to your CSS file

// const images = [
//   {
//     src: "https://images.wanderon.in/new-homepage-data/Gallery/vietnam%202",
//     alt: "Vietnam",
//     location: "Vietnam",
//   },
//   {
//     src: "https://images.wanderon.in/new-homepage-data/Gallery/dubai%20re%2001?updatedAt=1711452484035",
//     alt: "Dubai",
//     location: "Dubai",
//   },
//   {
//     src: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204",
//     alt: "Bhutan",
//     location: "Bhutan",
//   },
//   {
//     src: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204",
//     alt: "Kerala",
//     location: "Kerala",
//   },
// ];

// const JourneyCarousel = () => {
//   const trackRef = useRef(null);
//   const [index, setIndex] = useState(0);
//   const [cardWidth, setCardWidth] = useState(0);

//   useEffect(() => {
//     const firstCard = trackRef.current?.querySelector(".card");
//     if (firstCard) {
//       setCardWidth(firstCard.offsetWidth + 25); // 25px = gap
//     }
//   }, []);

//   const moveSlide = (direction) => {
//     const newIndex = Math.max(0, Math.min(index + direction, images.length - 1));
//     setIndex(newIndex);
//     trackRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
//   };

//   return (
//     <div className="journey-carousel-wrapper">
      
//       <h2>JOURNEY IN FRAMES</h2>
//       <p>Pictures Perfect Moments</p>

//       <div className="carousel">
//         <div className="arrow left" onClick={() => moveSlide(-1)}>&#10094;</div>
//         <div className="carousel-track" ref={trackRef}>
//           {images.map((img, i) => (
//             <div className="card" key={i}>
//               <img src={img.src} alt={img.alt} />
//               <div className="location">{img.location}</div>
//             </div>
//           ))}
//         </div>
//         <div className="arrow right" onClick={() => moveSlide(1)}>&#10095;</div>
//       </div>
//     </div>
//   );
// };

// export default JourneyCarousel;
import React, { useRef, useState, useEffect } from "react";
import "../styles/JourneyCarousel.css"; // Ensure you have the correct path to your CSS file

const images = [
  {
    src: "https://images.wanderon.in/new-homepage-data/Gallery/vietnam%202",
    alt: "Vietnam",
    location: "Vietnam",
  },
  {
    src: "https://images.wanderon.in/new-homepage-data/Gallery/dubai%20re%2001?updatedAt=1711452484035",
    alt: "Dubai",
    location: "Dubai",
  },
  {
    src: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204",
    alt: "Bhutan",
    location: "Bhutan",
  },
  {
    src: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204",
    alt: "Kerala",
    location: "Kerala",
  },
  {
    src: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204",
    alt: "Bhutan",
    location: "Bhutan",
  },
  {
    src: "https://images.wanderon.in/new-homepage-data/Gallery/bhutan%204",
    alt: "Kerala",
    location: "Kerala",
  },
];

const JourneyCarousel = () => {
  const scrollWrapperRef = useRef(null);
  const cardRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + 25); // 25px gap
    }
  }, []);

  const moveSlide = (direction) => {
    const newIndex = Math.max(0, Math.min(index + direction, images.length - 1));
    setIndex(newIndex);
    const offset = newIndex * cardWidth;

    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="journey-carousel-wrapper">
      <h2>JOURNEY IN FRAMES</h2>
      <p>Pictures Perfect Moments</p>

      <div className="carousel">
        <div className="arrow left" onClick={() => moveSlide(-1)}>&#10094;</div>

        <div className="carousel-scroll-wrapper" ref={scrollWrapperRef}>
          <div className="carousel-track">
            {images.map((img, i) => (
              <div className="card" key={i} ref={i === 0 ? cardRef : null}>
                <img src={img.src} alt={img.alt} />
                <div className="location">{img.location}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="arrow right" onClick={() => moveSlide(1)}>&#10095;</div>
      </div>
    </div>
  );
};

export default JourneyCarousel;
