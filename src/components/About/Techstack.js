import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiTensorflow,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <CgCPlusPlus size={70} color="#fff" />, name: "C++", bg: "#00599C" },
    { icon: <DiJavascript1 size={90} color="#000" />, name: "JavaScript", bg: "#F0DB4F" },
    { icon: <SiTensorflow size={70} color="#fff" />, name: "Machine Learning", bg: "#FF6F00" },
    { icon: <DiNodejs size={70} color="#fff" />, name: "Node.js", bg: "#68A063" },
    { icon: <DiReact size={90} color="#000" />, name: "React.js", bg: "#61DAFB" },
    { icon: <SiHtml5 size={60} color="#fff" />, name: "HTML5", bg: "#E34F26" },
    { icon: <SiCss3 size={60} color="#fff" />, name: "CSS3", bg: "#264DE4" },
    { icon: <DiMongodb size={70} color="#fff" />, name: "MongoDB", bg: "#47A248" },
    { icon: <SiNextdotjs size={90} color="#fff" />, name: "Next.js", bg: "#000000" },
    { icon: <DiGit size={90} color="#fff" />, name: "Git", bg: "#F1502F" },
    { icon: <SiFirebase size={80} color="#000" />, name: "Firebase", bg: "#FFCA28" },
    { icon: <SiRedis size={70} color="#fff" />, name: "Redis", bg: "#DC382D" },
    { icon: <SiPostgresql size={60} color="#fff" />, name: "PostgreSQL", bg: "#336791" },
    { icon: <DiPython size={80} color="#fff" />, name: "Python", bg: "#3776AB" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col xs={4} md={2} className="tech-icons text-center" key={idx}>
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "100%",
              backgroundColor: tech.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            {tech.icon}
          </div>
          <div style={{ marginTop: "10px", fontSize: "18px", color: "#ffffff" }}>
            {tech.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
