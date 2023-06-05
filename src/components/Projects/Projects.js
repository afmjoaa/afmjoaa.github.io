import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ner from "../../Assets/Projects/ner.png";
import godb from "../../Assets/Projects/godb.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={godb}
                            isBlog={false}
                            title="GODB - Graph Object Database"
                            description="Features a distributed and concurrent database with transactional processing and deadlock avoidance capabilities, providing reliable and consistent data management in large-scale scenarios. Unique feature of this database is its utilization of JSON-schema to create GraphQL types, allowing for efficient traversal and querying of entities as graph objects."
                            ghLink="https://github.com/afmjoaa/GODB"
                            demoLink="https://drive.google.com/file/d/1q99hiLog_6_OqcATi9ONLWN-jTvRpQSE/view"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ner}
                            isBlog={false}
                            title="Named Entity Recognition"
                            description="A variety of approaches were attempted to solve Named Entity Recognition. Including Dense Neural Network, LSTM, GRU, Transformer, BERT based Encoder, T5, Roberta, and Electra. The aim of these attempts was to identify the most effective approach for Named Entity Recognition."
                            ghLink="https://github.com/afmjoaa/named-entity-recognition"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={weather}
                            isBlog={false}
                            title="Flutter Weather App"
                            description="Retrieve current weather data from RESTful API and cache it for later viewing. Supported platforms: Android, iOS, Web"
                            ghLink="https://github.com/afmjoaa/weather"
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
