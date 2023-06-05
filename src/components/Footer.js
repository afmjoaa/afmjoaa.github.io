import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCode, AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Redesigned by Mohimenul Joaa</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/afmjoaa"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/afmjoaa/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.youtube.com/@afmjoaa"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/Joaa/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillCode />
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://twitter.com/afmjoaa"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
