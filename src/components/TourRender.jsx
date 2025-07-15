// src/components/TourRender.jsx
import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toursData } from "../toursData.jsx";
import "../styles/TourRender.css";
import "../styles/TourInfo.css";
import formImage from "../assets/form-svg.svg";
import BestSellerPackages from "../components/BestSellerPackages.jsx";
import AllPackages from "../components/AllPackages.jsx";
import TourDynamicFQA from "../components/TourDynamicFQA.jsx";
import DynamicTravelingGuidelines from "../components/DynamicTravelingGuidelines.jsx";
import ConnectWithBanner from "../components/ConnectWithBanner.jsx";

const TourRender = () => {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [currentPlaceIndex, setCurrentPlaceIndex] = useState(0);
  const [currentCulinaryIndex, setCurrentCulinaryIndex] = useState(0);
  const [currentShoppingIndex, setCurrentShoppingIndex] = useState(0);

  const tour = useMemo(() => {
    return toursData.flatMap((category) => category.tours).find((item) => item.slug === slug);
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted!");
    setIsModalOpen(false);
  };

  const toggleReadMore = () => setShowMore((prev) => !prev);

  const handlePrev = (indexSetter, data) => {
    indexSetter((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = (indexSetter, data) => {
    indexSetter((prev) => (prev === data.length - 1 ? 0 : prev + 1));
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

  const heading = `About ${tour.name} Tour`;
  const initialText = tour.aboutTour;
  const extraText = `Book your trip to ${tour.city} with exciting deals, personalized plans, and local experiences.\nGet expert help planning your adventure today!`;

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

      {/* About Section */}
      <div className="about-international-tours-wrapper">
        <div className="text-container">
          <h2><span>{heading}</span></h2>
          <p>{initialText}</p>
          <span className={`read-more-toggle ${showMore ? "right-align" : ""}`} onClick={toggleReadMore}>
            {showMore ? "Read Less" : "Read More"}
          </span>
          {showMore && (
            <div className="extra-content show">
              {extraText.split("\n").map((para, idx) => (
                <p key={idx}>{para.trim()}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      <BestSellerPackages />
      <AllPackages />

      {/* Must-Do Activities */}
      {tour.mustDoActivities?.length > 0 && (
        <section className="tour-render-activities-section align-left">
          <h2>Must-Do Activities for an Unforgettable {tour.city} Experience</h2>
          <p>Explore thrilling activities and adventures in {tour.city}.</p>
          <div className="tour-render-carousel">
            <button className="tour-render-carousel-arrow left" onClick={() => handlePrev(setCurrentActivityIndex, tour.mustDoActivities)}>&lt;</button>
            <div className="tour-render-carousel-inner">
              {[tour.mustDoActivities[currentActivityIndex]].map((activity, idx) => (
                <div key={idx} className="tour-render-activity-card">
                  <div style={{ position: "relative" }}>
                    <img src={activity.image} alt={activity.activityName} />
                    <div className="tour-render-activity-overlay">
                      {activity.city} <br />
                      {activity.activityName} <br />
                      {activity.timing}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="tour-render-carousel-arrow right" onClick={() => handleNext(setCurrentActivityIndex, tour.mustDoActivities)}>&gt;</button>
          </div>
        </section>
      )}

      {/* Must-Visit Places */}
      {tour.mustVisitPlaces?.length > 0 && (
        <section className="tour-render-places-section align-left">
          <h2 className="tour-render-section-title">Must-Visit Places in {tour.city}</h2>
          <p>Discover iconic spots and hidden gems in {tour.city}.</p>
          <div className="tour-render-carousel">
            <button className="tour-render-carousel-arrow left" onClick={() => handlePrev(setCurrentPlaceIndex, tour.mustVisitPlaces)}>&lt;</button>
            <div className="tour-render-carousel-inner">
              {[tour.mustVisitPlaces[currentPlaceIndex]].map((place, idx) => (
                <div key={idx} className="tour-render-place-card">
                  <div style={{ position: "relative" }}>
                    <img src={place.image} alt={place.placeName} />
                    <div className="tour-render-activity-overlay">
                      {place.city} <br />
                      {place.placeName}
                    </div>
                  </div>
                  <div className="tour-render-card-content">
                    <p>{place.aboutPlace}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="tour-render-carousel-arrow right" onClick={() => handleNext(setCurrentPlaceIndex, tour.mustVisitPlaces)}>&gt;</button>
          </div>
        </section>
      )}

      {/* Must-Try Culinary */}
      {tour.mustTryCulinary?.length > 0 && (
        <section className="tour-render-culinary-section align-left">
          <h2 className="tour-render-section-title">Must-Try Culinary in {tour.city}</h2>
          <div className="tour-render-carousel">
            <button className="tour-render-carousel-arrow left" onClick={() => handlePrev(setCurrentCulinaryIndex, tour.mustTryCulinary)}>&lt;</button>
            <div className="tour-render-carousel-inner">
              {[tour.mustTryCulinary[currentCulinaryIndex]].map((food, idx) => (
                <div key={idx} className="tour-render-culinary-card">
                  <div style={{ position: "relative" }}>
                    <img src={food.image} alt={food.culinaryName} />
                    <div className="tour-render-activity-overlay">
                      ₹{food.price} <br />
                      {food.city} <br />
                      {food.culinaryName}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="tour-render-carousel-arrow right" onClick={() => handleNext(setCurrentCulinaryIndex, tour.mustTryCulinary)}>&gt;</button>
          </div>
        </section>
      )}

      {/* Best Shopping Destinations */}
      {tour.bestShoppingDestinations?.length > 0 && (
        <section className="tour-render-shopping-section align-left">
          <h2 className="tour-render-section-title">Best Shopping Destinations in {tour.city}</h2>
          <div className="tour-render-carousel">
            <button className="tour-render-carousel-arrow left" onClick={() => handlePrev(setCurrentShoppingIndex, tour.bestShoppingDestinations)}>&lt;</button>
            <div className="tour-render-carousel-inner">
              {[tour.bestShoppingDestinations[currentShoppingIndex]].map((shop, idx) => (
                <div key={idx} className="tour-render-shopping-card">
                  <div style={{ position: "relative" }}>
                    <img src={shop.image} alt={shop.placeName} />
                    <div className="tour-render-activity-overlay">
                      {shop.city} <br />
                      {shop.destinationName} <br />
                      {shop.placeName}
                    </div>
                  </div>
                  <div className="tour-render-card-content">
                    <p>Categories: {shop.shoppingCategories.join(", ")}</p>
                    <p>Timing: {shop.timing}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="tour-render-carousel-arrow right" onClick={() => handleNext(setCurrentShoppingIndex, tour.bestShoppingDestinations)}>&gt;</button>
          </div>
        </section>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={(e) => e.target.classList.contains("modal") && setIsModalOpen(false)}>
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
                <input type="tel" placeholder="Enter your 10 digit number" pattern="[0-9]{10}" required />
                <label>Message</label>
                <textarea placeholder="Write your message"></textarea>
                <button className="submit-btn" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      {tour.faq?.length > 0 && <TourDynamicFQA faqData={tour.faq} />}
      <DynamicTravelingGuidelines guidelines={tour.guidelines} city={tour.city} />
    </div>
  );
};

export default TourRender;
