import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BodyContent from "./components/BodyContent";
import ReviewBadges from "./components/ReviewBadges";
import BannerSection from "./components/BannerSection";
import UpcomingTrips from "./components/UpcomingTrips";
import ContactForm from "./components/ContactForm";
// import RomanticEscapesBanner from "./components/RomanticEscapesBanner";
import WanderOnBenefitsPage from "./components/WanderOnBenefitsPage";
import Footer from "./components/Footer";
import JourneyCarousel from "./components/JourneyCarousel";


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <BodyContent />
      <ReviewBadges />
      <BannerSection />
      <UpcomingTrips />
      {/* <RomanticEscapesBanner /> */}
      <WanderOnBenefitsPage />
      <JourneyCarousel />
      <ContactForm />
      <Footer />
      {/* <Test/> */}
      
      {/* <ReviewBadges /> */}
      {/* <BannerSection /> */}
      {/* <InternationalBanner /> */}
      
    </div>
  );
}

export default App;

