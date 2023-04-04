import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { HashLink as Link } from "react-router-hash-link";
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
  const [expand, updateExpanded] = React.useState(false);
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
      {/* <Header /> */}
      {/* <Content /> */}
      <Navbar
        expanded={expand}
        className={issticky && "sticky"}
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Pratham</Navbar.Brand>
          {/* <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} smooth to="#home" onClick={() => updateExpanded(false)}>
                <AiOutlineHome className="icon" />
                Home
              </Nav.Link>
              <Nav.Link as={Link} smooth to="#about" onClick={() => updateExpanded(false)}> 
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
