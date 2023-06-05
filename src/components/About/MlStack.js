import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiPytorch, SiTensorflow, SiSpacy, SiScikitlearn,
} from "react-icons/si";

function MlStack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiPytorch/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpacy/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiScikitlearn/>
            </Col>
        </Row>
    );
}

export default MlStack;