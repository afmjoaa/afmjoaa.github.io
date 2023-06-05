import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiRedis, SiOracle, SiPostgresql, SiMongodb, SiApachehive,
} from "react-icons/si";

function DatabaseStack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedis/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiOracle/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMongodb/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiApachehive/>
            </Col>
        </Row>
    );
}

export default DatabaseStack;