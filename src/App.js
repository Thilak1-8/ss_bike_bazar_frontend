import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import About from "./pages/About";
import AboutSSBikeBazaar from "./pages/AboutSSBikeBazaar";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import Achievements from "./pages/Achievements";
import InvestorInfo from "./pages/InvestorInfo";
import ContactInfo from "./pages/ContactInfo";
import FaqInfo from "./pages/FaqInfo";
import AdminUpload from "./pages/AdminUpload";
import BikeDetails from "./pages/BikeDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/ss-bike-bazaar" element={<AboutSSBikeBazaar />} />
        <Route path="/about/board" element={<BoardOfDirectors />} />
        <Route path="/about/achievements" element={<Achievements />} />
        <Route path="/investor-info" element={<InvestorInfo />} />
        <Route path="/contact" element={<ContactInfo />} />
        <Route path="/faq" element={<FaqInfo />} />
        <Route path="/admin-upload" element={<AdminUpload />} />
        <Route path="/bike-details/:id" element={<BikeDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      
    </Router>
  );
};

export default App;