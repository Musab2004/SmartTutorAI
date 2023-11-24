import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Navbar from "./HomePageNavbar"


const StudyPlanForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    books: [],
    duration: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or perform validation
    console.log(formData); // You can replace this with your submission logic
  };

  return (
    <>
    <Navbar/>
    <Form onSubmit={handleSubmit} style={{ marginTop: '100px' }}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="owner">
        <Form.Label>Owner</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter owner name"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
        />
      </Form.Group>

      {/* Books - Consider using a multi-select dropdown or checkboxes */}
      {/* Duration */}
      {/* Description */}
      {/* Image - Use a file input or dropzone component for image upload */}

      <Form.Group controlId="duration">
        <Form.Label>Duration (in days)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
};

export default StudyPlanForm;
