// import React from 'react';
// import '../styles/BannerSection.css';

// // Imported assets
// import ladakh from '../assets/ladakh.webp';
// import spiti from '../assets/spiti.webp'; 
// import meghalaya from '../assets/meghalaya.webp';
// import kerala from '../assets/kerala.webp';
// import himachal from '../assets/himachal.webp';
// import desktopRender from '../assets/Desktop-render-new-f.mp4';
// import upcomingCommunityImage from '../assets/upcomming-community-image.webp';
// import internationalTrip from '../assets/international_trip.mp4';

// const BannerSection = () => {
//   const slide = (dir) => {
//     const slider = document.getElementById('slider');
//     if (slider) {
//       slider.scrollBy({ left: dir * 220, behavior: 'smooth' });
//     }
//   };

//   const destinations = [
//     { src: ladakh, title: 'Ladakh', price: 'Rs. 21,999' },
//     { src: spiti, title: 'Spiti', price: 'Rs. 17,999' },
//     { src: meghalaya, title: 'Meghalaya', price: 'Rs. 21,499' },
//     { src: kerala, title: 'Kerala', price: 'Rs. 12,999' },
//     { src: himachal, title: 'Himachal', price: 'Rs. 7,999' },
//     { src: ladakh, title: 'Ladakh', price: 'Rs. 21,999' },
//     { src: spiti, title: 'Spiti', price: 'Rs. 17,999' },
//     { src: meghalaya, title: 'Meghalaya', price: 'Rs. 21,499' },
//     { src: kerala, title: 'Kerala', price: 'Rs. 12,999' },
//     { src: himachal, title: 'Himachal', price: 'Rs. 7,999' },
//   ];

//   return (
//     <div>
//       {/* Banner 1: Video */}
//       <div className="new-banner-common">
//         <a href="/upcoming-international-trips">
//           <video src={desktopRender} autoPlay muted loop />
//         </a>
//       </div>

//       {/* Banner 2: Community Image */}
//       <div className="new-banner-common">
//         <a href="/upcoming-community-trips">
//           <img src={upcomingCommunityImage} alt="Community Trips" />
//         </a>
//       </div>

//       {/* Banner 3: Explore India + Slider */}
//       <div className="new-explore-container">
//         <div className="new-explore-banner">
//           <video src={internationalTrip} autoPlay muted loop />
//           <div className="new-explore-text">
//             <h1>International Trips</h1>
//             <p>A Journey Through Time, Colour And Culture</p>
//             <a href="/international-trips">
//               <button className="new-explore-btn">Explore</button>
//             </a>
//           </div>

//           <div className="new-slider-wrap">
//             <div className="new-nav-arrow new-nav-left" onClick={() => slide(-1)}>
//               <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" /></svg>
//             </div>

//             <div className="new-slider" id="slider">
//               {destinations.map((item, index) => (
//                 <div className="new-slide-card" key={index}>
//                   <img src={item.src} alt={item.title} />
//                   <div className="new-info">
//                     <h3>{item.title}</h3>
//                     <p>Starting {item.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="new-nav-arrow new-nav-right" onClick={() => slide(1)}>
//               <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerSection;

import React from 'react';
import '../styles/BannerSection.css';

import ladakh from '../assets/ladakh.webp';
import spiti from '../assets/spiti.webp';
import meghalaya from '../assets/meghalaya.webp';
import kerala from '../assets/kerala.webp';
import himachal from '../assets/himachal.webp';
import desktopRender from '../assets/Desktop-render-new-f.mp4';
import upcomingCommunityImage from '../assets/upcomming-community-image.webp';
import internationalTrip from '../assets/international_trip.mp4';
import cta_banner from '../assets/cta-banner.webp';

const destinations = [
  { src: ladakh, title: 'Ladakh', price: 'Rs. 21,999' },
  { src: spiti, title: 'Spiti', price: 'Rs. 17,999' },
  { src: meghalaya, title: 'Meghalaya', price: 'Rs. 21,499' },
  { src: kerala, title: 'Kerala', price: 'Rs. 12,999' },
  { src: himachal, title: 'Himachal', price: 'Rs. 7,999' },
];

const BannerSection = () => {
  const slide = (dir, sliderId) => {
    const slider = document.getElementById(sliderId);
    if (slider) {
      slider.scrollBy({ left: dir * 220, behavior: 'smooth' });
    }
  };

  const renderSlider = (sliderId) => (
    <div className="new-slider-wrap">
      <div className="new-nav-arrow new-nav-left" onClick={() => slide(-1, sliderId)}>
        <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" /></svg>
      </div>

      <div className="new-slider" id={sliderId}>
        {[...destinations, ...destinations].map((item, index) => (
          <div className="new-slide-card" key={`${sliderId}-${index}`}>
            <img src={item.src} alt={item.title} />
            <div className="new-info">
              <h3>{item.title}</h3>
              <p>Starting {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="new-nav-arrow new-nav-right" onClick={() => slide(1, sliderId)}>
        <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
      </div>
    </div>
  );

  return (
    <div>
      {/* Banner 1: Video */}
      <div className="new-banner-common">
        <a href="/upcoming-international-trips">
          <video src={desktopRender} autoPlay muted loop className="media-banner" />
        </a>
      </div>

      {/* Banner 2: Community Image */}
      <div className="new-banner-common">
        <a href="/upcoming-community-trips">
          <img src={upcomingCommunityImage} alt="Community Trips" className="media-banner" />
        </a>
      </div>

      {/* Banner 3: International Trips */}
      <div className="new-explore-container">
        <div className="new-explore-banner">
          <video src={internationalTrip} autoPlay muted loop />
          <div className="new-explore-text">
            <h1>International Trip</h1>
            <p>A Journey Through Time, Colour And Culture</p>
            <a href="/international-trips">
              <button className="new-explore-btn">Explore</button>
            </a>
          </div>
          {renderSlider('slider1')}
        </div>
      </div>

      {/* Banner 4: Explore India */}
      <div className="new-explore-container">
        <div className="new-explore-banner">
          <video src={internationalTrip} autoPlay muted loop />
          <div className="new-explore-text">
            <h1>Explore India</h1>
            <p>Discover the Heart of the Nation</p>
            <a href="/domestic-trips">
              <button className="new-explore-btn">Explore</button>
            </a>
          </div>
          {renderSlider('slider2')}
        </div>
      </div>

      {/* Banner 5: Romantic Escapes (Second Section) */}
      <div className="new-explore-container">
        <div className="new-explore-banner">
          <video src={internationalTrip} autoPlay muted loop />
          <div className="new-explore-text">
            <h1>Romantic Escapes</h1>
            <p>Discover the Heart of the Nation</p>
            <a href="/domestic-trips">
              <button className="new-explore-btn">Explore</button>
            </a>
          </div>
          {renderSlider('slider3')}
        </div>
      </div>

      <div className="new-explore-container">
        <div className="new-explore-banner">
          <img src={cta_banner} alt="Romantic Escapes" />
          <div className="new-explore-text">
            <h3>Dreaming of your next Adventure?</h3    >
            <p>Hit us up!</p>
            <a href="/domestic-trips">
              <button className="new-explore-btn">Explore</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
