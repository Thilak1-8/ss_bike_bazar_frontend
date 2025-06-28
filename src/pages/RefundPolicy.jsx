import React from "react";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const RefundPolicy = () => {
  return (
    <section>
      <Header/>
      <Sheader/>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Refund/Cancellation Terms
        </h2>
        <div className="refund-content">
          <p className="font-inter mb-4" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            This Refund/Cancellation Policy outlines the terms under which refunds and cancellations are handled for transactions made through the website{" "}
            <a href="https://www.padmasai.in" target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)" }}>
              www.padmasai.in
            </a>
            , operated by Padma Sai Finance Pvt. Ltd. ("PSFPL", "we", "us", "our"). By using our services, you agree to these terms.
          </p>

          <p className="font-inter mt-4" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            1. If an amount is debited from your bank account despite a failed payment transaction, the onus will be on your bank to reverse the amount.
          </p>

          <p className="font-inter mt-4" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            2. In case you have attempted to make an online payment for a transaction more than once, and PSFPL has received the amount more than once, PSFPL reserves the right to adjust it against additional EMI towards your loan account. If PSFPL decides to refund the excess amount, it will be made through cheque within 1 month of the claim.
          </p>

          <p className="font-inter mt-4" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            3. For the avoidance of doubt, nothing in this policy shall require PSFPL to refund the amount paid through the payment gateway unless such amount has been paid more than once.
          </p>

          <p className="font-inter mt-4" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            4. Customers must claim any refund within 15 days.
          </p>

          <p className="font-inter mt-4" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            5. In case a customer has more than one account, PSFPL reserves the right to adjust the total receipts towards any one or more accounts in whatever proportion it may deem fit, irrespective of the bifurcation provided by the customer.
          </p>

          <p className="font-inter mt-4" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
            6. Please be informed that no payments should be made to any individual executive’s personal account. Management will not take responsibility for such payments.
          </p>
        </div>
      </Container>
      <Footer/>
    </section>
  );
};

export default RefundPolicy;