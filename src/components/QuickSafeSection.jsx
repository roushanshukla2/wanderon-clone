import React from 'react';
import '../styles/QuickSafeSection.css';
import wavingHandIcon from '../assets/waving-hand.svg';
import phoneCallIcon from '../assets/phone-call.svg';
import backpackerIcon from '../assets/backpacker.svg';
import bannerImage from '../assets/quick-safe.webp';

const QuickSafeSection = () => {
  return (
    <div className="honeymoon-quick-safe-wrapper">
      <div className="honeymoon-quick-safe-header">
        <p>Quick & Safe</p>
        <h3>Planning A Trip Has Never Been This Easy</h3>
        <div className="yellow-line"></div>
      </div>

      <div className="quick-safe-left-section">
        <div className="left-card">
          <div className="quick-safe-icon-container">
            <img src={wavingHandIcon} alt="Wave Icon" />
          </div>
          <div className="quick-safe-text-container">
            <div className="quick-safe-heading">It All Starts With a 'Hey'</div>
            <p>Just send us your detailed query on our website, Whatsapp or Messenger, and let’s get the ball rolling.</p>
          </div>
        </div>

        <div className="left-card">
          <div className="quick-safe-icon-container">
            <img src={phoneCallIcon} alt="Call Icon" />
          </div>
          <div className="quick-safe-text-container">
            <div className="quick-safe-heading">Lets Get To Know You Better</div>
            <p>Our team will contact you to discuss your preferences and put together a package tailored specifically for you.</p>
          </div>
        </div>

        <div className="left-card">
          <div className="quick-safe-icon-container">
            <img src={backpackerIcon} alt="Backpacker Icon" />
          </div>
          <div className="quick-safe-text-container">
            <div className="quick-safe-heading">It's A Match! (With Your Favourite Destination)</div>
            <p>Now leave the rest to us! With your bags on your back and adventure in your heart, start your journey.</p>
          </div>
        </div>
      </div>

      <div className="quick-safe-right-section">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default QuickSafeSection;
