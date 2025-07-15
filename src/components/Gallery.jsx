import React from 'react';
import '../styles/Gallery.css';
import galleryImage from '../assets/honeymoon-pic-1.webp'; // Adjust the path as needed

const Gallery = () => {
  return (
    <div className="honeymoon-gallery-wrapper">
      <div className="honeymoon-gallery-header">
        <h2>Gallery</h2>
        <p>Best of our "Kodak" Moments!</p>
        <div className="yellow-line"></div>
      </div>

      <div className="gallery-card-wrapper">
        {[...Array(5)].map((_, index) => (
          <div className="gallery-card" key={index}>
            <img src={galleryImage} alt="honeymoon-gallery" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
