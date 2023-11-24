import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
// import './App.css';
import AllStudyPlans from './AllStudyPlans';
const CardList = ({ filteredCards }) => {
  return (
    <Col md={8}>
      {filteredCards.map((card) => (
        <div key={card.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            {/* Add other card details as needed */}
          </div>
        </div>
      ))}
    </Col>
  );
};

const SearchBar = ({ handleSearch, handleFilterChange }) => {
  return (
    <Form className="mb-3">
      <FormControl
        type="text"
        placeholder="Search..."
        className="mb-2 mr-sm-2"
        onChange={handleSearch}
      />
 
      {/* Add other filter options */}
      <Button variant="primary" className="mb-2">Search</Button>
    </Form>
  );
};

const Filters = ({ handleFilterChange }) => {
    return (
      <Col md={4}>
        <h3>Filters</h3>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control as="select" onChange={(e) => handleFilterChange('location', e.target.value)}>
            <option value="">All Locations</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
            {/* Add other location options */}
          </Form.Control>
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Subjects</Form.Label>
          <Form.Control as="select" onChange={(e) => handleFilterChange('subject', e.target.value)}>
            <option value="">All Subjects</option>
            <option value="subject1">Subject 1</option>
            <option value="subject2">Subject 2</option>
            {/* Add other subject options */}
          </Form.Control>
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => handleFilterChange('date', e.target.value)} />
        </Form.Group>
  
        <Form.Group>
          <Form.Label>Number of Members</Form.Label>
          <Form.Control type="number" onChange={(e) => handleFilterChange('members', e.target.value)} />
        </Form.Group>
      </Col>
    );
  };

const App = () => {
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
  const [cards, setCards] = useState([]); // Your card data
  const [filteredCards, setFilteredCards] = useState(cards);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    subject: '',
    // Add other filters here (date, number of members)
  });

  useEffect(() => {
    const filtered = cards.filter((card) => {
      return (
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filters.location === '' || card.location === filters.location) &&
        (filters.subject === '' || card.subject === filters.subject)
        // Add other filter conditions here
      );
    });

    setFilteredCards(filtered);
  }, [cards, searchTerm, filters]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  return (
    <Container>
      <Row>
      <SearchBar handleSearch={handleSearch} handleFilterChange={handleFilterChange} />
    
      </Row>
      <Row>
      <Col  md={4} className="align-items-left">
      
      <Filters handleFilterChange={handleFilterChange} />
        </Col>
        <Col  md={8}>
     
        <CardList filteredCards={filteredCards} />
        <AllStudyPlans studyPlans={posts} itemsPerPage={12} /> 
        </Col>
      </Row>
    </Container>
  );
};

export default App;
