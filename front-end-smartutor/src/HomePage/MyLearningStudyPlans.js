import React, { useState } from 'react';
import { Container, Nav, Button, Row, Col, Card, Pagination } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Dashboard from '../DashBoard';
import Navbar from "./HomePageNavbar"
import { Link } from 'react-router-dom';
const StudyPlans = ({ studyPlans, itemsPerPage }) => {
    const [activePage, setActivePage] = useState(1);
  
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudyPlans = studyPlans.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(studyPlans.length / itemsPerPage);
  
    const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber);
    };
  
    return (
      <div>
        {currentStudyPlans.map((studyPlan, index) => (
        //   <Card key={index} style={{ width: '18rem', margin: '10px' }}>
        //     <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYPxHTOtUvx8GB1mR1XfLov8CmiqxxDBW1d8p78A6Hg&s" />
        //     <Card.Body>
        //       <Card.Title>{studyPlan.subject}</Card.Title>
        //       <Card.Subtitle className="mb-2 text-muted">{studyPlan.schedule}</Card.Subtitle>
        //       <Card.Text>{studyPlan.description}</Card.Text>
        //     </Card.Body>
        //   </Card>
                  <Card key={index} style={{ width: '100%', margin: '10px' }}>
                  <Row>
                    <Col sm={4}>
                      <Card.Img variant="top" style={{ width: '60%', height: '60%',marginTop: '30px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYPxHTOtUvx8GB1mR1XfLov8CmiqxxDBW1d8p78A6Hg&s" />
                    </Col>
                    <Col sm={8}>
                      <Card.Body style={{textAlign:'left'}}>
                        <Card.Title >{studyPlan.subject}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{studyPlan.schedule}</Card.Subtitle>
                        <Card.Text>{studyPlan.description}</Card.Text>
                        <Button variant="primary">Go to My Studyplan</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
        ))}
        <Pagination className="justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === activePage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    );
  };

  export default StudyPlans;
