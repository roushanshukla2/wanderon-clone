// src/components/BodyContent.jsx
import React, { useEffect, useRef } from 'react';
import headerVideo from '../assets/header-video.mp4';
import blogImage from '../assets/blog-cover.jpg';

import '../styles/BodyContent.css';

const BodyContent = ({ isBlog }) => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (isBlog) return;

    const phrases = [
      "Spreading Happiness",
      "Connecting People",
      "Creating Memories",
      "Creating Stories",
      "Fulfilling Adventure"
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      const currentText = currentPhrase.substring(0, charIndex);
      if (typewriterRef.current) {
        typewriterRef.current.textContent = currentText;
        typewriterRef.current.style.width = `${currentText.length}ch`;
      }

      if (!isDeleting && charIndex < currentPhrase.length) {
        charIndex++;
        timeout = setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        timeout = setTimeout(type, 50);
      } else {
        if (!isDeleting) {
          isDeleting = true;
          timeout = setTimeout(type, 1000);
        } else {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeout = setTimeout(type, 300);
        }
      }
    }

    timeout = setTimeout(type, 0);

    return () => clearTimeout(timeout);
  }, [isBlog]);

  return (
    <>
      <div className="container">
        {isBlog ? (
          <img src={blogImage} className="background-clip" alt="Blog Background" />
        ) : (
          <video autoPlay loop muted playsInline className="background-clip">
            <source src={headerVideo} type="video/mp4" />
          </video>
        )}
        <div className="content">
          <h1>
            {isBlog ? (
              <>
                Let’s Take a look as to what the coolest travel community<br />
                says about the upcoming travel trends!
              </>
            ) : (
              "Global Community for Travelers"
            )}
          </h1>
          {!isBlog && <p ref={typewriterRef} className="typewriter"></p>}
        </div>
      </div>

 
    </>
  );
};

export default BodyContent;
// src/components/BlogSection.jsx