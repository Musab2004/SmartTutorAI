import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const SignupForm = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [email_address, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [current_academic_level, setCurrentAcademicLevel] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');

  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();

    if (formValid) {
      try {
        const formData = {
          name,
          email_address,
          password,
          confirmPassword,
          current_academic_level,
          city,
          location,
        };

        const response = await axios.post('http://127.0.0.1:8000/api/users/', formData);

        console.log('Data posted:', response.data);
        // Handle success, redirect user, or perform other actions upon successful form submission
      } catch (error) {
        console.error('Error posting data:', error);
        // Handle error: display error message or perform other actions
      }
    } else {
      console.log('Form has errors, cannot submit.');
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (name.trim() === '') {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (email_address.trim() === '') {
      errors.email_address = 'Email is required';
      isValid = false;
    }

    if (current_academic_level === '') {
      errors.current_academic_level = 'Academic level is required';
      isValid = false;
    }

    if (city.trim() === '') {
      errors.city = 'City is required';
      isValid = false;
    }

    if (location.trim() === '') {
      errors.location = 'Location is required';
      isValid = false;
    }

    if (password.trim() === '') {
      errors.password = 'Password is required';
      isValid = false;
    }

    if (confirmPassword.trim() === '') {
      errors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(errors);
    setFormValid(isValid);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="email_address" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email_address}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
                {errors.email_address && <p style={{ color: 'red' }}>{errors.email_address}</p>}
              </Form.Group>

              <Form.Group controlId="current_academic_level" className="mb-3">
                <Form.Label>Current Academic Level</Form.Label>
                <Form.Control
                  as="select"
                  value={current_academic_level}
                  onChange={(e) => setCurrentAcademicLevel(e.target.value)}
                >
                  <option value="highschool">High School</option>
                  <option value="middleschool">Middle School</option>
                </Form.Control>
                {errors.current_academic_level && <p style={{ color: 'red' }}>{errors.current_academic_level}</p>}
              </Form.Group>

              <Form.Group controlId="city" className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
              </Form.Group>

              <Form.Group controlId="location" className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                {errors.location && <p style={{ color: 'red' }}>{errors.location}</p>}
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
              </Form.Group>

              <Form.Group controlId="confirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
              </Form.Group>

              <div style={{ textAlign: 'center' }}>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Sign Up
                </Button>
              </div>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignupForm;
