import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ner from "../../Assets/Projects/ner.png";
import godb from "../../Assets/Projects/godb.png";
import weather from "../../Assets/Projects/weather.png";
import curiouslearner from "../../Assets/Projects/curiouslearner.png";
import tboard from "../../Assets/Projects/tboard.png";
import infai from "../../Assets/Projects/infai.png";
import streetstat from "../../Assets/Projects/streetstat.png";
import dume from "../../Assets/Projects/dume.png";
import emed from "../../Assets/Projects/emed.png";

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
                            imgPath={tboard}
                            isBlog={false}
                            title="TBoard - Taklami Keyboard"
                            description="Tboard is a smart keyboard that ensures consistent Bangla-to-English transliteration using a rule-based algorithm. It also corrects misspellings in both transliterated Bangla and English, making writing clearer and more accurate."
                            demoLink="https://infai.xyz/td-search"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={curiouslearner}
                            isBlog={false}
                            title="Curious Learner - Function Executing Chatbot"
                            description="Curious Learner is a function-executing chatbot designed to process natural language commands with precision. Using a neuro-symbolic approach, it identifies the right functions and parameters to execute tasks efficiently, making interactions more intuitive and intelligent."
                            demoLink="https://curious-learner-cms.web.app/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={infai}
                            isBlog={false}
                            title="Infai - A Customizable Website"
                            description="InfAI is a sleek, fully customizable company website powered by laravel. It allows seamless content management, enabling businesses to tailor their site effortlessly to match their brand and needs."
                            demoLink="https://infai.xyz/"
                        />
                    </Col>

                </Row>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={godb}
                            isBlog={false}
                            title="GODB - A Graph Object Database"
                            description="Features a distributed and concurrent database with transactional processing and deadlock avoidance capabilities, providing reliable and consistent data management in large-scale scenarios. Unique feature of this database is its utilization of JSON-schema to create GraphQL types, allowing for efficient traversal and querying of entities as graph objects."
                            ghLink="https://github.com/afmjoaa/GODB"
                            demoLink="https://drive.google.com/file/d/1q99hiLog_6_OqcATi9ONLWN-jTvRpQSE/view"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={streetstat}
                            isBlog={false}
                            title="Street Stat"
                            description="StreetStat is a smart road safety app that uses accelerometer and gyroscope data to automatically detect potholes and provide early warnings. It also enables real-time reporting of road hazards, helping drivers navigate safer routes."
                            ghLink="https://github.com/Roger-s-project/rogers-app"
                            demoLink="https://www.youtube.com/watch?v=58wcecB_9TA& ab_channel=MohimenulJoaa"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ner}
                            isBlog={false}
                            title="NER - Named Entity Recognition"
                            description="A variety of approaches were attempted to solve Named Entity Recognition. Including Dense Neural Network, LSTM, GRU, Transformer, BERT based Encoder, T5, Roberta, and Electra. The aim of these attempts was to identify the most effective approach for Named Entity Recognition."
                            ghLink="https://github.com/afmjoaa/named-entity-recognition"
                        />
                    </Col>

                </Row>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={weather}
                            isBlog={false}
                            title="Weather App - Clear Architecture"
                            description="Retrieve current weather data from RESTful API and cache it for later viewing. Supported platforms: Android, iOS, Web"
                            ghLink="https://github.com/afmjoaa/weather"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={emed}
                            isBlog={false}
                            title="EMed - Online Report Delivery"
                            description="E-Med simplifies patient identification and report management. Patients can be verified via fingerprint, NID, email, or phone, while reports are securely uploaded and automatically delivered through dedicated apps."
                            demoLink="https://www.youtube.com/watch?v=ZOIz2tbo_V8& ab_channel=MohimenulJoaa"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={dume}
                            isBlog={false}
                            title="Dume - Find Mentor"
                            description="Dume is a tutor-finding app that connects students with expert home tutors based on their needs. It offers dedicated profiles for both students and mentors, flexible weekly, monthly, or coaching packages, and nine categories to find the right tutor effortlessly."
                            ghLink="https://github.com/afmjoaa/Dume-Android"
                            demoLink="https://www.youtube.com/@xumeinc1397"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;

