import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  const products = [
    {
      title: "New Two-Wheeler Loan",
      imgSrc: `${process.env.PUBLIC_URL}/images/new-bike.webp`,
      alt: "New Two-Wheeler Loan",
    },
    {
      title: "Used Two-Wheeler Loan",
      imgSrc: `${process.env.PUBLIC_URL}/images/prenew-bike.webp`,
      alt: "Used Two-Wheeler Loan",
    },
    {
      title: "Re-Finance for Two-Wheeler",
      imgSrc: `${process.env.PUBLIC_URL}/images/precashnew-bike.webp`,
      alt: "Re-Finance for Two-Wheeler",
    },
    {
      title: "Electric Two-Wheeler Loan",
      imgSrc: `${process.env.PUBLIC_URL}/images/enew-bike.webp`,
      alt: "Electric Two-Wheeler Loan",
    },
  ];

  return (
    <section id="products" className="productsection py-5" style={{ backgroundColor: "var(--silver)" }}>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Our Products
        </h2>
        <Row>
          {products.map((product, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="mb-4">
              <div className="product-item">
                <img
                  src={product.imgSrc}
                  alt={product.alt}
                  className="img-fluid"
                  loading="lazy"
                  style={{ maxHeight: "250px", objectFit: "cover", width: "100%" }}
                />
                <p className="mt-2 text-center" style={{ fontFamily: "Inter", color: "var(--dark)" }}>
                  {product.title}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;