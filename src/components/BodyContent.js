// src/components/BodyContent.js
import React, { useEffect } from 'react';
import headerVideo from '../assets/header-video.mp4';

import '../styles/BodyContent.css'; 

const BodyContent = () => {
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
    <div className="container">
      <video autoPlay loop muted playsInline className="background-clip">
        <source src={headerVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Global Community for Travelers</h1>
        <p id="typewriter-text" className="typewriter"></p>
      </div>
    </div>
  );
};

export default BodyContent;
