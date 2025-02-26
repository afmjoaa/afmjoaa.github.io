import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi everyone, I am <span className="purple">Mohimenul Joaa</span> from Dhaka, Bangladesh.
            <br/><br/> I have completed my MSc in Computer Science and Engineering from BRAC University.
            My thesis, supervised by Dr. Farig Yousuf Sadeque, explored neuro-symbolic generative models in applied NLP.
            <br/><br/> Previously, I worked as a Software & Solution Engineer at bKash Limited and as a Research
            Assistant at BRAC University under Prof. Dr. Swakkhar Shatabda.
            <br/><br/> Currently, I am pursuing my doctoral research at <span className="purple">Technische Universität Dresden, Germany</span> supervised by Prof. Dr. Michael Färber & Prof. Dr. Wolfgang E. Nagel, supported by the NHR Graduate School Fellowship.
            My research focuses on developing an HPC interface for active real-time learning using AutoML while
            preventing concept drift.
            <br/>
            <br/>
            Apart from research and programming, I love to,
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
