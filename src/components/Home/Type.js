import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "PhD Student",
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
