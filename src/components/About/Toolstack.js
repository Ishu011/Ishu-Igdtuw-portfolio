import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiIntellijidea,
  SiGithub,
  SiGooglecolab,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    {
      icon: <SiIntellijidea size={40} color="#ffffff" />,
      name: "IntelliJ IDEA",
      bg: "#2C54A5",
    },
    {
      icon: <SiVisualstudiocode size={60} color="#007ACC" />,
      name: "VS Code",
      bg: "#1E1E1E",
    },
    {
      icon: <SiPostman size={90} color="#FF6C37" />,
      name: "Postman",
      bg: "#2A2A2A",
    },
    {
      icon: <SiGithub size={90} color="#ffffff" />,
      name: "GitHub",
      bg: "#333333",
    },
    {
      icon: <SiGooglecolab size={70} color="#F9AB00" />,
      name: "Google Colab",
      bg: "#1A1A1A",
    },
    {
      icon: <SiVercel size={50} color="#ffffff" />,
      name: "Vercel",
      bg: "#000000",
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons text-center" key={idx}>
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              backgroundColor: tool.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            {tool.icon}
          </div>
          <div style={{ marginTop: "10px", fontSize: "18px", color: "#ffffff" }}>
            {tool.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
