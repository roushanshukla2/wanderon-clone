// src/components/TravelingGuidelines.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/TravelingGuidelines.css";

const TravelingGuidelines = () => {
  const location = useLocation();
  const isIndiaTrip = location.pathname.includes("/india-trips");

  const heading = isIndiaTrip
    ? "India Trips Travel Guidelines"
    : "International Trips Travel Guidelines";

  const content = isIndiaTrip
    ? `
Travellers must make sure they have proper documents such as passports if taking flights, photo identity proof if taking trains or residing anywhere in any hotel, guesthouse, villas in the country.

Travellers who are on a road trip must carry their valid driving license along with proper vehicle registration and insurance papers as well as travel insurance.

Travellers need to book all the logistics in advance to avoid any last minute challenges.

Travellers from outside India need to have a proper passport and valid visa to travel in India.

India is a land of diversity and there are a lot of cultural festivities going on all year around. To witness the best of India, it is recommended to visit during festivals like Diwali, Durga Pooja, Holi, and Lohri.

Dress modestly, especially in religious places. Respect local customs, traditions, and always ask before taking photographs of locals or shrines.

Though UPI is accepted throughout the country, the travellers must carry an adequate amount of cash for small vendors and remote areas.

Lastly, you should have good bargaining skills that can go a long way in ensuring you don't overpay, especially while shopping in local markets, and while booking autos.
    `
    : `
First and foremost make sure your passport is valid for at least six months beyond your return date. Keep physical as well as photocopies of your passport and visa as well as an identity proof.

Next, you need to apply for the visa and get your documents submitted or get information about the visa on arrival, to avoid any kind of delays.

Check required and recommended vaccines and take a basic first aid kit along with you.

Book your flight tickets in advance to avoid last minute price rise.

For any international destination you are planning to travel, make sure to check about any travel restrictions well in advance.

Next, you need to make sure you have life insurance with travel insurance to protect yourself and avoid unforeseen circumstances such as medical emergencies, loss of personal belongings or even trip cancellation.

Further, for staying connected purchase a sim with an international data plan to avoid high roaming charges.

Download offline maps for better navigation, cab booking apps and even translation apps for a convenient journey.

You can also learn about basic language and some phrases spoken in the country you are travelling to avoid communication barriers.

You need to pack your bags smartly with only essential items and items you can reuse and dispose off easily.

You also need to be updated about weather conditions in order to pack accordingly. Be aware of local traditions and customs and dress appropriately in religious settings.

Further, you need to exchange currency before leaving or on arrival to avoid high exchange rates. It is also suggested to carry cash to avoid last minute challenges.

Lastly, get information about local police and other emergency services and share your itinerary and contact details with family members and friends you can trust upon.
    `;

  return (
    <div className="guidelines-wrapper">
      <div className="guidelines-heading">
        <h3>{heading}</h3>
      </div>
      <div className="guidelines-content">
        {content
          .trim()
          .split("\n")
          .map(
            (line, index) =>
              line.trim() && <p key={index}>{line.trim()}</p>
          )}
      </div>
    </div>
  );
};

export default TravelingGuidelines;
