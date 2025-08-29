import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ishu.jpg.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={12}
            className="home-about-description"
            style={{ textAlign: "center" }}
          >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ fontSize: "1.2em" }}>
              My journey into programming began with curiosity and has grown into a deep passion for building real-world solutions using technology. And I am loving it! 🤷‍♂️
              <br />
              <br />
              I'm proficient in{" "}
              <b className="purple">C++, Python, HTML, CSS, JavaScript, and ReactJS</b>, 
              and have hands-on experience in{" "}
              <b className="purple">Web Development, Machine Learning, and Deep Learning</b>.
              <br />
              <br />
              My fields of interest include building new{" "}
              <b className="purple">Web Development</b> projects,{" "}
              <b className="purple">Machine Learning</b> models, and{" "}
              <b className="purple">AI-driven applications</b>.
              <br />
              <br />
              I'm constantly exploring new technologies and love building intelligent and impactful projects.
              <br />
              <br />
              I enjoy developing solutions using{" "}
              <b className="purple">Python</b> and{" "}
              <b className="purple">Machine Learning frameworks</b>, and also building dynamic, responsive web apps using{" "}
              <b className="purple">Node.js</b>,{" "}
              <b className="purple">Flask</b>, and modern JavaScript libraries like{" "}
              <b className="purple">React.js</b> and{" "}
              <b className="purple">Next.js</b>.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            md={12}
            className="home-about-social"
            style={{ textAlign: "center" }}
          >
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul
              className="home-about-social-links"
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <li className="social-icons">
                <a
                  href="https://github.com/Ishu011"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/ishu_patel_004"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ishu-36268b314/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn size={30} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/im_ishu_pt93"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram size={30} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
