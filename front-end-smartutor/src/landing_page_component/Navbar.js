

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {  Navbar,Container, Nav, Button,  Row, Col, Card, Pagination } from 'react-bootstrap';
import SignUpModal from './SignupForm';
import LoginModal from './LoginForm';
import { Link } from 'react-router-dom';
import logo from './logo_smarttutor.svg';
const LNavbar = () => {


  return (
  
    <div className="App">
      {/* Navbar */}
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logo}
              height="25"
              alt=""
              loading="lazy"
              style={{ marginTop: '-3px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarExample01" />
          <Navbar.Collapse id="navbarExample01">
            <Nav className="me-auto">
            <Link to="/landingpage" className="me-3" style={{textDecoration: 'none', color: 'grey'}}>Home</Link>

<Link to="/quiz" className="me-3" style={{textDecoration: 'none', color: 'grey'}}>
  Quiz Generator
</Link>

<Link to="/summary" className="me-3" style={{textDecoration: 'none', color: 'grey'}}>
  Summary Generator
</Link>
            </Nav>
            <Nav className="d-flex flex-row">
   
              <Nav.Link>
      <SignUpModal />
    </Nav.Link>
    <Nav.Link>
      <LoginModal />
    </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default LNavbar;