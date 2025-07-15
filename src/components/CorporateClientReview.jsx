import React, { useState } from "react";
import "../styles/CorporateClientReview.css"; // Adjust path as needed

const CorporateClientReview = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <>
      <div className="corporate-static-banner-wrapper">
        <div className="corporate-static-banner">
          <h2>Your needs are one-of-a-kind!</h2>
          <p>Our experts are ready to craft a custom package.</p>
          <button className="contact-me-now">Contact Me Now</button>
        </div>
      </div>

      <div className="corporate-clients-review-container">
        <h1>
          Clients We've <strong>WoWed</strong>
        </h1>
      </div>

      {[1, 2, 3, 4].map((_, index) => (
        <div className="corporate-parent-container" key={index}>
          <div className="corporate-container">
            <div className="corporate-container-left">
              <img src="your-logo.png" alt="logo" />
              <h2>HighLevel</h2>
              <p>
                A white-labeled marketing app that empowers entrepreneurs with
                powerful tools for marketing, sales, and automation.
              </p>
              <div className="corporate-button-container">
                <div className="corporate-location-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path
                      d="M12 12C11.337 12 10.7011 11.7366 10.2322 11.2678C9.76339 10.7989 9.5 10.163 9.5 9.5C9.5 8.83696 9.76339 8.20107 10.2322 7.73223C10.7011 7.26339 11.337 7 12 7C12.663 7 13.2989 7.26339 13.7678 7.73223C14.2366 8.20107 14.5 8.83696 14.5 9.5C14.5 9.8283 14.4353 10.1534 14.3097 10.4567C14.1841 10.76 13.9999 11.0356 13.7678 11.2678C13.5356 11.4999 13.26 11.6841 12.9567 11.8097C12.6534 11.9353 12.3283 12 12 12ZM12 2.5C10.1435 2.5 8.36301 3.2375 7.05025 4.55025C5.7375 5.86301 5 7.64348 5 9.5C5 14.75 12 22.5 12 22.5C12 22.5 19 14.75 19 9.5C19 7.64348 18.2625 5.86301 16.9497 4.55025C15.637 3.2375 13.8565 2.5 12 2.5Z"
                      fill="white"
                    />
                  </svg>
                  <div>
                    <h4>Location</h4>
                    <p>Japan</p>
                  </div>
                </div>

                <div className="corporate-visitor-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25">
                    <path
                      d="M16 17.5V19.5H2V17.5C2 17.5 2 13.5 9 13.5C16 13.5 16 17.5 16 17.5ZM12.5 8C12.5 7.30782 12.2947 6.63113 11.9101 6.05556C11.5256 5.47998 10.9789 5.03138 10.3394 4.76647C9.69985 4.50157 8.99612 4.43226 8.31718 4.5673C7.63825 4.70235 7.01461 5.0357 6.52513 5.52518C6.03564 6.01466 5.7023 6.6383 5.56725 7.31724C5.4322 7.99617 5.50152 8.6999 5.76642 9.33944C6.03133 9.97899 6.47993 10.5256 7.0555 10.9102C7.63108 11.2948 8.30777 11.5 9 11.5C9.92826 11.5 10.8185 11.1313 11.4749 10.4749C12.1313 9.81855 12.5 8.92831 12.5 8ZM15.94 13.5C16.5547 13.9758 17.0578 14.5805 17.4137 15.2716C17.7696 15.9626 17.9697 16.7233 18 17.5V19.5H22V17.5C22 17.5 22 13.8701 15.94 13.5ZM15 4.5C14.3117 4.49622 13.6385 4.70201 13.07 5.09005C13.6774 5.93879 14.0041 6.95634 14.0041 8C14.0041 9.04377 13.6774 10.0613 13.07 10.9101C13.6385 11.2981 14.3117 11.5039 15 11.5C15.9283 11.5 16.8185 11.1313 17.4749 10.4749C18.1313 9.81855 18.5 8.92831 18.5 8C18.5 7.07179 18.1313 6.18156 17.4749 5.52518C16.8185 4.8688 15.9283 4.5 15 4.5Z"
                      fill="white"
                    />
                  </svg>
                  <div>
                    <h4>No. of People</h4>
                    <p>200+ Peoples</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="corporate-container-right">
              <iframe
                src="https://www.youtube.com/embed/Upm4eXaDeS8?si=r1eDv_N7fL28Rm5Z"
                title="Corporate Tour Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="corporate-overlaping-container">
            <h1>Corporate Tour: High Level</h1>
            <h2>High Level's Unforgettable Journey To Japan</h2>
            <p className="corporate-overlaping-date">July 2023</p>
            <p className="corporate-overlaping-content">
              In a world where distances are measured in clicks and screens, the
              power of a face-to-face connection is immeasurable. High Level, a
              global company with employees working remotely across the globe,
              understood this profound truth.
              {!showMore && <span id="dots">...</span>}
              {showMore && (
                <span id="more">
                  {" "}
                  And so, they turned to WanderOn, the prominent name in corporate
                  travel, to weave a fabulous saga of unity, growth, and regeneration.
                  WanderOn embarked on a tremendous mission: bringing together nearly
                  200 High Level employees from every corner of the globe, separated
                  by time zones, languages, and cultures in a land where tradition
                  meets innovation—Japan.
                </span>
              )}
            </p>
            <button
              id="toggleBtn"
              className="corporate-overlaping-button"
              onClick={toggleContent}
            >
              {showMore ? "Read Less..." : "Read More..."}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CorporateClientReview;
