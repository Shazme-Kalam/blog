import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import './App.css';

function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand,">Jojo Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"  className="navbar-link">Home</Nav.Link>
            <Nav.Link href="/blogs"  className="navbar-link">Blog List</Nav.Link>
            <Nav.Link href="/about"  className="navbar-link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
