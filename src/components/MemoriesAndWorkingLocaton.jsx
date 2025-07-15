import React from "react";
import "../styles/MemoriesAndWorkingLocaton.css";
import locationImg from "../assets/working-location.svg";
import memory1 from "../assets/memories-gallery-1.webp";
import memory2 from "../assets/memories-gallery-2.webp";
import memory3 from "../assets/memories-gallery-3.webp";
import memory4 from "../assets/memories-gallery-4.webp";
import memory5 from "../assets/memories-gallery-5.webp";

const MemoriesAndWorkingLocaton = () => {
  return (
    <>
      <div className="working-location-container">
        <h2>
          We're <strong>Everywhere</strong>
        </h2>
        <img src={locationImg} alt="map" />
      </div>

      <div className="memories-container">
        <div className="memories-heading">
          <h2>
            Turning Moments into <strong>Memories</strong>
          </h2>
        </div>

        <div className="memories-card-grid">
          <div className="memories-card memories-card-first">
            <img src={memory1} alt="Memory 1" />
          </div>
          <div className="memories-card">
            <img src={memory2} alt="Memory 2" />
          </div>
          <div className="memories-card">
            <img src={memory3} alt="Memory 3" />
          </div>
          <div className="memories-card">
            <img src={memory4} alt="Memory 4" />
          </div>
          <div className="memories-card">
            <img src={memory5} alt="Memory 5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MemoriesAndWorkingLocaton;
