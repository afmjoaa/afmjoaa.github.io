import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import MlStack from "./MlStack";
import SdkFrameworkStack from "./SdkFramworkStack";
import DatabaseStack from "./DatabaseStack";
import CloudPlatformStack from "./CloudPlatformStack";
import ProgrammingLangStack from "./ProgrammingLangStack";
import CommunicationProtocolStack from "./CommunicationProtocolStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Machine Learning <strong className="purple">Libraries </strong>
        </h1>

        <MlStack />

        <h1 className="project-heading">
          Sdk & <strong className="purple">Frameworks </strong>
        </h1>

        <SdkFrameworkStack />

        <h1 className="project-heading">
          Databases <strong className="purple"> </strong>
        </h1>

        <DatabaseStack />

        <h1 className="project-heading">
          Cloud <strong className="purple">Platforms </strong>
        </h1>

        <CloudPlatformStack />

        <h1 className="project-heading">
          Communication <strong className="purple">Protocols </strong>
        </h1>

        <CommunicationProtocolStack />

        <h1 className="project-heading">
          Programming <strong className="purple">Languages </strong>
        </h1>

        <ProgrammingLangStack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
