import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/TripRender.css";

// import

const TripRender = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const overviewRef = useRef(null);
  const itineraryRef = useRef(null);
  const inclusionRef = useRef(null);
  const exclusionRef = useRef(null);
  const otherInfoRef = useRef(null);

  const scrollWithOffset = (ref) => {
    const headerOffset = 180; // adjust if header is different height
    const element = ref.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const trip = state?.trip;

  if (!trip) {
    return (
      <div className="trip-error-container">
        <h2>No Trip Details Found!</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="trip-detail-container">
      <img src={trip.image} alt={trip.title} className="trip-main-image" />

      <div className="trip-header">
        <div className="trip-header-left">
          <h2>{trip.title}</h2>
          <div className="trip-info-boxes">
            <div className="trip-info-box">
              <span>📍</span>
              <div>
                <div className="trip-info-label">Pickup & Drop</div>
                <div className="trip-info-value">{trip.route}</div>
              </div>
            </div>
            <div className="trip-info-box">
              <span>🕓</span>
              <div>
                <div className="trip-info-label">Duration</div>
                <div className="trip-info-value">{trip.duration}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="trip-header-right">
          <div className="trip-price-label">Starting from</div>
          <div className="trip-price">{trip.newPrice}/-</div>
          <div className="trip-price-person">per person</div>
          <button className="trip-dates-btn">Dates & Costing</button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="trip-tabs-container">
        <button onClick={() => scrollWithOffset(overviewRef)}>Overview & Highlights</button>
        <button onClick={() => scrollWithOffset(itineraryRef)}>Itinerary</button>
        <button onClick={() => scrollWithOffset(inclusionRef)}>Inclusions</button>
        <button onClick={() => scrollWithOffset(exclusionRef)}>Exclusions</button>
        <button onClick={() => scrollWithOffset(otherInfoRef)}>Other Info</button>
      </div>

      <div className="trip-content-wrapper">
        <div className="trip-overview-container">
          <div className="trip-overview-section">
            <h3 ref={overviewRef}>Overview & Highlights</h3>
            <div className="trip-highlight-box">
              <p>Almaty - Shymbulak Ski Resort - Charyn Canyon - Kolsai Lake - Saty - Kaindy Lake - Almaty</p>
            </div>
            <p>
              This amazing trip includes breathtaking views, exciting adventures,
              and unforgettable experiences.
            </p>
            <button className="trip-read-more-btn">Read More</button>

            <h3 ref={itineraryRef}>Itinerary</h3>
            <ul>
              <li>Day 1: Arrival and city tour</li>
              <li>Day 2: Local sightseeing</li>
              <li>Day 3: Adventure activities</li>
              <li>Day 4: Cultural experience</li>
              <li>Day 5: Leisure day and shopping</li>
              <li>Day 6: Departure</li>
            </ul>

            <h3 ref={inclusionRef}>Inclusions</h3>
            <ul>
              <li>Accommodation in premium hotels</li>
              <li>Breakfast and dinner</li>
              <li>All sightseeing tours</li>
              <li>Entry tickets and guide fees</li>
            </ul>

            <h3 ref={exclusionRef}>Exclusions</h3>
            <ul>
              <li>Personal expenses</li>
              <li>Airfare and Visa fees</li>
              <li>Travel insurance</li>
            </ul>

            <h3 ref={otherInfoRef}>Other Info</h3>
            <p>
              Please carry valid ID proof, travel documents, and check local travel
              advisories before the trip.
            </p>

            <button className="trip-back-btn" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="trip-contact-form">
          <div className="trip-form-header">
            <h4>Wanderlust Calling?</h4>
            <p>Allow Us to Call You Back!</p>
          </div>
          
          <form className="trip-form">
            <div className="trip-form-group">
              <label>Full Name *</label>
              <div className="trip-input-wrapper">
                <span className="trip-input-icon">👤</span>
                <input type="text" placeholder="e.g. John Smith" />
              </div>
            </div>

            <div className="trip-form-group">
              <label>Phone No. *</label>
              <div className="trip-input-wrapper">
                <span className="trip-input-icon">📞</span>
                <input type="tel" placeholder="Enter your 10 digit number" />
              </div>
            </div>

            <div className="trip-form-group">
              <label>Email ID *</label>
              <div className="trip-input-wrapper">
                <span className="trip-input-icon">✉️</span>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>

            <button type="submit" className="trip-submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripRender;