import React from 'react';

import '../styles/InternationalBlogSection.css';


import germanyImg from "../assets/germany.webp"; // adjust paths as per your structure

const BlogSection = () => {
  return (
    <div className="international-blog-wrapper">
      <section className="blog-section">
        <h2>Our Blogs</h2>
        <p className="subheading">Some good reads to help you travel better!</p>

        <div className="blogs-container">
          {/* Left Blog List */}
          <div className="left-blogs">
            <div className="international-blog-card">
              <img src={germanyImg} alt="Germany" />
              <div className="blog-card-content">
                <h4>10 Best Places To Visit In Germany</h4>
                <p>July 9, 2025 | 5 Min Read</p>
              </div>
            </div>

            <div className="international-blog-card">
              <img src={germanyImg} alt="Japan" />
              <div className="blog-card-content">
                <h4>Top Spots for Shopping in Japan – A Complete Guide</h4>
                <p>July 8, 2025 | 5 Min Read</p>
              </div>
            </div>

            <div className="international-blog-card">
              <img src={germanyImg} alt="Ladakh" />
              <div className="international-blog-card-content">
                <h4>All You Need To Know About Best Time for Leh Ladakh Bike Trip</h4>
                <p>July 8, 2025 | 5 Min Read</p>
              </div>
            </div>
          </div>

          {/* Featured Blog */}
          <div className="featured-blog">
            <img src={germanyImg} alt="Bali Honeymoon" />
            <div className="featured-blog-content">
              <h3>41 Best Places To Visit In Bali For Honeymoon</h3>
              <p>July 8, 2025 | 5 Min Read</p>
              <a href="/places-to-visit-in-bali-for-honeymoon" className="read-full">
                Read Full →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
