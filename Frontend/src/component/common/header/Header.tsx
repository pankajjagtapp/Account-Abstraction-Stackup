import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Login } from '../Login/Login';
import Forget from '../Modals/Forget';
import Register from '../Register/Register';

const Header = () => {

  const [show, setShow] = useState(false);
  const [logshow, logsetShow] = useState(false);
  const [forgetshow, setForgetshow] = useState(false);
  
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const loghandleClose = () => logsetShow(false);
  const loghandleShow = () => logsetShow(true);
  
  const registerhandleShow = () => logsetShow(true);
  const registerhandleClose = () => setShow(false);
  
  const handleForgetshow = () => { setForgetshow(true)}
  const handleSignUpPopshow = () => { setShow(true)}

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Account Abstraction</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Features</Nav.Link>
            <Nav.Link >Pricing</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={handleShow}>Sign UP</Button>
          <Button variant="primary" onClick={loghandleShow}>Login</Button>
        </Container>
      </Navbar>

      {/* sign in */}
      <Modal
        show={show}
        onHide={handleClose}
        className="commonModal login__popup"
        centered
      >
        <Modal.Header closeButton>Sign Up</Modal.Header>
        <div className="modalContent">
          <Register registerhandleShow={registerhandleShow} logsetShow={logsetShow} registerhandleClose={registerhandleClose} />
        </div>
      </Modal>

      {/* login */}

      <Modal
        show={logshow}
        onHide={loghandleClose}
        className="commonModal login__popup"
        centered
      >
        <Modal.Header closeButton>Login</Modal.Header>
        <div className="modalContent">
          <Login loghandleClose={loghandleClose} handleForgetshow={handleForgetshow} handleSignUpPopshow={handleSignUpPopshow} />
        </div>
      </Modal>

      <Forget
        forgetclose={() => setForgetshow(false)}
        setForgetshow={() => setForgetshow(true)}
        forgetshow={forgetshow}
      />
     
    </>
  )
}

export default Header