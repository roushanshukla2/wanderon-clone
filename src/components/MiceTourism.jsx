import React, { useState } from 'react';
import '../styles/MiceTourism.css'; // Ensure you have the correct path to your CSS file
import iframeImage from '../assets/iframeImage.webp';

const MiceTourism = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="corporate-banner-wrapper">
      <div className="corporate-banner-content">
        <div className="corporate-banner-container">
          <h2 className="corporate-heading-title">
            <span>Ditch</span> <span>the</span> <span>Boring</span>{' '}
            <span className="highlight">Business</span>{' '}
            <span className="highlight">Trips!</span>
          </h2>
          <div className="corporate-subheading">
            Rewrite Your Corporate Trip Story with Us!
          </div>

          <div className="corporate-description-wrapper">
            <div className={`corporate-description-text ${expanded ? 'expanded' : ''}`}>
              {/* Always visible */}
              <p>
                Give your Corporate Trips a much-needed change and add a dash of adventure with WanderOn’s brand-new MICE Tourism. Say bye to those boring boardroom gatherings and say hello to an era where business meets adventure.
              </p>
              <p>
                With WanderOn, it's not just business as usual; it's business mixed with an extraordinary dash of excitement! Let's turn those office outings into legendary tales of thrill and connections.
              </p>

              {/* Hidden section */}
              <div className="additional-content">
                <h2>What Is MICE Tourism?</h2>
                <p>MICE Tourism stands for Meetings, Incentives, Conferences and Exhibitions...</p>
                <h3>Meeting Trips</h3>
                <p>Meeting Trips are professional meetings focused on business objectives...</p>
                <h3>Incentive Tourism</h3>
                <p>Incentive Tourism is a motivational tool used by businesses...</p>
                <h3>Conference Trips</h3>
                <p>Conference Trips are large-scale gatherings aimed at knowledge sharing...</p>
                <h3>Exhibition Trips</h3>
                <p>Exhibition Trips in MICE Tourism involve travelling to expos and industry exhibitions...</p>
                <h2>Why You Should Opt For MICE Tourism?</h2>
                <p><strong>1. Fosters Innovation:</strong> New environments inspire creativity and fresh ideas.</p>
                <p><strong>2. Boosts Morale:</strong> Travel incentives reward effort and build loyalty.</p>
                <p><strong>3. Team Building:</strong> Shared experiences improve collaboration and trust.</p>
                <p><strong>4. Professional Growth:</strong> Events provide skills and insights employees bring back to work.</p>
                <p><strong>5. Balance:</strong> Work + leisure reduces burnout and increases satisfaction.</p>
                <p><strong>6. Networking:</strong> Meet new clients, vendors, and industry peers.</p>
                <p><strong>7. Global Exposure:</strong> Learn new cultures and expand business vision.</p>
                <h2>Our MICE Travel Services</h2>
                <p><strong>1. Personalised Itineraries:</strong> Every trip tailored to your company culture and goals.</p>
                <p><strong>2. Expert Planning:</strong> From destination to logistics, we handle everything.</p>
                <p><strong>3. 24x7 Support:</strong> Dedicated team always ready to assist.</p>
                <p><strong>4. Visa Help:</strong> Fast-tracked documentation for all attendees.</p>
                <p><strong>5. Trip Media:</strong> Capture your journey with our photo & video team.</p>
                <h2>Clients We've Worked With</h2>
                <p><strong>1. Japan For High Level:</strong> Coordinated a multi-national seminar for 200+ delegates.</p>
                <p><strong>2. Spiti Valley For TVS:</strong> Adventurous outing that boosted inter-department bonding.</p>
                <p><strong>3. Paytm:</strong> Multi-location retreats across India for internal training and fun.</p>
                <p>MICE Tourism isn't just about travel — it’s about business evolution through experience.</p>
              </div>
            </div>
            <span
              className="read-more-button"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Read Less...' : 'Read More...'}
            </span>
          </div>
        </div>

        <div className="corporate-video-section">
          <img src={iframeImage} alt="Corporate Group" className="corporate-video-frame" />
        </div>
      </div>

      <div className="corporate-enquire-button-wrapper">
        <button className="corporate-enquire-button">Enquire Now</button>
      </div>
    </div>
  );
};

export default MiceTourism;
