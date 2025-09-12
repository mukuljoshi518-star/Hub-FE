import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const HeroLeadCapture = () => {
  return (
    <div className="hero-section text-light" style={{ position: "relative" }}>
      <div className="hero-overlay">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold">
                Build Smarter Ideas with <span className="text-warning">CreativeHub</span>
              </h1>
              <p className="lead mt-3">
                Your home for innovation, collaboration, and tools that supercharge your creative journey.
              </p>
              <div className="mt-4">
                <span className="badge bg-warning text-dark fs-6">⭐ 4.9/5 rating from 2,300+ users</span>
              </div>
            </Col>

            <Col lg={6}>
              <div className="form-container bg-dark p-4 rounded shadow">
                <h4 className="mb-4 text-warning">Join the Waitlist</h4>
                <Form>
                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Label className="text-white">Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Jane Doe" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label className="text-white">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="you@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="interest">
                    <Form.Label className="text-white">What are you interested in?</Form.Label>
                    <Form.Select>
                      <option>AI Writing Tools</option>
                      <option>Design Templates</option>
                      <option>Learning Resources</option>
                      <option>All of the Above</option>
                    </Form.Select>
                  </Form.Group>
                  <Button variant="warning" type="submit" className="w-100 fw-bold">
                    Get Early Access
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Embedded styles */}
      <style jsx>{`
        .hero-section {
          background: url('https://images.unsplash.com/photo-1507537509458-b8312d35a233?q=80&w=1600&fit=crop') center/cover no-repeat;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-overlay {
          background: rgba(0, 0, 0, 0.7);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .form-container label {
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default HeroLeadCapture;
