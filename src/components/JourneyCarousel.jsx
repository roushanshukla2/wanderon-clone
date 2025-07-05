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
];

const JourneyCarousel = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const firstCard = trackRef.current?.querySelector(".card");
    if (firstCard) {
      setCardWidth(firstCard.offsetWidth + 25); // 25px = gap
    }
  }, []);

  const moveSlide = (direction) => {
    const newIndex = Math.max(0, Math.min(index + direction, images.length - 1));
    setIndex(newIndex);
    trackRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
  };

  return (
    <div className="journey-carousel-wrapper">
      
      <h2>JOURNEY IN FRAMES</h2>
      <p>Pictures Perfect Moments</p>

      <div className="carousel">
        <div className="arrow left" onClick={() => moveSlide(-1)}>&#10094;</div>
        <div className="carousel-track" ref={trackRef}>
          {images.map((img, i) => (
            <div className="card" key={i}>
              <img src={img.src} alt={img.alt} />
              <div className="location">{img.location}</div>
            </div>
          ))}
        </div>
        <div className="arrow right" onClick={() => moveSlide(1)}>&#10095;</div>
      </div>
    </div>
  );
};

export default JourneyCarousel;
// import React, { useState, useEffect } from "react";
// import { useSwipeable } from "react-swipeable";
// import "../styles/JourneyCarousel.css";

// const places = [
//   { name: "Dubai", image: "/image.png" },
//   { name: "Bhutan", image: "/image1.png" },
//   { name: "Kerala", image: "/image.png" },
//   { name: "Meghalaya", image: "/image1.png" },
//   { name: "Manali", image: "/image.png" },
//   { name: "Goa", image: "/image1.png" },
// ];

// const JourneyCarousel = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [cardsToShow, setCardsToShow] = useState(4);

//   // Adjust number of visible cards based on screen width
//   useEffect(() => {
//     const updateCards = () => {
//       const width = window.innerWidth;
//       if (width < 600) setCardsToShow(1);
//       else if (width < 900) setCardsToShow(2);
//       else if (width < 1200) setCardsToShow(3);
//       else setCardsToShow(4);
//     };

//     updateCards();
//     window.addEventListener("resize", updateCards);
//     return () => window.removeEventListener("resize", updateCards);
//   }, []);

//   const handleNext = () => {
//     if (startIndex < places.length - cardsToShow) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: handleNext,
//     onSwipedRight: handlePrev,
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//   });

//   return (
//     <div className="journey-wrapper">
//       <h2 className="title">JOURNEY IN FRAMES</h2>
//       <p className="subtitle">Pictures Perfect Moments</p>

//       <div className="carousel-container">
//         <button
//           className="nav-btn left"
//           onClick={handlePrev}
//           disabled={startIndex === 0}
//           style={{ opacity: startIndex === 0 ? 0.5 : 1 }}
//           aria-label="Previous"
//         >
//           &#10094;
//         </button>

//         <div className="carousel" {...swipeHandlers}>
//           {places.slice(startIndex, startIndex + cardsToShow).map((place, index) => {
//             let className = "card";
//             if (cardsToShow >= 3) {
//               if (index === 0) className += " far-left";
//               else if (index === cardsToShow - 1) className += " far-right";
//               else className += " mid";
//             }

//             return (
//               <div key={index} className={className}>
//                 <img src={place.image} alt={place.name} />
//                 <div className="label">
//                   <span role="img" aria-label="location">📍</span> {place.name}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <button
//           className="nav-btn right"
//           onClick={handleNext}
//           disabled={startIndex >= places.length - cardsToShow}
//           style={{ opacity: startIndex >= places.length - cardsToShow ? 0.5 : 1 }}
//           aria-label="Next"
//         >
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JourneyCarousel;
