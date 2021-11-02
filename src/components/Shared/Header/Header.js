import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="banner-img">
            <Navbar collapseOnSelect expand="lg">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto text-center">
      <Nav.Link className="black-white" as={Link} to="/home">Home</Nav.Link>
      <Nav.Link className="black-white" as={Link} to="">About</Nav.Link>
      <Nav.Link className="black-white" as={Link} to="">Dental Service</Nav.Link>
      <Nav.Link className="white-black" as={Link} to="">Reviews</Nav.Link>
      <Nav.Link className="white-black" as={Link} to="">Blog</Nav.Link>
      <Nav.Link className="white-black" as={Link} to="">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;