import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Doctoral Researcher",
          "Software & Solution Engineer",
          "Large Language Model Researcher",
          "Open Source Contributor",
          "Traveller",
          "Music Enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 360,
      }}
    />
  );
}

export default Type;
