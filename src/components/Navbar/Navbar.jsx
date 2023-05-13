import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import '../../styles/navbar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="50px"
            height="60px"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-Links ms-auto">
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/scudetto" >Scudetto</Nav.Link>
            <Nav.Link href="/copitalia">CoppaItali</Nav.Link>
            <Nav.Link href="/news"  >News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
