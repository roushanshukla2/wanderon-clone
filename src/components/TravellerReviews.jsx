// TravellerReviews.jsx

import React from "react";
import "../styles/TravellerReviews.css"; // Move your existing CSS here
import archanaImage from '../assets/archana.webp'; 

const reviewsData = [
  {
    name: "John Doe",
    rating: "★★★★★",
    date: "24 May 2024",
    image: archanaImage,
    text: "Thank you Team Wanderon for the amazing Ladakh experience. Right from the point of making the bookings...",
    link:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUN4dlpfT1JnEAE!2m1!1s0x0:0x56b3e3ef002edbc2!3m1!1s2@1:CIHM0ogKEICAgICxvZ_ORg%7CCgsIyZa3owYQ2O_fVw%7C?hl=en-US&entry=tts&shorturl=1",
  },
  // Add more reviews as needed...
];

const TravellerReviews = () => {
  return (
    <div className="travellers-review-wrapper">
      <h2>Hear from Travellers like you</h2>
      <div className="reviews-grid">
        {reviewsData.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="traveller-image">
              <img src={review.image} alt={`${review.name}'s profile`} />
            </div>
            <div className="traveller-review-container">
              <div className="title-container">
                <h3>{review.name}</h3>
                <h3>{review.rating}</h3>
              </div>
              <div className="dateOfReview">{review.date}</div>
              <div className="review-text">
                <p><strong>“</strong>{review.text}</p>
                <button className="continue-reading">
                  <a
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Continue Reading
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravellerReviews;
