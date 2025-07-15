// src/components/FAQ.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/FQA.css";

const internationalFAQData = [
  {
    question: "How early should I apply for a visa?",
    answer:
      "Apply at least 2-3 months before departure for most of the countries, as some consulates have longer processing time.",
  },
  {
    question: "Can I use my electronics anywhere in the world?",
    answer:
      "To use your electronics anywhere you will likely need a universal travel adapter. You need to check voltage capabilities for high voltage items like dryers and laptops.",
  },
  {
    question: "Should I exchange currency before I go for my international trip?",
    answer:
      "Yes, you must exchange currency before you go for your international trip to avoid high fees later. You can exchange a small amount for immediate expenses. It is suggested to withdraw cash from ATMs and use card payments as much as possible.",
  },
  {
    question: "How can I stay safe in unfamiliar surroundings?",
    answer:
      "To remain safe it is suggested to blend with locals, avoid isolated areas at night, stay together with your group members and trip captains, keep your valuables safely and stay aware of your surroundings.",
  },
];

const indiaFAQData = [
  { question: "Heading 1", answer: "Content 1" },
  { question: "Heading 2", answer: "Content 2" },
  { question: "Heading 3", answer: "Content 3" },
  { question: "Heading 4", answer: "Content 4" },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  const isIndiaTrips = location.pathname.includes("/india-trips");
  const faqData = isIndiaTrips ? indiaFAQData : internationalFAQData;

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="international-fqa-page-wrapper">
      <div className="international-fqa-wrapper">
        <div className="international-fqa-heading-container">
          <h2>Frequently Asked Questions</h2>
          <p>{isIndiaTrips ? "India Trip FAQ" : "Your right to Know!"}</p>
        </div>

        <div className="international-fqa-content">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`international-fqa-card ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <h3>
                Q: {item.question}
                <span className="arrow-icon">&#x25BC;</span>
              </h3>
              <div
                className={`faq-answer ${activeIndex === index ? "show" : ""}`}
              >
                A: {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
