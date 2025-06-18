import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#fff" }}>
      <Typewriter
        options={{
          strings: [
            "Aspiring Software Engineer",
            "Web Developer",
            "MERN Stack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
