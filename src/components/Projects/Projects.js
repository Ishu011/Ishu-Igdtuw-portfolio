import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.png";
import keyboard from "../../Assets/Projects/keyboard.png";
import fraud from "../../Assets/Projects/fraud.png";
import grocery from "../../Assets/Projects/grocery.png";

function Projects() {
  const descriptionStyle = { whiteSpace: "pre-line" };  // Enables line breaks

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of the impactful and innovative projects I’ve developed using cutting-edge ML, DL, and web technologies.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Movie Recommender System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="🎬 Cinematic Genius: Movie Recommender System"
              description={`Built a personalized movie recommendation system using content-based filtering and ML techniques. It uses TMDb API for real-time movie data and offers Features: Movie search, Detailed movie info, Appearance customization options , Personalized recommendations.\n`}
              ghLink="https://github.com/Ishu011/Cinematic-Genius-Movie-Recommender-System.git"
              demoLink="https://drive.google.com/file/d/1inv4Z2lg3a93yUzuhWN6AyhlbTONuBlL/view?usp=sharing"
              style={descriptionStyle}
            />
          </Col>

          {/* Virtual Keyboard */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keyboard}
              isBlog={false}
              title="⌨️ Hand Gesture Recognition - Virtual Keyboard"
              description={`Developed a virtual keyboard controlled by hand gestures using OpenCV and MediaPipe.\n
Tracked real-time hand landmarks to map finger movements into text inputs.\n
Implemented essential functionalities like Shift, Caps Lock, and sentence prediction using deep learning.\n`}
              ghLink="https://github.com/Ishu011/Hand-Gesture-Recognition-On-Virtual-Keyboard.git"
              demoLink="https://drive.google.com/file/d/1giJcWLhKNnz4qDV8HiTLpUPWNnckGsx-/view?usp=sharing"
              style={descriptionStyle}
            />
          </Col>

          {/* Fraud Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraud}
              isBlog={false}
              title="💳 Advanced Fraud Detection in Financial Transactions"
              description={`Developed ML models to accurately detect and classify fraudulent financial transactions.\n
Used advanced data preprocessing and feature engineering to reduce false positives and improve model precision.\n
Submitted as part of PRASUNETHON Hackathon under Prasunet Company.\n`}
              ghLink="https://github.com/Ishu011/Advanced-Fraud-Detection-in-Financial-Transactions-Using-Machine-Learning.git"
              style={descriptionStyle}
            />
          </Col>

          {/* Grocery App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="🛒 SmartShopCart: Personalized Online Grocery Store"
              description={`[Ongoing Project]\n
Designing an intelligent grocery shopping platform that learns user preferences over time.\n
Planning to integrate recommendation systems, dynamic pricing, and real-time inventory tracking.\n
 Vision:\n• Personalized product feed\n• Cart optimization\n• Smart category prediction`}
              ghLink=""
              demoLink=""
              style={descriptionStyle}
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
