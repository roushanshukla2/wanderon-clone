import React from "react";
import "../styles/CorporateAbout.css"; // Ensure this file contains your CSS

const services = [
  {
    image: "world-tour.webp",
    alt: "Team Outings Icon",
    text:
      "Bring your work crew together for a day of bonding and enjoyment outside the office."
  },
  {
    image: "world-tour.webp",
    alt: "Corporate Trips Icon",
    text:
      "Elevate team spirit and performance with incentive trips that turn dreams into reality."
  },
  {
    image: "world-tour.webp",
    alt: "Incentive Tour Icon",
    text:
      "Bring your work crew together for a day of bonding and enjoyment outside the office."
  },
  {
    image: "world-tour.webp",
    alt: "Workcations Icon",
    text:
      "Why work in the same old way when you can do the same in your favorite destinations with our Workcations?"
  }
];

const clients = [
  "Paytm",
  "GoHighLevel",
  "Concentrix",
  "Springworks",
  "TVS",
  "ACMA",
  "Adobe",
  "Biconomy",
  "Endress+Hauser",
  "OfBusiness"
];

const CorporateAbout = () => {
  return (
    <>
      <div className="corporate-about-container">
        <div className="corporate-about-content-heading">
          <h2>
            Our Way of <strong>Making Magic</strong> Zone
          </h2>
        </div>
        <div className="corporate-about-card-container">
          {services.map((item, index) => (
            <div key={index} className="corporate-about-card">
              <div className="corporate-about-card-icon">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="corporate-about-card-description">{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="corporate-about-container">
        <div className="corporate-about-content-heading">
          <h2>
            Our Clientele <strong>Hall of Fame</strong>
          </h2>
        </div>
        <div className="corporate-about-card-container-grid4">
          {clients.map((client, index) => (
            <div key={index} className="corporate-about-card">
              <div className="corporate-about-card-icon">
                <img src="paytm.svg" alt={`${client} Logo`} />
              </div>
              <div className="corporate-about-card-title">{client}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CorporateAbout;
