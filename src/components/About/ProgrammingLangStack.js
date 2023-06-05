import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiKotlin, SiCsharp, SiC, SiTypescript, SiPython, SiGo, SiDart,
} from "react-icons/si";
import {
    DiJava, DiJavascript1,
} from "react-icons/di";

function ProgrammingLangStack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKotlin/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCsharp/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiC/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPython/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGo/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDart/>
            </Col>
        </Row>
    );
}

export default ProgrammingLangStack;