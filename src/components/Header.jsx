import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="danger" expand="lg" className="navbar" sticky="top">
      <Container fluid className="px-2 px-lg-3">
        <Navbar.Brand href="/" className="fs-4 ms-0 ps-0">
          Shiva Sai Bike Bazaar | Padmasai Finance Private Limited
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <div className="contact-info text-center text-lg-end">
              <div>📞 91+9014029499</div>
              <div>📧 customercare@gmail.com</div>
            </div>
            <Button
              variant="secondary"
              href="/admin-login"
              className="font-montserrat fw-bold"
            >
              Admin/Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;