import React from "react";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";
import { Container, Accordion } from "react-bootstrap";

const FaqInfo = () => {
  return (
    <section>
      <Header/>
      <Sheader/>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--red)" }}>
          Frequently Asked Questions
        </h2>
        <div className="faq-content">
          <Accordion defaultActiveKey="0">
            {/* FAQ 1: Who are we? */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Who are we?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  We are Portfolio Management service providers for NBFCs and Financial Institutions who are engaged in financing auto loans.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 2: What we do? */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  What we do?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Major part of the work we do includes:
                </p>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>Sourcing of customer</li>
                  <li>Field investigation</li>
                  <li>Credit assessment</li>
                  <li>Collection of pre and post disbursal papers</li>
                  <li>Collection of EMI and other dues</li>
                  <li>Bookkeeping</li>
                  <li>Repossession</li>
                  <li>Sale of repossessed automobiles</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 3: For what type of Vehicles can I get a loan? */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  For what type of Vehicles can I get a loan?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  You can get a loan for all:
                </p>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>2 Wheelers</li>
                  <li>3 Wheelers</li>
                  <li>4 Wheelers</li>
                </ul>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  We provide loans for new and pre-used vehicles.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 4: Does Padma Sai Finance the vehicles? */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Does Padma Sai Finance the vehicles?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  NO. We provide Portfolio Management service for NBFCs and Financial Institutions who are engaged in financing of auto loans.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 5: What are the documents I will need to produce in order to get a loan? */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  What are the documents I will need to produce in order to get a loan?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  You are required to submit the following documents for the amount to be credited:
                </p>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>
                    <strong>Identity and Address Proof</strong>
                    <ul>
                      <li>Aadhar Card</li>
                      <li>Pan Card</li>
                      <li>Voter id</li>
                      <li>Driving licence</li>
                      <li>Ration card</li>
                      <li>Passport Size Photo</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Address Proof</strong>
                    <ul>
                      <li>Electricity bills</li>
                      <li>Phone Bill</li>
                      <li>Municipality Tax</li>
                      <li>Water Tax</li>
                    </ul>
                  </li>
                </ul>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  These documents are to be of Applicant, Co Applicant (if any) and Guarantor (Mandatory).
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 6: With which Padma Sai Finance in association with? */}
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  With which Padma Sai Finance in association with?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  We are proud to be associated with:
                </p>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>Bajaj Finance Limited</li>
                  <li>Muthoot Money Ltd</li>
                  <li>Bike Bazar Finance</li>
                  <li>Shriram Transport Finance Company Limited</li>
                  <li>Khusbhu Auto Finance Ltd</li>
                  <li>Vardhmana Mahila Co-operative Urban Bank Ltd.</li>
                  <li>Hero Fincorp Ltd.</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 7: How do I get in touch with PSF? */}
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  How do I get in touch with PSF?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  You can reach out to us through:
                </p>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>
                    Website –{" "}
                    <a href="https://padmasai.in/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)" }}>
                      https://padmasai.in/
                    </a>
                  </li>
                  <li>Dealer or Sub Dealer Showroom</li>
                  <li>
                    Corporate Address – Padma Sai Finance Pvt Ltd – H. No. 5-4-156, Flat No. 1401, T-19 Towers, MG Road, Ranigunj, Secunderabad – 500003, Mob No.{" "}
                    <a href="tel:8008600111" style={{ color: "var(--navy)" }}>
                      8008600111
                    </a>
                    , Email Id{" "}
                    <a href="mailto:support@padmasai.in" style={{ color: "var(--navy)" }}>
                      support@padmasai.in
                    </a>
                  </li>
                  <li>
                    Social Media Pages –{" "}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)" }}>
                      Facebook
                    </a>
                    ,{" "}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)" }}>
                      Twitter
                    </a>
                    , and{" "}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)" }}>
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 8: Do I require guarantor? */}
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Do I require guarantor?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Yes, a Guarantor is required before we start processing the loan. The same KYC and age criteria apply to the guarantor as they do to the customer (loan applicant).
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 9: What are charges that usually accompany vehicle loans? */}
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  What are charges that usually accompany vehicle loans?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Our NBFCs offer loans at very competitive interest rates. The charges or processing fee depends upon the product on which the loan is being processed or availed.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 10: What are the various repayment period options? */}
            <Accordion.Item eventKey="9">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  What are the various repayment period options?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  We offer the best and most flexible repayment options. The customer can choose the duration as per their choice.
                </p>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <strong>Two, Three & Four Wheelers</strong>
                </p>
                <ul className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  <li>ECS (NACH) – 12 Months to 36 Months</li>
                  <li>NON ECS (Cash Payments) – 12 Months to 30 Months</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 11: What is the maximum amount of loan that I can avail? */}
            <Accordion.Item eventKey="10">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  What is the maximum amount of loan that I can avail?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  The Maximum loan amount that you can avail depends upon the Market Value of the product you want to buy.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 12: Can I sell my vehicle before repayment of the vehicle loan is completed? */}
            <Accordion.Item eventKey="11">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Can I sell my vehicle before repayment of the vehicle loan is completed?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  It is considered unethical to sell the vehicle before the repayment of the loan. If you do, you will have to go through a legal procedure for the repayment of loan.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 13: What if I don’t pay EMIs on time? */}
            <Accordion.Item eventKey="12">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  What if I don’t pay EMIs on time?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  We understand that you may miss to make the EMI payments timely sometimes. It will not hinder your loan, but you may have to pay additional interest, your CIBIL score will be negatively affected. In few scenarios we might repossess your vehicle as per agreed terms and conditions.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 14: In which cases can my vehicle loan application be rejected? */}
            <Accordion.Item eventKey="13">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  In which cases can my vehicle loan application be rejected?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  If the CIBIL, Field Investigation comes Negative or any other mandate documents are not provided with the respective product, your loan application is at the risk of being rejected.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 15: Can interest rates be negotiated? */}
            <Accordion.Item eventKey="14">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Can interest rates be negotiated?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Yes, the interest rates are negotiable. They can be negotiated based on Profile & funding.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 16: What is the time required for disbursement of vehicle loan? */}
            <Accordion.Item eventKey="15">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  What is the time required for disbursement of vehicle loan?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Today, time is money, and we appreciate our customers’ time. We operate with extreme precision to disburse loans within a two-hour interval.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 17: Do you charge any fees for auto-loan foreclosure? */}
            <Accordion.Item eventKey="16">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Do you charge any fees for auto-loan foreclosure?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Our NBFCs does not allow partial pre-closure. When you decide to pre-close the loan, you must clear principal amount, interest balance, and any nominal fees that is applicable.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 18: Can I surrender my vehicle if I am unable to make payment of dues? */}
            <Accordion.Item eventKey="17">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Can I surrender my vehicle if I am unable to make payment of dues?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Yes, you can surrender the vehicle to the company. If the realisable value is less than the receivable amount, you must compensate the loss. Company might have to initiate legal process to recover the loss. The same information will be updated to the CIBIL through our NBFCs.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ 19: How to increase my CIBIL score? */}
            <Accordion.Item eventKey="18">
              <Accordion.Header>
                <h3 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  How to increase my CIBIL score?
                </h3>
              </Accordion.Header>
              <Accordion.Body>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Make sure for timely making of payments on or before the due date. The same information shall be provided to the NBFCs and will be updated in the CIBIL. Regular payments of dues will help you in improving your CIBIL score.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
      <Footer/>
    </section>
  );
};

export default FaqInfo;