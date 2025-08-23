import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home Page Sections
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import GallerySection from "./components/GallerySection";
import WhatWeOfferSection from "./components/WhatWeOffer";
import TestimonialsSection from "./components/TestimonialsSection";
import WeddingBannerSection from "./components/WeddingBannerSection";

// Pages
import AboutUs from "./components/aboutus/AboutUs";
import Services from "./components/services/Services";
import Gallery from "./components/gallery/Gallery";
import ContactUs from "./components/contact us/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermAndConditions from "./components/TermAndConditions";
import Wedding from "./components/services/wedding/Wedding";
import Cultural from "./components/services/cultural/cultural";
import Birthday from "./components/services/birthday/birthday";
import Catering from "./components/services/catering/catering";
import College from "./components/services/college/college";
import Corporate from "./components/services/corporate/corporate";
import Engagement from "./components/services/engagement/engagement";
import Entry from "./components/services/entry/entry";
import Government from "./components/services/government/government";
import Mandap from "./components/services/Mandap/mandap";
import Stage from "./components/services/stage/stage";
import Themes from "./components/services/themes/themes";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = () => (
  <>
    <Hero />
    <AboutSection />
    <StatsSection />
    <GallerySection />
    <WhatWeOfferSection />
    <TestimonialsSection />
    <WeddingBannerSection />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/wedding/wedding-decoration"
          element={<Wedding />}
        />
        <Route
          path="/services/cultural/cultural-decoration"
          element={<Cultural />}
        />
        <Route
          path="/services/birthday/birthday-decoration"
          element={<Birthday />}
        />
        <Route
          path="/services/catering/catering-services"
          element={<Catering />}
        />
        <Route
          path="/services/college/college-festival"
          element={<College />}
        />
        <Route
          path="/services/corporate/corporate-events"
          element={<Corporate />}
        />
        <Route
          path="/services/engagement/engagement-decoration"
          element={<Engagement />}
        />
        <Route
          path="/services/entry/bride-groom-entry"
          element={<Entry/>}
        />
        <Route
          path="/services/government/government-function"
          element={<Government />}
        />
        <Route
          path="/services/Mandap/mandap-decoration"
          element={<Mandap />}
        />
        <Route
          path="/services/stage/stage-decoration"
          element={<Stage />}
        />
        <Route
          path="/services/themes/theme-based-events"
          element={<Themes />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermAndConditions />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
