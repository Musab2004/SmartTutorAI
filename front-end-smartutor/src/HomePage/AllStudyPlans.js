import React, { useState } from 'react';
import { Card, Pagination } from 'react-bootstrap';

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
      <div className="d-flex flex-wrap">
        {currentStudyPlans.map((studyPlan, index) => (
          <Card key={index} style={{ width: '14rem', margin: '10px' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYPxHTOtUvx8GB1mR1XfLov8CmiqxxDBW1d8p78A6Hg&s" />
            <Card.Body>
              <Card.Title>{studyPlan.subject}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{studyPlan.schedule}</Card.Subtitle>
              <Card.Text>{studyPlan.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Pagination>
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