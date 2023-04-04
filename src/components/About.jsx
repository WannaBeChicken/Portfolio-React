import React from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import About2 from "./About2";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiHtml5,
} from "react-icons/di";
function About() {
  return (
    <Container id="about">
      <Container className="skillset">
        <p>Profession <strong className="purple">Skillset</strong></p>
        <Row>
          <Col>
            <DiNodejs className="skill-icon" />
          </Col>
          <Col>
            <DiReact className="skill-icon" />
          </Col>
          <Col>
            <DiJavascript1 className="skill-icon" />
          </Col>
          <Col>
            <DiMongodb className="skill-icon" />
          </Col>
          <Col>
            <DiGit className="skill-icon" />
          </Col>
          <Col>
            <DiPython className="skill-icon" />
          </Col>
          <Col>
            <CgCPlusPlus className="skill-icon" />
          </Col>
          <Col>
            <DiHtml5 className="skill-icon" />
          </Col>
        </Row>
      </Container>
      <About2 />
    </Container>
  );
}

export default About;
