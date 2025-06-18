import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function Leetcode() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Profile
      </h1>
      <Col md={6} className="d-flex justify-content-center">
        <Card style={{ width: "22rem", textAlign: "center", background: "#1e1e2f", color: "white" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "1.5rem" }}>Patel_ishu_024</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button
              variant="primary"
              href="https://leetcode.com/u/Patel_ishu_024/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#FFA116", border: "none" }}
            >
              View LeetCode Profile
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Leetcode;
