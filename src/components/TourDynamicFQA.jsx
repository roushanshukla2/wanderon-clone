import React, { useState } from "react";
import "../styles/FQA.css";

const TourDynamicFQA = ({ faqData = [] }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  if (!faqData.length) return null;  // Safely handle if no FAQ

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="international-fqa-page-wrapper">
      <div className="international-fqa-wrapper">
        <div className="international-fqa-heading-container">
          <h2>Frequently Asked Questions</h2>
          <p>Your right to Know!</p>
        </div>

        <div className="international-fqa-content">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`international-fqa-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>
                Q: {item.question}
                <span className="arrow-icon">&#x25BC;</span>
              </h3>
              <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
                A: {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourDynamicFQA;
