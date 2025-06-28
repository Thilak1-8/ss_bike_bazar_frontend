import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("https://ss-bike-bazar-backend.onrender.com/api/login", {
        username,
        password,
      });

      if (response.status === 200) {
        setError("");
        const { token } = response.data;
        localStorage.setItem("token", token); // Store the token
        setIsLoggedIn(true);
        navigate("/admin-upload");
      }
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/admin-login");
  };

  return (
    <section>
      <Header/>
      <Sheader/>
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Admin Login
        </h2>
        <div className="login-form mx-auto" style={{ maxWidth: "400px" }}>
          {error && <Alert variant="danger">{error}</Alert>}
          {isLoggedIn ? (
            <div className="text-center">
              <p className="font-inter" style={{ color: "var(--dark)" }}>
                You are already logged in.
              </p>
              <Button
                onClick={handleLogout}
                className="font-montserrat fw-bold"
                style={{ backgroundColor: "var(--red)", borderColor: "var(--red)" }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username" className="mb-3">
                <Form.Label className="font-inter" style={{ color: "var(--dark)" }}>
                  Username
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="font-inter"
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Label className="font-inter" style={{ color: "var(--dark)" }}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="font-inter"
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100 font-montserrat fw-bold"
                style={{ backgroundColor: "var(--navy)", borderColor: "var(--navy)" }}
              >
                Login
              </Button>
            </Form>
          )}
        </div>
      </Container>
      <Footer/>
    </section>
  );
};

export default AdminLogin;