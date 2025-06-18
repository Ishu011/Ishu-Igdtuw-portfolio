import React from "react";
import Button from "react-bootstrap/Button";

function Certificates() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    padding: "40px 80px",
    background: "linear-gradient(to bottom right, #0d0d0d, #1a1a1a)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#fff",
  };

  const titleStyle = {
    fontSize: "3.2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#b84dff",
    textShadow: "2px 2px 10px rgba(184, 77, 255, 0.4)",
  };

  const descriptionStyle = {
    fontSize: "1.25rem",
    color: "#cccccc",
    marginBottom: "40px",
    maxWidth: "800px",
    lineHeight: "1.8",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const buttonStyle = {
    padding: "19px 30px",
    fontSize: "1.1rem",
    borderRadius: "8px",
    transition: "all 0.3s ease-in-out",
    backgroundColor: "#b84dff",
    border: "none",
    color: "#fff",
    fontWeight: "500",
    width: "260px",
    boxShadow: "0 4px 12px rgba(184, 77, 255, 0.3)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>📜 Certificates and Achievements</h2>
      <p style={descriptionStyle}>
        Here's a collection of my verified certificates from various tech platforms and programs. Each one represents my dedication to continuous learning and excellence in technology.
      </p>
      <div style={buttonContainerStyle}>
        <Button
          style={buttonStyle}
          href="https://drive.google.com/file/d/145IK7tBWPaAx9YnBp8btXH3RQzq964dA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Techip Energies India Scholar 2023
        </Button>

        <Button
          style={buttonStyle}
          href="https://drive.google.com/file/d/1nVZD4c93yvtpZKZe9xtwke3ImVEXIXOw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Python And Machine Learning Intern
        </Button>

        <Button
          style={buttonStyle}
          href="https://drive.google.com/file/d/1tT9hQdS0sJw54brYqE39ExmuxrxbiBgw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          In Top GDG-Contributor – IGDTUW
        </Button>

        <Button
          style={buttonStyle}
          href="https://drive.google.com/file/d/1guxV9NfPU3RQfRPFBFQMK4pBFHXCyO5X/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tata Imagination Challenge 2024 (2nd Round)
        </Button>

        <Button
          style={buttonStyle}
          href="https://drive.google.com/file/d/1guxV9NfPU3RQfRPFBFQMK4pBFHXCyO5X/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Project Admin  
          SWOC-2025
        </Button>
        
        <Button
          style={buttonStyle}
          href="https://www.cloudskillsboost.google/profile/badges"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Cloud Arcade 2024 - Earned Advanced Milestone Swags
        </Button>

        <Button
          style={buttonStyle}
          href="https://drive.google.com/file/d/1GYs0Expg-MWyOxO4w0zQZDOGDj8uNH5e/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prasunet Company - Data Science Intern
        </Button>
      </div>
    </div>
  );
}

export default Certificates;
