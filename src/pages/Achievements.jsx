import React from "react";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";

const Achievements = () => {
  const achievements = [
  { name: "Pan India we were the 2nd Best Performer in Bajaj Finance Limited in the year 2019", image: `${process.env.PUBLIC_URL}/images/achevement-1.jpg` },
    { name: "The Best AUTO LOAN SERVICE Provider of the year 2024", image: `${process.env.PUBLIC_URL}/images/achevement-5.jpg` },
  { name: "Pan India we were the1st Best Performer in Shriram in the year 2017", image: `${process.env.PUBLIC_URL}/images/archievement-3.jpg` },
  { name: "The Best Auto Loan Service Provider of the year 2024", image: `${process.env.PUBLIC_URL}/images/PSF-Certificate-of-Appreciation_page-0001-rotated.jpg` },
    { name: "Pan India we were the 2nd Best Performer in Bajaj Finance Limited in the year 2018", image: `${process.env.PUBLIC_URL}/images/achevement-2.jpg` },
];

  return (
    <section>
      <Header/>
      <Sheader/>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Achievements
        </h2>
        <Row>
          {achievements.map((achievement, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
              <div className="achievement-item text-center">
                <h5 className="font-inter fw-bold mb-3" style={{ color: "var(--dark)" }}>
                  {achievement.name}
                </h5>
                <img
                  src={achievement.image}
                  alt={achievement.name}
                  className="img-fluid rounded"
                  loading="lazy"
                  style={{ width: "300", height: "400", objectFit: "cover" }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer/>
    </section>
  );
};

export default Achievements;