import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiFirebase,
} from "react-icons/si";

function CloudPlatformStack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiAmazonaws/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMicrosoftazure/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGooglecloud/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase/>
            </Col>
        </Row>
    );
}

export default CloudPlatformStack;