// src/components/BodyContent.js
import React, { useEffect } from 'react';
import corporateVideo from '../assets/corporate-tours-banner.mp4';

import '../styles/BodyContent.css'; 
import CorporateBanner from './CorporateBanner';
import Navbar from './Navbar';
import SuperpowerZone from './SuperpowerZone';
import BeyondOrdinary from './BeyondOrdinary'; 
import CorporateTestimonialCarousel from './CorporateTestimonialCarousel';
import CorporateClientReview from './CorporateClientReview';
import CorporateContactForm from './CorporateContactForm';
import FooterSection from './FooterSection';
import CorporateAbout from './CorporateAbout';
import WanderOnBenefitsPage from './WanderOnBenefitsPage'; 
import MemoriesAndWorkingLocaton from './MemoriesAndWorkingLocaton';

const CorporateTours = () => {
  useEffect(() => {
    const phrases = [
      "Spreading Happiness",
      "Connecting People",
      "Creating Memories",
      "Creating Stories",
      "Fulfilling Adventure"
    ];

    const element = document.getElementById("typewriter-text");
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      const currentText = currentPhrase.substring(0, charIndex);

      element.textContent = currentText;
      element.style.width = `${currentText.length}ch`;

      if (!isDeleting && charIndex < currentPhrase.length) {
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(type, 1000); 
        } else {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 300);
        }
      }
    }

    window.addEventListener("load", type);
    
    if (document.readyState === "complete") type();
  }, []);

  return (
    <>
    <Navbar />
    <div className="container">
      <video autoPlay loop muted playsInline className="background-clip">
        <source src={corporateVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Global Community for Travelers</h1>
        <p id="typewriter-text" className="typewriter"></p>
      </div>
    </div>
    <CorporateBanner/>
    <SuperpowerZone/>
    <BeyondOrdinary/>
    <CorporateTestimonialCarousel/>
    <CorporateClientReview/>
    <CorporateContactForm/>
    <CorporateAbout/>
    <WanderOnBenefitsPage/>
    <MemoriesAndWorkingLocaton/>
    <FooterSection/>
</>
  );
};

export default CorporateTours;
