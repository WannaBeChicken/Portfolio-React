import React from "react";
import { Container } from "react-bootstrap";
import HomeLogo from "./home-main.svg";
import Home2 from "./Home2";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <>
      <Container className="home-container">
        <Container>
          <Container className="home-text">
            <h1>Hi There!</h1>
            <h1>I'M PRATHAM AGARWAL</h1>
            <h1 className="purple typewriter">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Programmer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </h1>
          </Container>
          <Container className="home-logo">
            <img src={HomeLogo}></img>
          </Container>
        </Container>
      </Container>
      <Home2 />
    </>
  );
}

export default Home;
