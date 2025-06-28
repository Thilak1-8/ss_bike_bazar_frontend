import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Sheader = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null); // Track clicked item

  // Log current path for debugging
  console.log("Current pathname:", location.pathname);
  console.log("Selected item:", selectedItem);

  // Define nav items for in-page scrolling
  const scrollItems = [
    { name: "Our Products", section: "products" },
    { name: "Testimonials", section: "testimonials" },
  ];

  // Define nav items for route-based navigation
  const routeItems = [
    { name: "About Us", path: "/about", isDropdown: true },
    { name: "Investor Info", path: "/investor-info" },
    { name: "Contact Info", path: "/contact" },
    { name: "FAQ Info", path: "/faq" },
  ];

  const aboutItems = [
    { name: "About SS Bike Bazaar", path: "/about/ss-bike-bazaar" },
    { name: "Board of Directors", path: "/about/board" },
    { name: "Achievements", path: "/about/achievements" },
  ];

  // Handle nav item click for smooth scrolling
  const handleNavClick = (section) => {
    // Only scroll if on the homepage
    if (location.pathname === "/") {
      const element = document.getElementById(section);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70, // Adjust for navbar height
          behavior: "smooth",
        });
      }
    }
  };

  // Handle dropdown item click
  const handleDropdownClick = (path) => {
    setSelectedItem(path);
  };

  return (
    <Navbar expand="lg" className="secondary-navbar" sticky="top">
      <Container fluid className="px-2 px-lg-3">
        <Navbar.Toggle aria-controls="secondary-nav" />
        <Navbar.Collapse id="secondary-nav">
          <Nav className="w-100 justify-content-between align-items-center gap-3">
            {/* Home link on the far left */}
            <Nav.Item>
              <Nav.Link
                href={location.pathname === "/" ? "#home" : "/"}
                className="font-montserrat fw-bold fs-5 text-white"
                onClick={() => {
                  if (location.pathname === "/") {
                    handleNavClick("home");
                  }
                }}
              >
                Home
              </Nav.Link>
            </Nav.Item>

            {/* In-Page Scroll Items */}
            {scrollItems.map((item) => (
              <Nav.Item key={item.section}>
                <Nav.Link
                  href={location.pathname === "/" ? `#${item.section}` : `/#${item.section}`}
                  className="font-montserrat fw-bold fs-5 text-white"
                  onClick={() => handleNavClick(item.section)}
                >
                  {item.name}
                </Nav.Link>
              </Nav.Item>
            ))}

            {/* Route-Based Items */}
            {routeItems.map((item) =>
              item.isDropdown ? (
                <Nav.Item key={item.path}>
                  <NavDropdown
                    title={item.name}
                    id="about-dropdown"
                    className="font-montserrat fw-bold fs-5 text-white"
                    menuVariant="dark"
                    onMouseEnter={(e) => e.preventDefault()}
                    onMouseOver={(e) => e.preventDefault()}
                  >
                    <NavDropdown.Item
                      href={item.path}
                      className="font-inter"
                      active={location.pathname === item.path}
                      onClick={() => handleDropdownClick(item.path)}
                    >
                      Overview
                    </NavDropdown.Item>
                    {aboutItems.map((subItem) => (
                      <NavDropdown.Item
                        key={subItem.path}
                        href={subItem.path}
                        className="font-inter"
                        active={location.pathname === subItem.path}
                        onClick={() => handleDropdownClick(subItem.path)}
                      >
                        {subItem.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                </Nav.Item>
              ) : (
                <Nav.Item key={item.path}>
                  <Nav.Link
                    href={item.path}
                    className="font-montserrat fw-bold fs-5 text-white"
                    active={location.pathname === item.path}
                  >
                    {item.name}
                  </Nav.Link>
                </Nav.Item>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sheader;