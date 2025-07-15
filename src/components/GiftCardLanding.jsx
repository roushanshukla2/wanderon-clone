import React from 'react';
import '../styles/GiftCardLanding.css';
import GiftCard1 from '../assets/Best Friends Forever.webp';

// Gift Card Data
const giftCards = [
  { id: 1, image: GiftCard1, text: 'Partners in All Things Crazy!' },
  { id: 2, image: GiftCard1, text: 'Adventures with the Besties!' },
  { id: 3, image: GiftCard1, text: 'Celebrate Special Moments!' },
  { id: 4, image: GiftCard1, text: 'Make Memories Together!' }
];

// Terms & Conditions
const termsConditions = [
  'Only one gift voucher can be applied per booking.',
  'Partial redemption is allowed until the voucher’s full value is utilized.',
  'Gift vouchers are valid for a period of 2 years from the date of purchase.',
  'Gift cards are non-cancellable and non-refundable once purchased.',
  'Gift vouchers can be redeemed across all WanderOn trip packages, except for standalone flight or hotel bookings.',
  'Gift vouchers are transferable and can be redeemed by anyone, regardless of the original purchaser.',
  'The recipient’s email address cannot be changed once the gift card is purchased, as it is immediately sent after payment.',
  'Gift cards are applicable exclusively for new trips and cannot be used for existing bookings.',
  'Gift cards cannot be applied on discounted prices.'
];

// Redemption Process
const redemptionSteps = [
  'Only one gift voucher can be applied per booking.',
  'Partial redemption is allowed until the voucher’s full value is utilized.',
  'Gift vouchers are valid for a period of 2 years from the date of purchase.',
  'Gift cards are non-cancellable and non-refundable once purchased.'
];

// Scroll Handler
const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const topOffset = window.innerWidth > 1100 ? 160 : 120;
  const yPosition = element.getBoundingClientRect().top + window.pageYOffset - topOffset;

  window.scrollTo({ top: yPosition, behavior: 'smooth' });
};

const GiftCardLanding = () => {
  return (
    <div>
      {/* Navigation */}
      <div className="gift-navigation-wrapper">
        <div className="gift-navigation">
          <button onClick={() => handleScroll('gift-card-wrapper')}>Gift Cards</button>
          <button onClick={() => handleScroll('terms-conditions-wrapper')}>Terms & Conditions</button>
          <button onClick={() => handleScroll('redemption-process-wrapper')}>Redemption Process</button>
        </div>
      </div>

      {/* Gift Cards Section */}
      <div className="section-wrapper" id="gift-card-wrapper">
        <h2>Gift Cards</h2>
        <p>Celebrate life's moments with the gift of exploration!</p>
        <div className="gift-card-container">
          {giftCards.map(card => (
            <div className="gift-card" key={card.id}>
              <img src={card.image} alt={card.text} />
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Terms & Conditions Section */}
      <div className="section-wrapper" id="terms-conditions-wrapper">
        <h2>Terms & Conditions</h2>
        <ul>
          {termsConditions.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>

      {/* Redemption Process Section */}
      <div className="section-wrapper" id="redemption-process-wrapper">
        <h2>Redemption Process</h2>
        <ul>
          {redemptionSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GiftCardLanding;
