import React from "react";
import "../styles/WanderOnBenefitsPage.css"; 
import benifitsBg1 from "../assets/benifitsBg1.svg";
import benifitsBg2 from "../assets/benifitsBg2.svg";
import benifitsBg3 from "../assets/benifitsBg3.svg";
import benifitsBg4 from "../assets/benifitsBg4.svg";

const benefitsData = [
  {
    title: "No Third Party Mess",
    description:
      "100 percent in-house operations for all trips! No third parties involved, hence no fishy claims!",
    image: benifitsBg1,
  },
  {
    title: "Transparency & Security",
    description:
      "Real time monitoring of all trips by ground team! All routes and weather conditions are accurately updated!",
    image: benifitsBg2,
  },
  {
    title: "Co-Travelers Filtering",
    description:
      "Multi-step filtering to bring only like-minded people together! That's our key to have fuss-free trips!",
    image: benifitsBg3,
  },
  {
    title: "One Stop Hassle Free Experience",
    description:
      "Comfortable stays, trained drivers, hospitable staff and friendly trip leaders put together that one memorable trip for you!",
    image: benifitsBg4,
  },
];

const WanderOnBenefitsPage = () => {
  return (
    <div className="BenefitsPageContainer">
      <div className="BenefitsPageHeader">
        <h3>Why WanderOn?</h3>
      </div>
      <div className="BenefitsPageCardContainer">
        {benefitsData.map((benefit, index) => (
          <div className="CardContainer" key={index}>
            <h4>{benefit.title}</h4>
            <p>{benefit.description}</p>
            <img src={benefit.image} alt="source-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WanderOnBenefitsPage;
