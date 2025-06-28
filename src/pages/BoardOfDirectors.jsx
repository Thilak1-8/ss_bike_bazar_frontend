import React from "react";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";

const BoardOfDirectors = () => {
 const directors = [
  { name: "Mr.Alluri Dilip Kumar", image: `${process.env.PUBLIC_URL}/images/Dilip-sir.jpeg` },
  { name: "Mrs.Alluri Avanthi", image: `${process.env.PUBLIC_URL}/images/Avanthi-mam.jpeg` },
];

  return (
    <section>
      <Header/>
      <Sheader/>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Board of Directors
        </h2>
        <Row>
          {directors.map((director, index) => (
            <Col key={index} md={6} sm={12} className="mb-4">
              <div className="director-item text-center">
                <img
                  src={director.image}
                  alt={`${director.name}'s profile`}
                  className="rounded-circle mb-3"
                  loading="lazy"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <h5 className="font-inter fw-bold" style={{ color: "var(--dark)" }}>
                  {director.name}
                </h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </section>
  );
};

export default BoardOfDirectors;