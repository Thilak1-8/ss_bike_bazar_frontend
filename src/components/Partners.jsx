import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Partners = () => {
  const partners = [
    { name: "Partner 1", imgSrc: `${process.env.PUBLIC_URL}/images/logo.png`, alt: "Partner 1 Logo" },
    { name: "Partner 2", imgSrc: `${process.env.PUBLIC_URL}/images/bajaj-finance-squarelogo.png`, alt: "Partner 2 Logo" },
    { name: "Partner 3", imgSrc: `${process.env.PUBLIC_URL}/images/bike_bazaar_logo.png`, alt: "Partner 3 Logo" },
    { name: "Partner 4", imgSrc: `${process.env.PUBLIC_URL}/images/vardhaman-Bank.jpeg`, alt: "Partner 4 Logo" },
    { name: "Partner 5", imgSrc: `${process.env.PUBLIC_URL}/images/Shriram-Transport-Finance-.jpg`, alt: "Partner 5 Logo" },
    { name: "Partner 6", imgSrc: `${process.env.PUBLIC_URL}/images/muthoot-money.png`, alt: "Partner 6 Logo" },
    { name: "Partner 7", imgSrc: `${process.env.PUBLIC_URL}/images/leylandtrans1.png`, alt: "Partner 7 Logo" },
    { name: "Partner 8", imgSrc: `${process.env.PUBLIC_URL}/images/HERO-FINCORP-LIMITED-1024x576.jpg`, alt: "Partner 8 Logo" },
  ];

  return (
    <section id="partners" className="partnersection py-5" style={{ backgroundColor: "var(--silver)" }}>
      <Container>
        <h2 className="font-montserrat fw-bold mb-3 text-center" style={{ color: "var(--navy)" }}>
          Our Channel Partners
        </h2>
        <Row>
          {partners.map((partner, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="mb-4">
              <div className="partner-item">
                <img
                  src={partner.imgSrc}
                  alt={partner.alt}
                  className="img-fluid"
                  loading="lazy"
                  style={{ maxHeight: "100px", objectFit: "contain", width: "100%" }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Partners;