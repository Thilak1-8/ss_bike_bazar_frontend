import React from "react";
import { Container, Carousel } from "react-bootstrap";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      quote: "Shiva Sai Bike Bazaar made my bike loan process so easy! Great service and quick approval.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Priya Singh",
      quote: "I got my dream bike with their affordable financing options. Highly recommend!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Amit Patel",
      quote: "The team was very supportive, and the loan terms were transparent. Excellent experience!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Sneha Reddy",
      quote: "Fast processing and friendly staff. I’m a happy customer of Shiva Sai Bike Bazaar!",
      image: "https://images.unsplash.com/photo-1517841903200-7b228b7a2f2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section py-5" style={{ backgroundColor: "var(--red)" }}>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Our Happy Customers
        </h2>
        <Carousel interval={5000} pause="hover">
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-item text-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="rounded-circle mb-3"
                  loading="lazy"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <p className="quote mx-auto" style={{ fontFamily: "Inter", color: "white", maxWidth: "600px" }}>
                  "{testimonial.quote}"
                </p>
                <h5 className="font-montserrat fw-bold mt-3" style={{ color: "white" }}>
                  {testimonial.name}
                </h5>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;