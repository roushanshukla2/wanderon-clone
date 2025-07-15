import React from 'react';
import '../styles/HoneyMoonFormHero.css'; // External CSS
import bannerImage from '../assets/cta-honeymoon.svg'; // adjust path as needed

const HoneyMoonFormHero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div
      className="HoneyMoon-form-banner-wrapper"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="HoneyMoon-form-banner-content">
        <div className="HoneyMoon-form-text-container">
          <h2>International Tour Package – Book Now At Best Prices</h2>
          <p className="HoneyMoon-form-bg-yellow">
            Discover The World Your Way – Find The Perfect International Tour Package Today!
          </p>
        </div>

        <div className="HoneyMoon-form-callback-form">
          <h3>
            Not sure what to do? We’ll give you a{' '}
            <span className="HoneyMoon-form-blue-text">Call back</span>
          </h3>
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="name" className="HoneyMoon-form-blue-text HoneyMoon-form-font-light">
              Name
            </label>
            <input type="text" id="name" placeholder="Enter your name" required />
            <span className="HoneyMoon-form-error-text" id="nameError"></span>

            <label htmlFor="email" className="HoneyMoon-form-blue-text HoneyMoon-form-font-light">
              Email
            </label>
            <input type="email" id="email" placeholder="Enter your email id" required />
            <span className="HoneyMoon-form-error-text" id="emailError"></span>

            <label htmlFor="tel" className="HoneyMoon-form-blue-text HoneyMoon-form-font-light">
              Phone
            </label>
            <input type="tel" id="tel" placeholder="Enter your phone number" required />
            <span className="HoneyMoon-form-error-text" id="phoneError"></span>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HoneyMoonFormHero;
