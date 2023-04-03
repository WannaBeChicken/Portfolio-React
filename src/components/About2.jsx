import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { DiLinux } from "react-icons/di";
import {
    SiGooglechrome,
    SiVisualstudiocode,
  } from "react-icons/si";
function About2() {
    return (
        <Container className='skillset toolset'>
            <p>Tools I Use</p>
            <Row>
                <Col><DiLinux className='skill-icon' /></Col>
                <Col><SiVisualstudiocode className='skill-icon'/></Col>
                <Col><SiGooglechrome className='skill-icon'/></Col>
            </Row>
        </Container>
    )
}

export default About2;