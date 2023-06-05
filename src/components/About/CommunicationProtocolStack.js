import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiPytorch, SiTensorflow, SiSpacy, SiScikitlearn, SiHttpie, SiGraphql, SiApachekafka, SiSocketdotio,
} from "react-icons/si";
import {ImPointRight} from "react-icons/im";

function CommunicationProtocolStack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                REST
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                gRPC
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGraphql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiApachekafka/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                MQTT
            </Col>
        </Row>
    );
}

export default CommunicationProtocolStack;