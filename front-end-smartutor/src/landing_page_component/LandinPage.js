import React , { useState } from 'react';
import {  Container, Nav, Button,  Row, Col, Card, Pagination } from 'react-bootstrap';
import '../App.css'; // Import the Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css';
import Dashboard from '../DashBoard';
import Navbar from "./Navbar"
import { Link } from 'react-router-dom';
import landingpage_image from './pic4.jpg';
import landingpage_gif from './landingpage.gif';
function App() {


    const posts = [
        {
            subject: 'Mathematics',
            schedule: 'Monday and Wednesday from 10:00 AM to 12:00 PM',
            description: 'Focus on calculus and algebra.',
          },
          {
            subject: 'Physics',
            schedule: 'Tuesday and Thursday from 2:00 PM to 4:00 PM',
            description: 'Covering mechanics and electromagnetism topics.',
          },
          {
            subject: 'History',
            schedule: 'Friday from 3:00 PM to 5:00 PM',
            description: 'Studying ancient civilizations and world wars.',
          },
          {
            subject: 'Biology',
            schedule: 'Monday and Wednesday from 1:00 PM to 3:00 PM',
            description: 'Exploring ecology and genetics.',
          },
          {
            subject: 'Computer Science',
            schedule: 'Thursday from 10:00 AM to 12:00 PM',
            description: 'Programming and algorithms practice.',
          },
          {
            subject: 'Literature',
            schedule: 'Saturday from 4:00 PM to 6:00 PM',
            description: 'Reading and analyzing classic literature.',
          },
        // Add more study plans as needed
      ];
      const postsPerPage = 4;
      const [currentPage, setCurrentPage] = useState(1);
    
      // Calculate the start and end indices for the current page
      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const currentPosts = posts.slice(startIndex, endIndex);
    
      // Function to handle page change
      const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
    
  return (
  

    <div className="App">
      {/* Navbar */}
      {/* <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="https://mdbootstrap.com/docs/standard/">
            <img
              src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
              height="16"
              alt=""
              loading="lazy"
              style={{ marginTop: '-3px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarExample01" />
          <Navbar.Collapse id="navbarExample01">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                target="_blank"
                rel="nofollow"
              >
                Learn Bootstrap 5
              </Nav.Link>
              <Nav.Link href="https://mdbootstrap.com/docs/standard/" target="_blank">
                Download MDB UI KIT
              </Nav.Link>
            </Nav>
            <Nav className="d-flex flex-row">
              <Nav.Link
                href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-youtube"></i>
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com/mdbootstrap" target="_blank" rel="nofollow">
                <i className="fab fa-facebook-f"></i>
              </Nav.Link>
              <Nav.Link href="https://twitter.com/MDBootstrap" target="_blank" rel="nofollow">
                <i className="fab fa-twitter"></i>
              </Nav.Link>
              <Nav.Link
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                target="_blank"
                rel="nofollow"
              >
                <i className="fab fa-github"></i>
              </Nav.Link>
              <Nav.Link>
      <SignUpModal />
    </Nav.Link>
    <Nav.Link>
      <LoginModal />
    </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
<Navbar/>
      {/* Jumbotron */}
      <Container id="intro" className="text-center bg-light" style={{ marginTop: '100px' ,height:'200px'}} >
        <div >
        <h1 className="mb-3 h2" >SmartTutor AI</h1>
    
        <p className="mb-3">AI based Tutoring App to cater all your needs</p>
        <Button 
          href="https://www.youtube.com/watch?v=c9B4TPnak1A"
          role="button"
          target="_blank"
          rel="nofollow"
          variant="primary"
          className="m-2"
        >
          Create a plan
        </Button>
        <Link to="/dashboard" >
        <Button  className="m-2">
          Go to Dashboard
        </Button>
      </Link>
      </div>
      </Container>
      <Container fluid style={{ backgroundColor: '#f2f2f2' }}>
      <Row style={{}}>
        <Col md={6}  style={{marginTop:'5%' ,marginBottom:'5%'}} >
        <img
  src={landingpage_image}
  alt="Your Image"
  className="img-fluid"
  style={{
    border: '2px solid #ccc',
    borderRadius: '10%',
    width: '500px', // Set the width
    height: '300px', // Set the height
  }}
/>
        </Col>
        <Col md={6}>
          <div className="right-container" style={{marginTop:'5%' }}>
          <div className="left-container" style={{textAlign:'left',marginTop:'5%' ,marginLeft:'10%' }}>
          <p >SmartTutor AI</p>
          <h2 style={{ fontSize: '44px', fontWeight: 'bold' }}>What we provide</h2>

            <p>we aim to provde following stuff to our users</p>
            <ul>
              <li>Personalized Study Plans</li>
              <li>AI Quiz Generation</li>
              <li>AI Summary Generation</li>
              <li>Community</li>
              {/* Add more points as needed */}
            </ul>
          </div>
      
          </div>
        </Col>
      </Row>
    </Container>
  
    <Container fluid style={{ backgroundColor: '#f2f2f2' }}>
      <Row style={{}}>
        <Col md={6}  style={{marginTop:'5%' ,marginBottom:'5%'}} >
        <div className="right-container" style={{marginTop:'5%' }}>
          <div className="left-container" style={{textAlign:'left',marginTop:'5%' ,marginLeft:'10%' }}>
          <p >SmartTutor AI</p>
          <h2 style={{ fontSize: '44px', fontWeight: 'bold' }}>What we provide</h2>

            <p>Get Personalized Study Plans</p>
            <ul>
              <li>Personalized Study Plans</li>
              <li>AI Quiz Generation</li>
              <li>AI Summary Generation</li>
              <li>Community</li>
              {/* Add more points as needed */}
            </ul>
            <Button  className="m-2">
          Try Out
        </Button>
          </div>
      
      
          </div>
        </Col>
        <Col md={6} style={{marginTop:'5%' ,marginBottom:'5%'}} >
      
          {/* <img
  src={landingpage_image}
  alt="Your Image"
  className="img-fluid"
  style={{
    border: '2px solid #ccc',
    borderRadius: '10%',
    width: '500px', // Set the width
    height: '300px', // Set the height
  }}
/> */}
      <img
  src={landingpage_gif}
  alt="Your Image"
  className="img-fluid"
  style={{
    border: '2px solid #ccc',
    borderRadius: '10%',
    width: '500px', // Set the width
    height: '300px', // Set the height
  }}
/>

        </Col>
      </Row> 
    </Container>
    <Container fluid style={{ backgroundColor: '#f2f2f2' }}>
      <Row style={{}}>
        <Col md={6}  style={{marginTop:'5%' ,marginBottom:'5%'}} >
        {/* <img
  src={landingpage_image}
  alt="Your Image"
  className="img-fluid"
  style={{
    border: '2px solid #ccc',
    borderRadius: '10%',
    width: '500px', // Set the width
    height: '300px', // Set the height
  }}
/> */}
      <img
  src={landingpage_gif}
  alt="Your Image"
  className="img-fluid"
  style={{
    border: '2px solid #ccc',
    borderRadius: '10%',
    width: '500px', // Set the width
    height: '300px', // Set the height
  }}
/>
        </Col>
        <Col md={6} style={{marginTop:'5%' ,marginBottom:'5%'}} >
          <div className="right-container" style={{marginTop:'5%' }}>
          <div className="left-container" style={{textAlign:'left',marginTop:'5%' ,marginLeft:'10%' }}>
          <p >SmartTutor AI</p>
          <h2 style={{ fontSize: '44px', fontWeight: 'bold' }}>AI Quiz generation of Content</h2>

            <p>we aim to provde following stuff to our users</p>
            <ul>
              <li>Personalized Study Plans</li>
              <li>AI Quiz Generation</li>
              <li>AI Summary Generation</li>
              <li>Community</li>
              {/* Add more points as needed */}
            </ul>
            <Button  className="m-2">
          Try Out
        </Button>
          </div>
          </div>
      
        </Col>
      </Row>
    </Container>
  



      {/* Footer */}
      <footer className="bg-light text-lg-start">
        <Container>
   
          <hr />
          <div className="text-center py-4 align-items-center">
            <p>Follow MDB on social media</p>
            <Button
              variant="primary"
              className="m-1"
              href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
              rel="nofollow"
              target="_blank"
            >
              <i className="fab fa-youtube"></i>
            </Button>
            <Button variant="primary" className="m-1" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </Button>
            <Button variant="primary" className="m-1" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
              <i className="fab fa-twitter"></i>
            </Button>
            <Button
              variant="primary"
              className="m-1"
              href="https://github.com/mdbootstrap/mdb-ui-kit"
              rel="nofollow"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </Button>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
