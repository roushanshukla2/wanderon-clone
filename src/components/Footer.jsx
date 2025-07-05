import React from "react";
import "../styles/Footer.css"; 
import footerImage from "../assets/footer-image.png"; 

const Footer = () => {
  return (
    <footer>
      
      
      <div className="footer-link-container">
        {[
          {
            heading: "International Trips",
            links: ["Bali", "Vietnam", "Thailand", "Europe", "Turkey", "Dubai", "Egypt", "Maldives"],
          },
          {
            heading: "India Trips",
            links: ["Kashmir", "Ladakh", "Spiti", "Meghalaya", "Sikkim", "Himachal", "Uttarakhand"],
          },
          {
            heading: "WanderOn Special",
            links: ["Workations", "Road Trips", "Treks", "Backpacking Trips", "Luxury Escapes", "Customized Trips"],
          },
          {
            heading: "Quick Links",
            links: ["About Us", "Careers", "Blog", "FAQs", "Contact", "Terms & Conditions", "Privacy Policy"],
          },
        ].map((section, index) => (
          <div className="link-content" key={index}>
            <p><a href="#">{section.heading}</a></p>
            {section.links.map((link, i) => (
              <p key={i}><a href="#">{link}</a></p>
            ))}
          </div>
        ))}
      </div>

      <div className="line"></div>

      <h3>WANDERON EXPERIENCES PVT LTD</h3>
      <p>3rd Floor, Building No-436, Phase IV, Udyog Vihar, Sector-18, Gurugram, Haryana-122015</p>

      <ul>
        <li><a href="mailto:hello@wanderon.in">hello@wanderon.in</a></li>
        <li><a href="tel:+919090403075">+91-9090403075</a></li>
        <li><a href="https://www.wanderon.in" target="_blank" rel="noopener noreferrer">www.wanderon.in</a></li>
      </ul>

      <div className="footer-icon-container">
        <a href="#"><FacebookIcon /></a>
        <a href="#"><InstagramIcon /></a>
        <a href="#"><LinkedInIcon /></a>
        <a href="#"><YouTubeIcon /></a>
      </div>

      <img src={footerImage} alt="footer-image" />
      <p>© WanderOn Experiences Pvt Ltd. All rights reserved.</p>
    </footer>
  );
};

// SVG Components
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.9.2 1.9.2v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4v1.6h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163z" />
    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
    <circle cx="18.406" cy="5.594" r="1.44" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.6 0 4.266 2.368 4.266 5.451v6.292zM5.337 7.433c-1.144 0-2.067-.926-2.067-2.067 0-1.144.923-2.067 2.067-2.067 1.144 0 2.067.923 2.067 2.067 0 1.141-.923 2.067-2.067 2.067zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24">
    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.116C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.39.57a2.994 2.994 0 0 0-2.108 2.116C0 7.89 0 12 0 12s0 4.11.502 5.814a2.994 2.994 0 0 0 2.108 2.116C4.308 20.5 12 20.5 12 20.5s7.692 0 9.39-.57a2.994 2.994 0 0 0 2.108-2.116C24 16.11 24 12 24 12s0-4.11-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
);

export default Footer;
