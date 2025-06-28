import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert, ListGroup } from "react-bootstrap";
import Header from "../components/Header";
import Sheader from "../components/Sheader";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminUpload = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    model: "",
    engine: "",
    fuel: "",
    color: "",
    warranty: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [bikes, setBikes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [showSubmissions, setShowSubmissions] = useState(false);
  const navigate = useNavigate();

  // Verify token on mount
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        navigate("/admin-login");
        return;
      }

      try {
        const response = await axios.post("https://ss-bike-bazar-backend.onrender.com/api/verify-token", { token });
        if (response.data.valid) {
          setIsAuthenticated(true);
          // Fetch all bikes for search
          const bikesResponse = await axios.get("https://ss-bike-bazar-backend.onrender.com/api/bikes");
          setBikes(bikesResponse.data);
        } else {
          localStorage.removeItem("token");
          navigate("/admin-login");
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        localStorage.removeItem("token");
        navigate("/admin-login");
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to save a bike");
      return;
    }

    try {
      let response;
      if (isEditing) {
        // Update existing bike
        response = await axios.put(`https://ss-bike-bazar-backend.onrender.com/api/bikes/${editingId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        // Add new bike
        response = await axios.post("https://ss-bike-bazar-backend.onrender.com/api/bikes", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      setMessage(response.data.message);
      // Reset form after successful submission
      setFormData({
        url: "",
        name: "",
        model: "",
        engine: "",
        fuel: "",
        color: "",
        warranty: "",
      });
      setIsEditing(false);
      setEditingId(null);
      // Refresh bikes list
      const bikesResponse = await axios.get("https://ss-bike-bazar-backend.onrender.com/api/bikes");
      setBikes(bikesResponse.data);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred");
    }
  };

  const handleEdit = (bike) => {
    setFormData({
      url: bike.url,
      name: bike.name,
      model: bike.model,
      engine: bike.engine,
      fuel: bike.fuel,
      color: bike.color,
      warranty: bike.warranty,
    });
    setEditingId(bike.id);
    setIsEditing(true);
    setMessage("");
    setError("");
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to delete a bike");
      return;
    }

    if (window.confirm("Are you sure you want to delete this bike?")) {
      try {
        const response = await axios.delete(`https://ss-bike-bazar-backend.onrender.com/api/bikes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data.message);
        setError("");
        // Refresh bikes list
        const bikesResponse = await axios.get("https://ss-bike-bazar-backend.onrender.com/api/bikes");
        setBikes(bikesResponse.data);
        // If the deleted bike was being edited, clear the form
        if (editingId === id) {
          setFormData({
            url: "",
            name: "",
            model: "",
            engine: "",
            fuel: "",
            color: "",
            warranty: "",
          });
          setIsEditing(false);
          setEditingId(null);
        }
      } catch (err) {
        setError(err.response?.data?.error || "An error occurred");
      }
    }
  };

  const handleCancelEdit = () => {
    setFormData({
      url: "",
      name: "",
      model: "",
      engine: "",
      fuel: "",
      color: "",
      warranty: "",
    });
    setIsEditing(false);
    setEditingId(null);
    setMessage("");
    setError("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const handleFetchSubmissions = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to view contact submissions");
      return;
    }

    try {
      const response = await axios.get("https://ss-bike-bazar-backend.onrender.com/api/contact-submissions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContactSubmissions(response.data);
      setShowSubmissions(true);
      setMessage("");
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred while fetching contact submissions");
      setShowSubmissions(false);
    }
  };

  const handleToggleSubmissions = () => {
    setShowSubmissions(!showSubmissions);
  };

  // Safely filter bikes based on search term
  const filteredBikes = bikes.filter((bike) => {
    const bikeId = bike.id ? bike.id.toString() : ""; // Convert id to string
    const bikeName = typeof bike.name === "string" ? bike.name : ""; // Ensure name is a string
    const search = searchTerm.toLowerCase();
    return (
      bikeId.includes(search) || bikeName.toLowerCase().includes(search)
    );
  });

  if (loading) {
    return (
      <section className="admin-upload-section py-5" style={{ backgroundColor: "var(--silver)" }}>
        <Container>
          <p className="text-center font-inter" style={{ color: "var(--dark)" }}>
            Loading...
          </p>
        </Container>
      </section>
    );
  }

  if (!isAuthenticated) {
    return null; // Redirect handled by useEffect
  }

  return (
    <section>
      <Header />
      <Sheader />
      <Container>
        <h2 className="font-montserrat fw-bold mb-5 text-center" style={{ color: "var(--navy)" }}>
          Admin Dashboard
        </h2>
        <Row>
          {/* Section 1: Bike Details Entry */}
          <Col md={4} className="mb-4">
            <div
              style={{
                border: "1px solid var(--silver)",
                padding: "20px",
                borderRadius: "5px",
                height: "70vh",
                overflowY: "auto",
              }}
            >
              <h4 className="font-montserrat fw-bold mb-3 text-center" style={{ color: "var(--navy)" }}>
                {isEditing ? "Edit Bike Details" : "Add New Bike"}
              </h4>
              {message && <Alert variant="success">{message}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="url" className="mb-3">
                  <Form.Label className="font-inter" style={{ color: "var(--dark)" }}>
                    Image URL (e.g., /images/Bike_Name.png)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                    className="font-inter"
                  />
                </Form.Group>

                <Form.Group controlId="name" className="mb-3">
                  <Form.Label className="font-inter" style={{ color: "var(--dark)" }}>
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter bike name"
                    className="font-inter"
                  />
                </Form.Group>

                <Form.Group controlId="model" className="mb-3">
                  <Form.Label className="font-inter" style={{ color: "var(--dark)" }}>
                    Model
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="Enter bike model"
                    className="font-inter"
                  />
                </Form.Group>

                <Form.Group controlId="engine" className="mb-3">
                  <Form.Label className="font-inter" style={{ color: "var(--dark)" }}>
                    Engine
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="engine"
                    value={formData.engine}
                    onChange={handleChange}
                    placeholder="Enter engine details"
                    className="font-inter"
                  />
                </Form.Group>

                <Form.Group controlId="fuel" className="mb-3">
                  <Form.Label className="font-inter" style={{ color: "var(--dark)" }}>
                    Fuel
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="fuel"
                    value={formData.fuel}
                    onChange={handleChange}
                    placeholder="Enter fuel type"
                    className="font-inter"
                  />
                </Form.Group>

                <Form.Group controlId="color" className="mb-3">
                  <Form.Label className="font-inter" style={{ color: "var(--dark)" }}>
                    Color
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    placeholder="Enter color"
                    className="font-inter"
                  />
                </Form.Group>

                <Form.Group controlId="warranty" className="mb-3">
                  <Form.Label className="font-inter" style={{ color: "var(--dark)" }}>
                    Warranty
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="warranty"
                    value={formData.warranty}
                    onChange={handleChange}
                    placeholder="Enter warranty period"
                    className="font-inter"
                  />
                </Form.Group>

                <div className="d-flex gap-2">
                  <Button
                    type="submit"
                    className="w-100 font-montserrat fw-bold mb-3"
                    style={{ backgroundColor: "var(--navy)", borderColor: "var(--navy)" }}
                  >
                    {isEditing ? "Update Bike" : "Upload Bike"}
                  </Button>
                  {isEditing && (
                    <Button
                      variant="outline-secondary"
                      className="w-100 font-montserrat fw-bold mb-3"
                      onClick={handleCancelEdit}
                    >
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </Form>
            </div>
          </Col>

          {/* Section 2: Search and Edit/Delete */}
          <Col md={4} className="mb-4">
            <div
              style={{
                border: "1px solid var(--silver)",
                padding: "20px",
                borderRadius: "5px",
                height: "70vh",
                overflowY: "auto",
              }}
            >
              <h4 className="font-montserrat fw-bold mb-3 text-center" style={{ color: "var(--navy)" }}>
                Search & Manage Bikes
              </h4>
              <Form.Group controlId="search" className="mb-4">
                <Form.Label className="font-inter" style={{ color: "var(--dark)" }}>
                  Search Bikes by ID or Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter bike ID or name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="font-inter"
                />
              </Form.Group>

              {searchTerm && (
                <div>
                  <h5 className="font-montserrat fw-bold" style={{ color: "var(--navy)" }}>
                    Search Results
                  </h5>
                  {filteredBikes.length === 0 ? (
                    <p className="font-inter" style={{ color: "var(--dark)" }}>
                      No bikes found.
                    </p>
                  ) : (
                    <ListGroup>
                      {filteredBikes.map((bike) => (
                        <ListGroup.Item
                          key={bike.id}
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span className="font-inter">
                            {bike.name} (ID: {bike.id})
                          </span>
                          <div>
                            <Button
                              variant="outline-primary"
                              size="sm"
                              className="me-2 font-inter"
                              onClick={() => handleEdit(bike)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              className="font-inter"
                              onClick={() => handleDelete(bike.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </div>
              )}
            </div>
          </Col>

          {/* Section 3: Contact Submissions */}
          <Col md={4} className="mb-4">
            <div
              style={{
                border: "1px solid var(--silver)",
                padding: "20px",
                borderRadius: "5px",
                height: "70vh",
                overflowY: "auto",
              }}
            >
              <h4 className="font-montserrat fw-bold mb-3 text-center" style={{ color: "var(--navy)" }}>
                Contact Submissions
              </h4>
              <div className="text-center mb-4">
                <Button
                  onClick={showSubmissions ? handleToggleSubmissions : handleFetchSubmissions}
                  className="font-montserrat fw-bold"
                  style={{ backgroundColor: "var(--navy)", borderColor: "var(--navy)" }}
                >
                  {showSubmissions ? "Hide Submissions" : "View Submissions"}
                </Button>
              </div>

              {showSubmissions && (
                <div>
                  {contactSubmissions.length === 0 ? (
                    <p className="font-inter" style={{ color: "var(--dark)" }}>
                      No submissions found.
                    </p>
                  ) : (
                    <ListGroup>
                      {contactSubmissions.map((submission) => (
                        <ListGroup.Item key={submission.id}>
                          <div className="font-inter" style={{ color: "var(--dark)" }}>
                            <strong>Name:</strong> {submission.name}
                            <br />
                            <strong>Phone:</strong> {submission.phone}
                            <br />
                            <strong>Email:</strong> {submission.email}
                            <br />
                            <strong>Query:</strong> {submission.query}
                            <br />
                            <strong>Submitted At:</strong> {new Date(submission.submitted_at).toLocaleString()}
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/* Logout Button */}
        <div className="text-center mt-4">
          <Button
            onClick={handleLogout}
            className="font-montserrat fw-bold"
            style={{ backgroundColor: "var(--red)", borderColor: "var(--red)" }}
          >
            Logout
          </Button>
        </div>
      </Container>
      <Footer />
    </section>
  );
};

export default AdminUpload;