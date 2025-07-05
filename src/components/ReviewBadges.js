// src/components/ReviewBadges.js
import React from 'react';
import '../styles/ReviewBadges.css';
import google_icon from '../assets/google.webp';
import tripadvisor_icon from '../assets/tripadvisor.webp';
import facebook_icon from '../assets/facebook.webp';

const reviews = [
  {
    platform: 'Google',
    rating: '4.9',
    count: '13150',
    icon: google_icon
  },
  {
    platform: 'Tripadvisor',
    rating: '5.0',
    count: '3690',
    icon: tripadvisor_icon
  },
  {
    platform: 'Facebook',
    rating: '4.9',
    count: '1031',
    icon: facebook_icon
  },
];

const ReviewBadges = () => {
  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div className="review-section" key={index}>
          <img src={review.icon} alt={`${review.platform} Icon`} />
          <div className="review-info">
            <div className="rating-line">
              <span className="star-icon">⭐</span>
              <span className="rating">{review.rating}</span>
            </div>
            <div className="review-count">({review.count} reviews)</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewBadges;
