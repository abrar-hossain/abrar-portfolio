import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navbars = () => {
    return (
        <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand style={{ color: 'white',fontSize: '30px' }} href="/home">Abrar Hossain</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link style={{ color: 'white',fontSize: '20px' }} href="/home">Home</Nav.Link>
              <Nav.Link style={{ color: 'white', fontSize: '20px' }} href="/about">About</Nav.Link>
              <Nav.Link style={{ color: 'white',fontSize: '20px' }} href="/contact">Contact</Nav.Link>
              <Nav.Link style={{ color: 'white',fontSize: '20px' }} href="/projects">Projects</Nav.Link>
              <Nav.Link style={{ color: 'white',fontSize: '20px' }} href="/problemSolving">Problem Solving</Nav.Link>
              <Nav.Link style={{ color: 'white',fontSize: '20px' }} href="/blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navbars;