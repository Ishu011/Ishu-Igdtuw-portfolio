import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaClipboardList } from "react-icons/fa"; // Placeholder icon for Take U Forward

// Badge images
import badge50 from "../../Assets/50 Days badge.png";
import badge100 from "../../Assets/100 Days badge.png";

function CodingProfiles() {
  const [showBadges, setShowBadges] = useState(false);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    textAlign: "center",
    padding: "40px 20px",
    background: "linear-gradient(to bottom right, #0d0d0d, #1a1a1a)",
    color: "#fff",
  };

  const titleStyle = {
    fontSize: "2.8rem",
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

  const profileButtonStyle = {
    padding: "12px 20px",
    fontSize: "1.1rem",
    borderRadius: "10px",
    transition: "all 0.3s ease-in-out",
    backgroundColor: "#1e1e1e",
    border: "1px solid #b84dff",
    color: "#fff",
    fontWeight: "500",
    width: "300px",
    boxShadow: "0 4px 12px rgba(184, 77, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "15px",
    textAlign: "left",
  };

  const iconCircle = {
    width: "100px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const badgeToggleStyle = {
    marginTop: "40px",
    backgroundColor: "#b84dff",
    border: "none",
    fontSize: "1rem",
    padding: "52px 24px",
    borderRadius: "8px",
    fontWeight: "600",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(184, 77, 255, 0.3)",
  };

  const badgeContainerStyle = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  };

  const badgeImageStyle = {
    width: "180px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>💻 Coding Profiles</h2>
      <p style={descriptionStyle}>
        Here are my active profiles on top coding platforms. These reflect my
        problem-solving skills and continuous learning.  I enjoy solving problems, taking on challenges, and leveling up my DSA.
      </p>

      <div style={buttonContainerStyle}>
        <Button
          style={profileButtonStyle}
          href="https://leetcode.com/Patel_ishu_024/"
          target="_blank"
          rel="noreferrer"
        >
          <div style={iconCircle}>
            <SiLeetcode size={55} color="#FFA116" />
          </div>
          LeetCode (Patel_ishu_024)
        </Button>

        <Button
          style={profileButtonStyle}
          href="https://www.geeksforgeeks.org/user/ishupatel04/"
          target="_blank"
          rel="noreferrer"
        >
          <div style={iconCircle}>
            <SiGeeksforgeeks size={65} color="#2F8D46" />
          </div>
          GeeksforGeeks (ishu011)
        </Button>

        <Button
          style={profileButtonStyle}
          href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
          target="_blank"
          rel="noreferrer"
        >
          <div style={iconCircle}>
            <FaClipboardList size={50} color="#9146FF" />
          </div>
          Take U Forward DSA Sheet
        </Button>
      </div>

      <button style={badgeToggleStyle} onClick={() => setShowBadges(!showBadges)}>
        {showBadges ? "Hide LeetCode Badges" : "Show LeetCode Badges"}
      </button>

      {showBadges && (
        <div style={badgeContainerStyle}>
          <img src={badge50} alt="LeetCode 50 Days Badge" style={badgeImageStyle} />
          <img src={badge100} alt="LeetCode 100 Days Badge" style={badgeImageStyle} />
        </div>
      )}
    </div>
  );
}

export default CodingProfiles;
