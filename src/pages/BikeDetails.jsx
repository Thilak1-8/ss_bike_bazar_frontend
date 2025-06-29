import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./BikeDetails.css";

const BikeDetails = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBike = async () => {
      try {
        const response = await axios.get(`https://ss-bike-bazar-backend.onrender.com/api/bikes/${id}`);
        setBike(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.error || "An error occurred");
        setLoading(false);
      }
    };

    fetchBike();
  }, [id]);

  if (loading) {
    return (
      <section className="bike-details-section py-5" style={{ backgroundColor: "var(--silver)" }}>
        <Container>
          <p className="text-center font-inter" style={{ color: "var(--dark)" }}>
            Loading...
          </p>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bike-details-section py-5" style={{ backgroundColor: "var(--silver)" }}>
        <Container>
          <p className="text-center font-inter text-danger">{error}</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="bike-details-section py-5" style={{ backgroundColor: "var(--silver)" }}>
      <Container>
        <div className="back-button-container">
          <Link to="/">
            <Button variant="primary" className="back-button font-montserrat">
              Back to Home
            </Button>
          </Link>
        </div>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          {bike.name}
        </h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}${bike.url}`}
                alt={bike.name}
                style={{ height: "auto", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                  <strong>Model:</strong> {bike.model}
                </Card.Title>
                <Card.Text className="font-inter" style={{ color: "var(--dark)" }}>
                  <strong>ID:</strong> {bike.id}
                  <br />
                  <strong>Engine:</strong> {bike.engine}
                  <br />
                  <strong>Fuel:</strong> {bike.fuel}
                  <br />
                  <strong>Color:</strong> {bike.color}
                  <br />
                  <strong>Warranty:</strong> {bike.warranty}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BikeDetails;