import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const MyNavbar = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <Navbar bg={theme} variant={theme} expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <i className="bi bi-emoji-smile me-2" />
          Shithead
          <i className="bi bi-emoji-angry ms-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#rules">Rules</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#game">Game</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#tests">Tests</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tips</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Support</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={toggleTheme}>
              <i className={`bi bi-${theme === 'light' ? 'moon' : 'sun'}`}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
