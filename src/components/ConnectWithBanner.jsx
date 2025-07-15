import React, { useState } from 'react';
import '../styles/ConnectWithBanner.css';
import formImage from '../assets/form-svg.svg';

const ConnectWithBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
    closeModal();
  };

  return (
    <>
      {/* BACKGROUND + CTA BANNER */}
      <div className="connect-banner-wrapper">
        <div className="connect-banner">
          <h2>Didn’t find what you were looking for?</h2>
          <p>Connect with our experts! Get the best itineraries and offers!</p>
          <button onClick={openModal}>Connect Now</button>
        </div>
      </div>

      {/* POPUP MODAL */}
      {isOpen && (
        <div
          className="modal"
          onClick={(e) => {
            if (e.target.classList.contains('modal')) closeModal();
          }}
        >
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>&times;</button>

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
    </>
  );
};

export default ConnectWithBanner;
