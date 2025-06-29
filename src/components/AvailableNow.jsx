import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AvailableNow.css";

const AvailableNow = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get("https://ss-bike-bazar-backend.onrender.com/api/bikes");
        setBikes(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.error || "An error occurred while fetching bikes");
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  // Dynamic slider settings based on number of bikes
  const settings = {
    dots: bikes.length > 1, // Show dots only if more than one bike
    infinite: bikes.length > 1, // Disable infinite scroll for single bike
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: bikes.length > 1, // Disable autoplay for single bike
    autoplaySpeed: 3000,
    arrows: bikes.length > 1, // Disable arrows for single bike
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  if (loading) {
    return (
      <section className="available-now py-5" style={{ backgroundColor: "var(--silver)" }}>
        <Container>
          <p className="text-center font-inter" style={{ color: "var(--dark)" }}>
            Loading bikes...
          </p>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="available-now py-5" style={{ backgroundColor: "var(--silver)" }}>
        <Container>
          <p className="text-center font-inter text-danger">{error}</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="available-now py-5" style={{ backgroundColor: "var(--silver)" }}>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Available Now At <span style={{ color: "red" }}>Kalwakurthy!</span>
        </h2>
        {bikes.length === 0 ? (
          <p className="text-center font-inter" style={{ color: "var(--dark)" }}>
            No bikes available at the moment.
          </p>
        ) : bikes.length === 1 ? (
          <div className="available-now-slide">
            <Link to={`/bike-details/${bikes[0].id}`}>
              <div className="available-now-item">
                <img
                  src={`${process.env.PUBLIC_URL}${bikes[0].url}`}
                  alt={bikes[0].name}
                  className="img-fluid"
                  loading="lazy"
                  style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
                />
                <p className="mt-2 text-center font-inter" style={{ color: "var(--dark)" }}>
                  {bikes[0].name}
                </p>
              </div>
            </Link>
          </div>
        ) : (
          <Slider {...settings}>
            {bikes.map((bike) => (
              <div key={bike.id} className="available-now-slide">
                <Link to={`/bike-details/${bike.id}`}>
                  <div className="available-now-item">
                    <img
                      src={`${process.env.PUBLIC_URL}${bike.url}`}
                      alt={bike.name}
                      className="img-fluid"
                      loading="lazy"
                      style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
                    />
                    <p className="mt-2 text-center font-inter" style={{ color: "var(--dark)" }}>
                      {bike.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        )}
      </Container>
    </section>
  );
};

export default AvailableNow;