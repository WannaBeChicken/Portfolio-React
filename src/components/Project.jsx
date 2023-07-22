import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { DiLinux } from "react-icons/di";
import {
    SiGooglechrome,
    SiVisualstudiocode,
} from "react-icons/si";
import cookit from "./images/cookit.jpeg";
import portfolio1 from "./images/port.png";
import portfolio2 from "./images/portfolio2.jpeg";


function Project() {
  return (
    <Container className="projects skillset toolset" id="project">
      <div>
        <h1 className='purple'>PROJECTS</h1>
        <p>Here are a few projects I've worked on recently</p>
      </div>
      <Row>
        <Col>
          <img className="project-icon" src={portfolio1} />
          <button><a href='https://github.com/WannaBeChicken/WannaBeChicken.github.io' target="_blank">Portfolio </a></button>
        </Col>
        <Col>
        <img className="project-icon" src={portfolio2} />
          <button><a href='https://github.com/WannaBeChicken/Portfolio-React' target="_blank">Advanced Portfolio</a></button>
        </Col>
        <Col>
        <img className="project-icon" src={cookit} />
          <button><a href='https://github.com/WannaBeChicken/project2' target="_blank">CookIt </a></button>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
