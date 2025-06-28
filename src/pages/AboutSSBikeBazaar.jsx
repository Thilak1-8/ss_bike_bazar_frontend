import React from "react";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const AboutSSBikeBazaar = () => {
  return (
    <section >
      <Header/>
      <Sheader/>
      <Container>
       <div>
  <h2 className="font-montserrat fw-bold mb-4 text-center" style={{ color: "var(--navy)" }}>
    Shiva Sai Bike Bazaar: Your Trusted Bike Financing Partner
  </h2>
  <p style={{ fontFamily: "Inter", color: "var(--dark)", lineHeight: "1.6", fontSize: "1rem" }}>
    Shiva Sai Bike Bazaar, a proud branch of Padmasai Finance Pvt. Ltd., is dedicated to making bike ownership a reality for customers across Telangana, Andhra Pradesh, and Karnataka. Established under the legacy of Padmasai Finance, which has been a trusted name in auto financing since 1996, we specialize in providing seamless and customer-centric bike loan solutions.
  </p>
  <p style={{ fontFamily: "Inter", color: "var(--dark)", lineHeight: "1.6", fontSize: "1rem" }}>
    As part of Padmasai Finance Pvt. Ltd., which has served over 90,000 happy customers in the last decade and operates in 250 locations, Shiva Sai Bike Bazaar acts as a bridge between you and leading financial institutions. We offer a range of services, including customer sourcing, credit assessment, EMI collection, and repossession, ensuring a hassle-free loan process tailored to your needs—whether you're in rural, semi-rural, urban, or semi-urban areas.
  </p>
  <p style={{ fontFamily: "Inter", color: "var(--dark)", lineHeight: "1.6", fontSize: "1rem" }}>
    With 26 years of excellence backing us, we at Shiva Sai Bike Bazaar are committed to delivering quick, customized, and secure bike financing solutions, helping you ride towards your dreams with ease.
  </p>
</div>
      </Container>
      <Footer/>
    </section>
  );
};

export default AboutSSBikeBazaar;