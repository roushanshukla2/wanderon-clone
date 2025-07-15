import React from 'react';
import '../styles/BodyContent.css';
import aboutUsImage from '../assets/about-us.webp'

import '../styles/BodyContent.css';

const AboutUs = () => {
  return (
    <>
      <div className="container">
        <img src={aboutUsImage} className="background-clip" alt="Blog Background" />
        <div className="content">
          <h1>About Us</h1>
        </div>
      </div>

      
    </>
  );
};

export default AboutUs;
