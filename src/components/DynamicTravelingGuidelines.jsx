// src/components/DynamicTravelingGuidelines.jsx
import React from "react";
import "../styles/TravelingGuidelines.css";

const DynamicTravelingGuidelines = ({ guidelines, city }) => {
  if (!guidelines || guidelines.length === 0) return null;

  return (
    <div className="guidelines-wrapper">
      <div className="guidelines-heading">
        <h3>{city} Travel Guidelines</h3>
      </div>
      <div className="guidelines-content">
        {guidelines.map((point, index) => (
          <p key={index}>{point}</p>
        ))}
      </div>
    </div>
  );
};

export default DynamicTravelingGuidelines;
