import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toursData } from "../toursData.jsx";
import TourRenderActivitiesSection from "./TourRenderActivitiesSection.jsx";
import TourInfo from "./TourInfo.jsx";
import "../styles/TourRender.css";
import formImage from "../assets/form-svg.svg";

const TourRender = () => {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tour = useMemo(() => {
    return toursData.flatMap((category) => category.tours).find((item) => item.slug === slug);
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
    setIsModalOpen(false);
  };

  if (!tour) {
    return (
      <div className="tour-render-container">
        <div className="tour-render-not-found">
          <h2>Tour Not Found</h2>
          <p>The tour you're looking for doesn't exist or may have been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-render-container">
      {/* Hero Section */}
      <div className="tour-render-hero-section">
        <div className="tour-render-hero-overlay"></div>
        <div className="tour-render-hero-content">
          <h1 className="tour-render-tour-title">Buy {tour.name} Tour Packages</h1>
          <h2 className="tour-render-tour-subtitle">Up to 25% Off Now! | 2025</h2>
          <p className="tour-render-tour-tagline">Where Natural Beauty Meets Adventure</p>
          <p className="tour-render-tour-price">
            <span className="tour-render-price-label">Starting Price:</span> {tour.price} Per Person
          </p>
          <button className="tour-render-cta-button" onClick={() => setIsModalOpen(true)}>
            Request a Callback
          </button>
        </div>

        {tour.image && (
          <div className="tour-render-hero-image">
            <img src={tour.image} alt={tour.name} />
          </div>
        )}
      </div>

      {/* About Tour Section with Read More */}
      <div className="about-international-tours-wrapper">
        <div className="text-container">
          <TourInfo />
        </div>
      </div>

      {/* Must-Do Activities Section */}
      {tour.mustDoActivities?.length > 0 && (
        <TourRenderActivitiesSection
          title={`Must-Do Activities for an Unforgettable ${tour.city} Experience`}
          subtitle={`Explore thrilling activities and adventures in ${tour.city}.`}
          activities={tour.mustDoActivities}
        />
      )}

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal" onClick={(e) => e.target.classList.contains('modal') && setIsModalOpen(false)}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>

            <div className="modal-left">
              <img src={formImage} alt="Free Consultation" />
              <h2>Where do you want to go next?</h2>
              <p>Make your move, fill out your details now!</p>
            </div>

            <div className="modal-right">
              <form onSubmit={handleSubmit}>
                <label>Your Name *</label>
                <input type="text" placeholder="Enter your name" required />

                <label>Email Id *</label>
                <input type="email" placeholder="Enter your Email Id" required />

                <label>Phone *</label>
                <input
                  type="tel"
                  placeholder="Enter your 10 digit number"
                  pattern="[0-9]{10}"
                  required
                />

                <label>Message</label>
                <textarea placeholder="Write your message"></textarea>

                <button className="submit-btn" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourRender;
