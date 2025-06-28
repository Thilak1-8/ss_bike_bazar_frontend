import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
          <p className="text-center" style={{ fontFamily: "Inter", color: "var(--dark)" }}>
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
          <p className="text-center text-danger" style={{ fontFamily: "Inter" }}>
            {error}
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="available-now py-5" style={{ backgroundColor: "silver" }}>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Available Now At <span style={{ color: "red" }}>Kalwakurthy!</span>
        </h2>
        {bikes.length === 0 ? (
          <p className="text-center" style={{ fontFamily: "Inter", color: "var(--dark)" }}>
            No bikes available at the moment.
          </p>
        ) : (
          <Slider {...settings}>
            {bikes.map((bike, index) => (
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
                    <p className="mt-2 text-center" style={{ fontFamily: "Inter", color: "var(--dark)" }}>
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