import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hii Everyone👋🏻, <br></br>I am <span className="purple">ISHU</span> from{" "}
            <span className="purple">Delhi, India</span>.
            <br />
            I'm currently pursuing my B.Tech from{" "}
            <span style={{ color: "#bb68fc", fontWeight: "bold" }}>
              Indira Gandhi Delhi Technical University for Women (IGDTUW)
            </span>
            , where my passion for technology has led me to explore and grow across domains like{" "}
            <span className="purple">Web Development</span>,{" "}
            <span className="purple">Machine Learning</span>,{" "}
            <span className="purple">AI</span>, and a strong interest in{" "}
            <span className="purple">Coding and Data Structures & Algorithms (DSA)</span>.
            <br />
            <br />
            I’m deeply enthusiastic about building meaningful digital experiences, solving real-world problems with code, and constantly learning new frameworks and tools that drive innovation.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I'm driven by curiosity, creativity, and a strong belief in technology's power to create a better future."
          </p>
          <footer className="blockquote-footer">Ishu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
