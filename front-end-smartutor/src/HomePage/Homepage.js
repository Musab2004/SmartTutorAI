import React, { useState } from 'react';
import { Navbar,Container, Nav, Button, Row, Col, Card, Pagination,Dropdown } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Dashboard from '../DashBoard';
// import Navbar from "./HomePageNavbar"
import { Link } from 'react-router-dom';
import MyLearningStudyPlans from './MyLearningStudyPlans';
import AllStudyPlans from './AllStudyPlans';
import SearchStudyPlans from './SearchStudyPlans';
import CardSlider from './CardSlider';
import logo from '../landing_page_component/logo_smarttutor.svg';
function App() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


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

  const completed_posts = [
    {
        subject: 'Mathematics',
        schedule: 'Monday and Wednesday from 10:00 AM to 12:00 PM',
        description: 'Focus on calculus ',
      },
      {
        subject: 'Physics',
        schedule: 'Tuesday and Thursday from 2:00 PM to 4:00 PM',
        description: 'Covering mechanics .',
      },
      {
        subject: 'History',
        schedule: 'Friday from 3:00 PM to 5:00 PM',
        description: 'Studying ancient civilizations and world wars.',
      }
    
    // Add more study plans as needed
  ];

  const recomended_studyplans = [
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

    // Add more study plans as needed
  ];
  const latest_studyplans = [
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

    // Add more study plans as needed
  ];

  const popular_studyplans = [
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
  const [activeTab2, setActiveTab2] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab2(tabNumber);
  };
  const [hoveredCard, setHoveredCard] = useState(null); // Initialize hover state for each card

  // Function to handle hover events for a specific card
  const handleHover = (index) => {
    setHoveredCard(index);
  };
  return (
    <div className="App"  >
      {/* <Navbar /> */}
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
            <Nav.Item>
  <Nav.Link
    eventKey="home"
    onClick={() => handleTabChange('home')}
    style={{ borderBottom: activeTab === 'home' ? '4px solid lightblue' : 'none' }}
  >
    Home
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link
    eventKey="my-courses"
    onClick={() => handleTabChange('my-courses')}
    style={{ borderBottom: activeTab === 'my-courses' ? '4px solid lightblue' : 'none' }}
  >
    My Courses
  </Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link
    eventKey="explore-courses"
    onClick={() => handleTabChange('explore-courses')}
    style={{ borderBottom: activeTab === 'explore-courses' ? '4px solid lightblue' : 'none' }}
  >
    Explore Courses
  </Nav.Link>
</Nav.Item>
            {/* <Link to="/homepage" className="me-3" style={{textDecoration: 'none', color: 'grey'}}>Home</Link>



<Link to="/createstudyplan" className="me-3" style={{textDecoration: 'none', color: 'grey'}}>
  Create StudyPlans
</Link> */}
            </Nav>
            <Nav className="d-flex flex-row">
   
   
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Dropdown className="me-3">
    <Dropdown.Toggle variant="light" id="dropdown-basic">
      <img
        src="data:image/png;base64,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"
        height="25"
        alt=""
        loading="lazy"
        style={{ borderRadius: '50%', marginRight: '5px' }}
      />
      UserName
    </Dropdown.Toggle>

    <Dropdown.Menu>
  <Link to="/profile" className="dropdown-item">
    Profile
  </Link>
  <Link to="/profile-visit" className="dropdown-item">
    Profile Visit
  </Link>
  <div className="dropdown-divider"></div>
  <Link to="/landingpage" className="dropdown-item">
    Logout
  </Link>
</Dropdown.Menu>

  </Dropdown>
      </Navbar>
      {/* Tabs */}
      {/* <Nav fill variant="tabs" defaultActiveKey="home" style={{ marginTop: '80px' }}>
    
      </Nav> */}

      {/* Main Content */}
      <main className="my-5" >
      
        <Container  >
          {activeTab === "home" && (
  <section className="bg-light" style={{marginTop:'100px'}} >
<section className="bg-light" style={{ textAlign: 'left'}} >
  
<h style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '24px',marginTop:'50px'  }}>Popular Study Plans</h>

<section className="bg-light" style={{marginTop:'50px',marginBottom:'50px'}} >


<CardSlider cards={posts} />

          </section>
          <h style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '24px' }}>Popular Study Plans</h>
          <section className="bg-light" style={{marginTop:'50px',marginBottom:'50px'}} >

         
<CardSlider cards={popular_studyplans} />

          </section>
          <h style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '24px'  }}>Latest Study Plans</h>
          <section className="bg-light" style={{marginTop:'50px'}} >
          {/* <h style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '24px' ,marginBottom:'100px' }}>Latest Study Plans</h> */}

<CardSlider cards={latest_studyplans} />

          </section>   
      
          </section>  
          </section>    
          )}
           
          {activeTab === "my-courses" && (
            <section>
              {/* Your content for "My Courses" */}
              <div> 
      <div>
        <Button onClick={() => handleTabClick(1)} className={activeTab2 === 1 ? 'active' : ''}>
          Completed
        </Button>
        <Button onClick={() => handleTabClick(2)} style={{marginLeft:'10px'}} className={activeTab2 === 2 ? 'active' : ''}>
          Still Going on
         
        </Button>
      </div>
      <div>
        {activeTab2 === 1 &&<><p>Content for Tab 1</p>  <MyLearningStudyPlans studyPlans={latest_studyplans} itemsPerPage={5} /> </> }
        {activeTab2 === 2 && <><p>Content for Tab 2</p> <MyLearningStudyPlans studyPlans={completed_posts} itemsPerPage={5} /></>}
      </div>
    </div>
             
            </section>
          )}

          {activeTab === "explore-courses" && (
            <section>
                 {/* <AllStudyPlans studyPlans={posts} itemsPerPage={12} /> */}
                 <SearchStudyPlans/>
              {/* Your content for "Explore Courses" */}
            </section>
          )}

          {/* Display posts */}
     
        </Container>
      </main>

      {/* Footer */}
      <footer className="bg-light text-lg-start">
        {/* Your existing footer content */}
      </footer>
    </div>
   );
}

export default App;
