import React from "react";
import './Mainpo.css';
import { Carousel } from "react-bootstrap";

const MainPoster = () => {
  // Slider items (images in public/images/)
  const sliderItems = [
    {
      image: `${process.env.PUBLIC_URL}/images/1.webp`,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/2.jpg`,
    },
    {
      image: `${process.env.PUBLIC_URL}/images/3.jpg`,
    },
  ];

  return (
    <Carousel className="main-poster mb-5">
      {sliderItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={`Slide ${index + 1}`}
            loading="lazy"
            style={{ height: "500px", width:"100%", objectFit: "contain" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MainPoster;