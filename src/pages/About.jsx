import React from "react";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";

import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section >
      <Header/>
      <Sheader/>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          About PadmaSai Finance Private Limited
        </h2>
        <div>
          <p style={{ fontFamily: "Inter", color: "var(--dark)" }}>
            Founded in 1996, Padma Sai Finance Pvt Ltd was in the business of giving loans for automobiles directly to its customers. We have surrendered our NBFC License in the year 2018 and post to that we are acting as Intermediary Services provider for NBFCs and Financial Institutions who are engaged in financing auto loans. It was only in 2018 that the company solely became a pioneer in providing Portfolio Management Services to NBFCs for automobile loan financing. With a promise to deliver our services in the most customer-centric way, we are determined to continue to be the best in the business. 26 years of excellence and the more than 90,000 happy customers in the last decade (2010-present), Padma Sai Finance Pvt. Ltd. has ties with the leading financial institutions in India. We aim to help our clients in obtaining loans with the least trouble. Our success, however, is evidenced by our presence in 250 locations across three states: Telangana, Andhra Pradesh, and Karnataka.
          </p>

          <h3 className="font-montserrat fw-bold mb-3 mt-5" style={{ color: "var(--navy)" }}>
            What We Do
          </h3>
          <p style={{ fontFamily: "Inter", color: "var(--dark)" }}>
            The integrity with which we serve each customer and keep his benefits first is at the heart of our company. We aim to cater our services to rural, semi-rural, urban, semi-urban people among whom we have a strong and a considerable presence. In any regard, the firm provides services such as customer sourcing, field investigation, credit assessment, collection of pre and post disbursal papers, collection of EMI and other dues, bookkeeping, repossession, and the sale of repossessed automobiles in accordance with NBFC terms and conditions. Padma Sai Finance is like that bridge between you and the financial institution which makes processing of auto loans easier and faster.
          </p>

          <h3 className="font-montserrat fw-bold mb-3 mt-5" style={{ color: "var(--navy)" }}>
            Our Mission
          </h3>
          <p style={{ fontFamily: "Inter", color: "var(--dark)" }}>
            Our mission is to constantly strive and improve the quality of our services and broaden our distribution network across India.
          </p>

          <h3 className="font-montserrat fw-bold mb-3 mt-5" style={{ color: "var(--navy)" }}>
            Our Vision
          </h3>
          <p style={{ fontFamily: "Inter", color: "var(--dark)" }}>
            To be one of India’s leading financiers by providing quick and customised financial products and services which cater to the needs of the local population.
          </p>

          <h3 className="font-montserrat fw-bold mb-3 mt-5" style={{ color: "var(--navy)" }}>
            Subsidiary Company
          </h3>
          <h4 className="font-montserrat fw-bold mb-2" style={{ color: "var(--dark)" }}>
            SM Square Credit Services Pvt Ltd – Subsidiary Company
          </h4>
          <ul className="subsidiary-list" style={{ fontFamily: "Inter", color: "var(--dark)" }}>
            <li>Incorporated in the year 2021. YET TO COMMENCE BUSINESS</li>
          </ul>
          <h4 className="font-montserrat fw-bold mb-2 mt-4" style={{ color: "var(--dark)" }}>
            AExpress Marketing Services India Pvt Ltd – Subsidiary Company
          </h4>
          <ul className="subsidiary-list" style={{ fontFamily: "Inter", color: "var(--dark)" }}>
            <li>AExpress Marketing Services India Private Limited (AExpress) is an ISO certified company, which was incorporated on 4th August 2015.</li>
            <li>The Company is primarily into facilitating of parking yards and conducting auctions for repossessed vehicles at both physical and online platform. We deal in all sorts of public and private transport vehicles, Industrial vehicles, Commercial vehicles, and Agricultural vehicles.</li>
            <li>Aexpress is India’s leading pre-owned vehicle exchange platform that works with NBFCs and Private Financiers. We take immense pleasure to announce that we diligently organize the auctions for all kinds of vehicles, both physical and online.</li>
            <li>We work with the leading NBFC’s & Private Financiers all our auctions are in line with the legal compliances and adhere towards the best practices and procedures to commensurate the fraud.</li>
            <li>With our unprecedented skilled staff, we have pioneered the art of conducting successful automobile auctions with accurate valuations and we ensure quality and reliable services to our lenders and customers.</li>
            <li>Since the Promoters & Directors are in auto Finance Industry for 30 years and have a huge data base of 80,000 customers and dealer’s network spread across all the districts of AP & Telangana.</li>
            <li>We have Total 55 Yards covering area of approximately 48 acres in Telangana, Andhra Pradesh & Karnataka (35 Yards in Andhra Pradesh, 19 yards in Telangana, 1 yard in Karnataka).</li>
          </ul>
          <p className="mt-4" style={{ fontFamily: "Inter", color: "var(--dark)" }}>
            We pursued our founder’s vision that was to be a one stop solution for the needs of customer segment that was looking for flexible, secure, safe and low-priced auto loans. We are delivering the most competitive products and world-class customer services to our clients and making the bond stronger for each passing day.
          </p>

          <h3 className="font-montserrat fw-bold mb-3 mt-5" style={{ color: "var(--navy)" }}>
            How We Deliver Excellence
          </h3>
          <p style={{ fontFamily: "Inter", color: "var(--dark)" }}>
            Customers' interest is the most valued aspect of our services. We push our boundaries to fulfil the needs of each client.
          </p>
          <ul className="excellence-list" style={{ fontFamily: "Inter", color: "var(--dark)" }}>
            <li>Expertise advice on each loan ensures the loan amount, time period and processing fee to optimize to benefit the client.</li>
            <li>Innovative and out-of-box solutions to help customers keep up with their needs.</li>
            <li>Committed skill-force to deliver what was promised.</li>
            <li>Our services are focused to enrich our customers by offering them quick loans.</li>
            <li>Our work harassment policy ensures the employees feel secure and comfortable at our offices.</li>
          </ul>
        </div>
      </Container>
      <Footer/>
    </section>
  );
};

export default About;