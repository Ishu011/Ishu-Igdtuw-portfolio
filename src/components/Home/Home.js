import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/about1.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hii There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> ISHU , </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
  md={5}
  style={{ paddingBottom: 20, display: "flex", justifyContent: "center" }}
>
  <div
    style={{
      border: "4px solid #6c63ff", 
      borderRadius: "10px",
      padding: "2px",
      backgroundColor: "#ffffff0a", 
      maxWidth: "450px",
      boxShadow: "0 0 5.9px #6c63ff",
    }}
  >
    <img
      src={homeLogo}
      alt="home pic"
      className="img-fluid"
      style={{
        maxHeight: "400px",
        width: "100%",
        borderRadius: "8px",
        objectFit: "contain",
      }}
    />
  </div>
</Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
