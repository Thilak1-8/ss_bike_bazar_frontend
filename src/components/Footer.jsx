import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleProductsClick = (e) => {
    e.preventDefault();
    // If not on homepage, navigate to homepage first
    if (location.pathname !== "/") {
      window.location.href = "/#products";
    } else {
      // If on homepage, scroll to the Products section
      const productsSection = document.getElementById("products");
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer-section py-4" style={{ backgroundColor: "var(--navy)" }}>
      <Container>
        <Row className="align-items-center justify-content-between">
          {/* Footer Links */}
          <Col xs={12} md={4} className="mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
            <ul className="footer-links list-unstyled d-flex flex-wrap">
              <li>
                <a href="/#products" onClick={handleProductsClick} className="footer-link font-inter">
                  Products
                </a>
              </li>
              <li>
                <Link to="/about" className="footer-link font-inter">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link font-inter">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link font-inter">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          {/* Social Media Icons */}
          <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>

          {/* Copyright and Policy Links */}
          <Col xs={12} md={4} className="text-center text-md-end mb-3 mb-md-0">
            <p className="font-inter mb-0" style={{ color: "white" }}>
              Copyright © 2023-24 Padma Sai Finance Pvt. Ltd.{" "}
              <Link to="/privacy-policy" className="policy-link">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link to="/refund-policy" className="policy-link">
                Refund Cancellation Policy
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;