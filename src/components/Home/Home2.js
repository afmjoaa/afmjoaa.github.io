import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCode, AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Self-taught programmer. Great fan of singularity, and do believe that automation is the future.
              Love to learn new tech stacks and trek mountains. Always try to enjoy the small things in life rather than
              saving up for later.
              <br/>
              <br/>Language isn't a barrier for me, but prefer to work with new languages, like:
              <i>
                <b className="purple"> Python, Dart, Rust, Go, Kotlin. </b>
              </i>
              <br/>
              <br/>
              My like building & designing new &nbsp;
              <i>
                <b className="purple">System, Application & Framework </b>
                in areas related to{" "}
                <b className="purple">
                  Large Language Model & Applied Natural Language Processing.
                </b>
              </i>
              <br/>
              <br/>
              My research interests include &nbsp;
              <i>
                <b className="purple">neuro-symbolic generative models, knowledge representation, AutoML, large-scale AI, few-shot learning, model compression, and approximate computing.</b>
                &nbsp;I am also eager to explore quantum computing, particularly its intersection with machine learning for quantum simulation and computation.
              </i>
              <br/>
              <br/>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/afmjoaa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/afmjoaa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.youtube.com/@afmjoaa"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/Joaa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillCode />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://twitter.com/afmjoaa"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
