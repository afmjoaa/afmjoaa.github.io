import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohimenul Joaa </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br /> I am a final year student pursuing my Masters of Science
            in Computer science engineering and Artificial Intelligence at Brac University.
            <br />
            Additionally, I am currently employed as a software & solution engineer at
            bKash Limited.
            <br />
            <br />
            Apart from coding, I love to,
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hike Mountains
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel new cities
            </li>
            <li className="about-activity">
              <ImPointRight /> Flying aeroplane
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you keep on doing what you've always done, you will keep getting what you've always gotten."{" "}
          </p>
          <footer className="blockquote-footer">Henry Ford.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
