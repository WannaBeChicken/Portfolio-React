import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { HashLink as Link } from "react-router-hash-link";
import ScrollToHashElement from "./ScrollToHashElement";
// import Header from "./Header";
// import Content from "./Content";
import {
  AiOutlineAudit,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [issticky, updateNavbar] = React.useState(false);
  function checkIfSticky() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", checkIfSticky);
  
  return (
    
    <Container className="navbar-container">
      <ScrollToHashElement />
      {/* <Header /> */}
      {/* <Content /> */}
      <Navbar className={issticky && "sticky"} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pratham</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} smooth to="#home">
              <AiOutlineHome className="icon" />
              Home
            </Nav.Link>
            <Nav.Link as={Link} smooth to="#about">
              <AiOutlineUser className="icon" />
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/project">
              <AiOutlineFundProjectionScreen className="icon" />
              Project
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              <AiOutlineAudit className="icon" />
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              <AiOutlineAudit className="icon" />
              Resume
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
