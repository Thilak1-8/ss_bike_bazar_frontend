import React from "react";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import MainPoster from "../components/MainPoster";
import AvailableNow from "../components/AvailableNow";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Sheader/>
      <MainPoster/>
      <AvailableNow/>
      {/* Static Image Section */}
      <section className="hero-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/Why1.png`}
          alt="Shiva Sai Bike Bazaar Hero Banner"
          className="img-fluid"
          loading="lazy"
          style={{ width: "100%", maxHeight: "700px", objectFit: "cover" }}
        />
      </section>
      <Products/>
      <Partners/>
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default Home;