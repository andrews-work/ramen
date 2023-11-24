import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navmenu() {
  return (
    <Navbar bg="black" expand="xl" sticky="top" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="white-hamburger-menu" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="navmenu">
          <Nav.Link as={Link} to="/" className="text ms-3" style={{ color: 'white' }}>Home</Nav.Link>
          <Nav.Link as={Link} to="/location" className="text ms-3" style={{ color: 'white' }}>Location</Nav.Link>
          <Nav.Link as={Link} to="/about" className="text ms-3" style={{ color: 'white' }}>About</Nav.Link>
          <Nav.Link as={Link} to="/" className="text ms-3" style={{ color: 'white' }}>Menu</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navmenu;
