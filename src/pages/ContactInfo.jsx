import React, { useState } from "react";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("https://ss-bike-bazar-backend.onrender.com/api/contact", formData);
      setMessage(response.data.message);
      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        query: "",
      });
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while submitting the form");
    }
  };

  return (
    <section>
      <Header />
      <Sheader />
      <Container>
        {/* Contact Form */}
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Get in Touch
        </h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="font-inter fw-bold" style={{ color: "var(--dark)" }}>
                  Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className="font-inter fw-bold" style={{ color: "var(--dark)" }}>
                  Phone Number
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="font-inter fw-bold" style={{ color: "var(--dark)" }}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formQuery">
                <Form.Label className="font-inter fw-bold" style={{ color: "var(--dark)" }}>
                  Your Query
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  placeholder="Enter your query"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 font-montserrat fw-bold"
                style={{ backgroundColor: "var(--navy)", borderColor: "var(--navy)" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Call Timings */}
        <div className="call-timings-section mt-5">
          <h3 className="font-montserrat fw-bold mb-4 text-center" style={{ color: "var(--navy)" }}>
            Call Timings
          </h3>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <p className="font-inter fw-bold" style={{ color: "var(--dark)" }}>
                Customer Support (Incoming): 8:00 AM to 6:30 PM
              </p>
              <p className="font-inter fw-bold" style={{ color: "var(--dark)" }}>
                Tele Verification (Outgoing): 8:00 AM to 6:00 PM
              </p>
            </Col>
          </Row>
        </div>

        <div className="registered-office-section mt-5">
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h4 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  Address
                </h4>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Padma Sai Finance Pvt Ltd <br />
                  H. No. 5-4-156, Flat No. 1401, <br />
                  T-19 Towers, MG Road, <br />
                  Ranigunj, Secunderabad – 500003.
                </p>
                <h4 className="font-montserrat fw-bold mt-3" style={{ color: "var(--navy)" }}>
                  Contact
                </h4>
                <p className="font-inter" style={{ color: "var(--dark)", lineHeight: "1.6" }}>
                  Phone: <a href="tel:8008600111" style={{ color: "var(--navy)" }}>8008600111</a>
                  <br />
                  Email: <a href="mailto:support@padmasai.com" style={{ color: "var(--navy)" }}>support@padmasai.com</a>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </section>
  );
};

export default ContactInfo;