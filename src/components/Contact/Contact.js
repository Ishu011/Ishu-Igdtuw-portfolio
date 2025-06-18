import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MdEmail, MdPhone, MdLocationOn, MdPerson } from "react-icons/md";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <Container fluid className="contact-section">
      <h1 className="contact-heading">Contact Me</h1>
      <Row className="contact-form-row">
        {/* Left Info Section */}
        <Col md={5} className="contact-icons-left">
          <div className="info-item">
            <MdPerson className="info-icon" />
            <div>
              <strong>Name :</strong>
              <p>Ishu</p>
            </div>
          </div>
          <div className="info-item">
            <MdLocationOn className="info-icon" />
            <div>
              <strong>Address :</strong>
              <p>New Delhi, India</p>
            </div>
          </div>
          <div className="info-item">
            <MdEmail className="info-icon" />
            <div>
              <strong>Email :</strong>
              <p>
                <a href="mailto:ishupatel3426@gmail.com">
                  ishupatel3426@gmail.com
                </a>
              </p>
            </div>
          </div>
        </Col>

        {/* Right Form Section */}
        <Col md={6}>
          <Form onSubmit={handleSubmit} className="contact-form">

            <Form.Group className="mb-4 d-flex align-items-center">
              <Form.Label className="inline-label">Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4 d-flex align-items-center">
              <Form.Label className="inline-label">Email :</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4 d-flex align-items-center">
              <Form.Label className="inline-label">Phone No :</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4 d-flex align-items-center">
              <Form.Label className="inline-label">Message :</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
