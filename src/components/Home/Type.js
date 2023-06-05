import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software & Solution Engineer",
          "Large Language Model Researcher",
          "Open Source Contributor",
          "Traveller",
          "Music Enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
