import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Account Abstraction</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Plocies</Nav.Link>
            <Nav.Link >Terms & Condition</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  )
}

export default Footer