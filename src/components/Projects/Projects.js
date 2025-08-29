import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.png";
import keyboard from "../../Assets/Projects/keyboard.png";
import fraud from "../../Assets/Projects/fraud.png";
import grocery from "../../Assets/Projects/grocery.png";

function Projects() {
  const descriptionStyle = { whiteSpace: "pre-line" };  

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
              title="Cinematic Genius: Movie Recommender System"
              description={`Cinematic-Genius-Movie-Recommender-System is a movie recommender system that harnesses the power of content-based filtering techniques to offer personalized movie suggestions. 
                This application not only helps users discover new movies but also provides detailed information on each recommendation, including title, release date, rating, main characters, and posters. 
                The system is powered by cutting-edge machine learning algorithms and integrates seamlessly with The Movie Database (TMDb) API for fetching up-to-date 5000+ movie details.\n`}
              ghLink="https://github.com/Ishu011/CINEMATIC-GENIUS"
              demoLink="https://cinematic-genius-by-ishu-recommender-system.streamlit.app/"
              style={descriptionStyle}
            />
          </Col>

          {/* FashionTrend */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fraud}
              isBlog={false}
              title="FashionTrend – E-Commerce Website Application"
              description={`FashionTrend is an e-commerce web application , built using React, TypeScript, Tailwind CSS, Vite, and React Router.
It showcases over 70 products across 4 categories, each with detailed product pages.
I implemented key e-commerce features like cart and wishlist management, real-time search, category and price-based filters, and secure user authentication.
My focus was on delivering a smooth, intuitive shopping experience while keeping the UI clean and modern\n`}
              ghLink="https://github.com/Ishu011/FashionTrend"
               demoLink="https://cinematic-genius-by-ishu-recommender-system.streamlit.app/"
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
