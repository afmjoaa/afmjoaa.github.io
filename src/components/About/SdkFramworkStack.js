import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    SiFlutter,
    SiAndroid,
    SiIos,
    SiSpringboot,
    SiNodedotjs,
    SiFlask,
    SiDjango, SiReact, SiNextdotjs, SiNginx, SiDocker, SiKubernetes, SiApachehadoop, SiJenkins,
} from "react-icons/si";

function SdkFrameworkStack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiFlutter/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiIos/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAndroid/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNodedotjs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFlask/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDjango/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNginx/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiKubernetes/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiApachehadoop/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJenkins/>
            </Col>
        </Row>
    );
}

export default SdkFrameworkStack;