import React from "react";
import { useLocation } from "react-router-dom";
import europeCard from "../assets/europe_card.webp"; // Adjust path as needed
import indiaCard from "../assets/ladakh.webp"; // Adjust path as needed
import "../styles/BestOfPlaces.css";   // Paste your CSS here

const internationalDestinations = [
  {
    title: "Best of Europe",
    id: "europe",
    trips: [
      {
        price: "₹1,69,990/-",
        img: europeCard,
        title: "Classic European Discovery",
        duration: "10N/11D",
        route: "Paris - Rome - Amsterdam",
        dates: "5 Dec, 15 Dec",
      },
      {
        price: "₹1,45,000/-",
        img: europeCard,
        title: "Romantic Alps Escape",
        duration: "8N/9D",
        route: "Zurich - Interlaken",
        dates: "12 Jan",
      },
    ],
  },
  {
    title: "Best of Bali",
    id: "bali",
    trips: [
      {
        price: "₹89,000/-",
        img: europeCard,
        title: "Bali Beach Bliss",
        duration: "6N/7D",
        route: "Seminyak - Ubud - Nusa Penida",
        dates: "10 Oct, 18 Oct",
      },
      {
        price: "₹95,000/-",
        img: europeCard,
        title: "Cultural Retreat",
        duration: "5N/6D",
        route: "Ubud - Tanah Lot",
        dates: "5 Nov",
      },
    ],
  },
  {
    title: "Best of Dubai",
    id: "dubai",
    trips: [
      {
        price: "₹85,000/-",
        img: europeCard,
        title: "Desert Luxury & Skyscrapers",
        duration: "4N/5D",
        route: "Dubai - Abu Dhabi",
        dates: "8 Sep, 22 Sep",
      },
      {
        price: "₹90,000/-",
        img: europeCard,
        title: "Gold Souks & Marina",
        duration: "5N/6D",
        route: "Dubai City",
        dates: "12 Oct",
      },
    ],
  },
];

const indiaDestinations = [
  {
    title: "Best of Himachal",
    id: "himachal",
    trips: [
      {
        price: "₹24,999/-",
        img: indiaCard,
        title: "Manali and Kasol Escape",
        duration: "5N/6D",
        route: "Delhi - Manali - Kasol",
        dates: "15 Aug, 25 Aug",
      },
      {
        price: "₹19,000/-",
        img: indiaCard,
        title: "Shimla Snow Retreat",
        duration: "4N/5D",
        route: "Delhi - Shimla",
        dates: "5 Sep, 10 Sep",
      },{
        price: "₹24,999/-",
        img: indiaCard,
        title: "Manali and Kasol Escape",
        duration: "5N/6D",
        route: "Delhi - Manali - Kasol",
        dates: "15 Aug, 25 Aug",
      },
      {
        price: "₹19,000/-",
        img: indiaCard,
        title: "Shimla Snow Retreat",
        duration: "4N/5D",
        route: "Delhi - Shimla",
        dates: "5 Sep, 10 Sep",
      },
      {
        price: "₹19,000/-",
        img: indiaCard,
        title: "Shimla Snow Retreat",
        duration: "4N/5D",
        route: "Delhi - Shimla",
        dates: "5 Sep, 10 Sep",
      },
    ],
  },
  {
    title: "Best of Kerala",
    id: "kerala",
    trips: [
      {
        price: "₹22,000/-",
        img: indiaCard,
        title: "Backwater Serenity",
        duration: "6N/7D",
        route: "Cochin - Alleppey - Munnar",
        dates: "1 Oct, 10 Oct",
      },
      
      {
        price: "₹18,500/-",
        img: indiaCard,
        title: "Cultural & Spice Trails",
        duration: "5N/6D",
        route: "Thekkady - Munnar",
        dates: "8 Nov, 18 Nov",
      },
      {
        price: "₹22,000/-",
        img: indiaCard,
        title: "Backwater Serenity",
        duration: "6N/7D",
        route: "Cochin - Alleppey - Munnar",
        dates: "1 Oct, 10 Oct",
      },
      {
        price: "₹22,000/-",
        img: indiaCard,
        title: "Backwater Serenity",
        duration: "6N/7D",
        route: "Cochin - Alleppey - Munnar",
        dates: "1 Oct, 10 Oct",
      },
      {
        price: "₹18,500/-",
        img: indiaCard,
        title: "Cultural & Spice Trails",
        duration: "5N/6D",
        route: "Thekkady - Munnar",
        dates: "8 Nov, 18 Nov",
      },
    ],
  },
];

const BestOfPlaces = () => {
  const location = useLocation();
  const isIndiaTrips = location.pathname.includes("/india-trips");
  const destinations = isIndiaTrips ? indiaDestinations : internationalDestinations;

  const scrollCarousel = (id, direction) => {
    const wrapper = document.getElementById(`wrapper-${id}`);
    const scrollAmount = 320;
    if (wrapper) {
      wrapper.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div>
      {destinations.map((dest) => (
        <div key={dest.id} className="International-Best-Of-section-container">
          <h2>{dest.title}</h2>
          <div className="International-Best-Of-carousel-layout">
            <button
              className="International-Best-Of-arrow"
              onClick={() => scrollCarousel(dest.id, -1)}
            >
              &#8249;
            </button>
            <div
              className="International-Best-Of-carousel-wrapper"
              id={`wrapper-${dest.id}`}
            >
              <div
                className="International-Best-Of-card-row"
                id={`row-${dest.id}`}
              >
                {dest.trips.map((trip, index) => (
                  <div
                    key={index}
                    className="International-Best-Of-trip-card"
                    data-price={trip.price}
                  >
                    <img src={trip.img} alt={trip.title} />
                    <div className="International-Best-Of-trip-details">
                      <h3>{trip.title}</h3>
                      <p>{trip.duration}</p>
                      <p>{trip.route}</p>
                      <p>{trip.dates}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="International-Best-Of-arrow"
              onClick={() => scrollCarousel(dest.id, 1)}
            >
              &#8250;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestOfPlaces;
