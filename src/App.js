import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Common Components
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/FooterSection";

// Home + Common Pages
import BodyContent from "./components/BodyContent";
import ReviewBadges from "./components/ReviewBadges";
import BannerSection from "./components/BannerSection";
import UpcomingTrips from "./components/UpcomingTrips";
import ContactForm from "./components/ContactForm";
import WanderOnBenefitsPage from "./components/WanderOnBenefitsPage";
import JourneyCarousel from "./components/JourneyCarousel";

// Other Sections
import CorporateTours from "./components/Corporatetours";
import BlogGrid from "./components/BlogGrid";
import TourInfo from "./components/TourInfo";
import Banner from "./components/Banner";
import HeroBanner from "./components/HeroBanner";
import HeroBannerWithoutForm from "./components/HeroBannerWithoutForm";
import Destination from "./components/Destination";
import BestSellerPackages from "./components/BestSellerPackages";
import AllPackages from "./components/AllPackages";
import BestOfPlaces from "./components/BestOfPlaces";
import TravellerReviews from "./components/TravellerReviews";
import YouTubeCarousel from "./components/YouTubeCarousel";
import BlogSection from "./components/BlogSection";
import FQA from "./components/FQA";
import TravelingGuidelines from "./components/TravelingGuidelines";
import InternationalContactForm from "./components/InternationalContactForm";
import ConnectWithBanner from "./components/ConnectWithBanner";
import BestOfHoneymoonPackage from "./components/BestOfHoneymoonPackage";
import WeekendGetaways from "./components/WeekendGetaways";
import LoveStoryDestinations from "./components/LoveStoryDestinations";
import HoneyMoonFormHero from "./components/HoneyMoonFormHero";
import QuickSafeSection from "./components/QuickSafeSection";
import Gallery from "./components/Gallery";
import HoneymoonPackages from "./components/HoneymoonPackages";
import AboutHeroBanner from "./components/AboutHeroBanner";
import OriginStory from "./components/OriginStory";
import MeetOurTeam from "./components/MeetOurTeam";
import OurEfforts from "./components/OurEfforts";
import OurWarriors from "./components/OurWarriors";
import OurLocations from "./components/OurLocations";
import GiftCardBanner from "./components/GiftCardBanner";
import GiftCardLanding from "./components/GiftCardLanding";
import AllUpcomingTrips from "./components/AllUpcomingTrips";
import TripRender from "./components/TripRender";
import TourRender from "./components/TourRender";

// Dummy Payment Page
const Payment = () => <h2>Payment Page</h2>;

// Home Page Layout
const Home = () => (
  <>
    <BodyContent isBlog={false} />
    <ReviewBadges />
    <BannerSection />
    <UpcomingTrips />
    <WanderOnBenefitsPage />
    <JourneyCarousel />
    <ContactForm />
  </>
);

// Blog Page Layout
const Blog = () => (
  <>
    <BodyContent isBlog={true} />
    <BlogGrid />
  </>
);

// App Routes with Correct Priority
const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/corporate-tours" element={<CorporateTours />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/upcoming-trips" element={<AllUpcomingTrips />} />

      <Route
        path="/product/:slug"
        element={
          <>
            <TripRender />
            <JourneyCarousel />
          </>
        }
      />

      <Route
        path="/about-us"
        element={
          <>
            <AboutHeroBanner />
            <OriginStory />
            <MeetOurTeam />
            <OurEfforts />
            <OurWarriors />
            <OurLocations />
          </>
        }
      />

      <Route
        path="/international-trips"
        element={
          <>
            <HeroBanner />
            <TourInfo />
            <Destination />
            <BestSellerPackages />
            <AllPackages />
            <Banner />
            <WanderOnBenefitsPage />
            <BestOfPlaces />
            <TravellerReviews />
            <YouTubeCarousel />
            <BlogSection />
            <FQA />
            <TravelingGuidelines />
            <ConnectWithBanner />
          </>
        }
      />

      <Route
        path="/india-trips"
        element={
          <>
            <HeroBanner />
            <TourInfo />
            <Destination />
            <BestSellerPackages />
            <AllPackages />
            <Banner />
            <WanderOnBenefitsPage />
            <BestOfPlaces />
            <TravellerReviews />
            <YouTubeCarousel />
            <BlogSection />
            <FQA />
            <TravelingGuidelines />
            <InternationalContactForm />
          </>
        }
      />

      <Route
        path="/weekend-trips"
        element={
          <>
            <HeroBannerWithoutForm />
            <WeekendGetaways />
            <WanderOnBenefitsPage />
            <YouTubeCarousel />
            <ReviewBadges />
            <ConnectWithBanner />
          </>
        }
      />

      <Route
        path="/honeymoon"
        element={
          <>
            <HeroBannerWithoutForm />
            <TourInfo />
            <LoveStoryDestinations />
            <HoneyMoonFormHero />
            <BestOfHoneymoonPackage />
            <QuickSafeSection />
            <Gallery />
            <WanderOnBenefitsPage />
            <TravellerReviews />
            <YouTubeCarousel />
            <HoneymoonPackages />
            <BlogSection />
            <FQA />
            <ConnectWithBanner />
          </>
        }
      />

      <Route
        path="/group-tours"
        element={
          <>
            <AllUpcomingTrips />
            <ConnectWithBanner />
          </>
        }
      />

      <Route
        path="/gift-cards"
        element={
          <>
            <GiftCardBanner />
            <GiftCardLanding />
          </>
        }
      />

      {/* Dynamic Slug Route (Must be last) */}
      <Route path="/:slug" element={<TourRender />} />
    </Routes>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
