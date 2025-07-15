import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/TourInfo.css';

const TourInfo = () => {
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(prev => !prev);
  };

  const path = location.pathname;

  const getContent = () => {
    switch (path) {
      case '/india-trips':
        return {
          heading: 'About India Holiday Packages',
          initialText:
            'If you are planning to take that domestic trip lying in your bucket list, then look no further than WanderOn India Tour Packages.You can choose 100+ India trips that suit your budget and duration. The tours range from as less as INR 25,000 to INR 40,000 per person. From mighty Himalayas in the north to the scenic backwaters of Kerala in south and from golden sands of Rajasthan to lush green hills of North East.',
          extraText: `India is a vibrant mosaic of landscapes, cultures, and ravishing experiences and our India holiday packages are thoughtfully designed to offer unforgettable memories. Get the best offers for your India trips to discover more than anyone else with our Seasonal Early Bird Discounts.

With WanderOn you can choose from an array of India holiday packages that span across the length and breadth of the country. Moreover, by booking our India tour packages, you get to customize your holiday destinations as per your interest, and avail some of the best offers and discounts from time to time.

Here are the top reasons you should book your India tour packages with WanderOn:

Exciting Holiday Offers & Discounts: Our multiple India tour packages come with attractive discounts. Our best India tour packages include Leh Ladakh Tour Packages and Spiti Valley Tour Packages, currently on heavy discounts but for a limited period of time. If you love adventure do check our Leh Ladakh Bike Trip Packages, we promise you it's a once in a lifetime experience. If you love interacting with new people and exploring some of the best holiday destinations in India you can book our upcoming community trips to Tirthan Valley, Manali & Lahaul. You can also book our weekend getaway packages, corporate tours, and honeymoon tour packages to experience the scenic holiday destinations in India.`
        };

      case '/honeymoon':
        return {
          heading: 'Best Honeymoon Destinations for Couples',
          initialText:
            "Looking to plan the most romantic getaway of your life? Our Honeymoon Packages offer you handpicked destinations filled with natural beauty, intimate settings, and luxury experiences for unforgettable memories.",
          extraText: `Our honeymoon packages range from INR 60,000 to INR 1,49,000 per person. Whether you're seeking snow-capped mountains or tropical beaches, we've got perfect options for you.

Here’s why couples choose us:

Exclusive Romantic Experiences: From private dinners to couple spa sessions and candle-lit beach nights, our tours are designed to help couples unwind, explore and celebrate.

Popular honeymoon trips include Bali, Maldives, Switzerland, Manali, and Goa. You can also customize your trip to suit your vibe and budget.`
        };

      case '/corporate-trips':
        return {
          heading: 'Corporate Travel Solutions & Team Getaways',
          initialText:
            'Build team spirit while exploring new destinations with our Corporate Trip Packages. We offer curated travel plans that balance work, leisure, and adventure for ultimate team bonding.',
          extraText: `From offsite conferences to weekend adventure getaways, we offer it all.

Why choose us?

Tailored Itineraries: Whether it’s 10 people or 100, we manage everything including transport, accommodation, meals, and team activities.

Popular trips: Rishikesh rafting, Goa retreats, Himachal hill workations. Book early and get exclusive deals.`
        };

      case '/weekend-getaways':
        return {
          heading: 'Short & Sweet Weekend Getaways',
          initialText:
            "Take a break from routine! Our Weekend Getaway Packages are perfect for those looking to recharge in a short time. Budget-friendly, quick, and full of adventure or peace—your choice.",
          extraText: `Most weekend packages range between INR 5,000 - INR 12,000.

Why our weekend trips?

- Handpicked stays
- Group & solo friendly
- All inclusive (travel, meals, guide)

Popular options: Kasol, Jibhi, Rishikesh, Jaipur, Agra, and Udaipur.`
        };

      default:
        return {
          heading: 'Best International Tour Package in Town',
          initialText:
            "Ditch the long searches and travel confusion, your perfect international tour package is right here offered by WanderOn. More than 20+ iconic destinations and perfect international trip packages covered by a team of experts that provide no less than a wholesome experience.",
          extraText: `From thrilling adventures to hearty shopping sagas and from capturing scenic beauties to eating the best cuisines worldwide, we make sure you create memories that last for a lifetime. Choose our best international trips, customize as per your preferences and take off on your journey that holds magical elements.

Our international trips packages range from INR 60,000 - INR 1,49,000 per person. Further, you can experience all that’s in your bucket list with our Seasonal Early Bird Discounts to discover the best of everything that too on a budget.

Incredible Holiday Packages at Irresistible Prices: Our multiple international trip packages comes with unmissable holiday deals and exclusive discounts. Some of our best international trips packages include Europe Tour Packages, Bali Tour Packages, Vietnam Tour Packages, Bhutan Tour Packages as well as Thailand Tour Packages are currently on heavy discounts but for a limited period of time.`
        };
    }
  };

  const { heading, initialText, extraText } = getContent();

  return (
    <div className="about-international-tours-wrapper">
      <div className="text-container">
        <h2><span>{heading}</span></h2>

        <p>{initialText}</p>

        <span
          className={`read-more-toggle ${showMore ? 'right-align' : ''}`}
          onClick={toggleReadMore}
        >
          {showMore ? 'Read Less' : 'Read More'}
        </span>

        {showMore && (
          <div className="extra-content show">
            {extraText.split('\n').map((para, idx) => (
              <p key={idx}>{para.trim()}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TourInfo;
