// RedditPost.js
import React, { useState } from 'react';
import { Card, Button, Collapse,Form, FormControl ,Modal} from 'react-bootstrap';

const RedditPost = ({ post }) => {
  const [commentsOpen, setCommentsOpen] = useState(false);

  const handleToggleComments = () => {
    setCommentsOpen(!commentsOpen);
  };
  const [commentsOpen1, setCommentsOpen1] = useState(false);
  const [commentText, setCommentText] = useState('');

  const handleToggleComments1 = () => {
    setCommentsOpen1(!commentsOpen1);
  };

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };
  const [showModal, setShowModal] = useState(false);
  const [reason, setReason] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = () => {
    // Perform actions with the report reason (e.g., send report to server)
    console.log('Reported with reason:', reason);
    handleCloseModal();
  };

  return (
    <div>
      <Card style={{marginTop:'10px'}}>
        <Card.Body>
          <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '15px' }}>
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYPxHTOtUvx8GB1mR1XfLov8CmiqxxDBW1d8p78A6Hg&s"
        style={{
          borderRadius: '50%', // Makes the image round
          width: '50px', // Sets the width of the image
          height: '50px', // Sets the height of the image
          objectFit: 'cover', // Maintains the aspect ratio
        }}
      />
    </div>
    <div>
      <Card.Title>{post.title}</Card.Title>
    </div>
    </div>
          <Card.Text>{post.content}</Card.Text>
          <div style={{display:'flex'}}>
          <Button onClick={handleToggleComments} variant="primary"style={{marginLeft:'3%',backgroundColor:'white',borderColor:'black',color:'black'}} >
            {commentsOpen ? 'Hide Comments' : 'Show Comments'}
          </Button>
          <Button onClick={handleToggleComments1} variant="" style={{marginLeft:'3%',backgroundColor:'white',borderColor:'black'}}>
        {commentsOpen1 ? 'Hide Comments' : 'Add Comments'}
      </Button>
  
      <Button onClick={handleShowModal} className="report-button" style={{marginLeft:'3%',backgroundColor:'white',borderColor:'black',color:'black'}}>
        Report Post
      </Button>
    <div/>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Report Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Reason for report</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={reason}
              onChange={handleReasonChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit Report
          </Button>
        </Modal.Footer>
      </Modal>
    </div>



      {commentsOpen1  && (
        <div>
          <br/>
          <Form>
            <FormControl
              type="text"
              placeholder="Write your comment here..."
              value={commentText}
              onChange={handleInputChange}
            />
          </Form>
        </div>
      )}
   
        </Card.Body>
      </Card>

      <Collapse in={commentsOpen}>
        <div>
          <Card >
            <Card.Body>
              
              <Card.Title>Comments</Card.Title>
              {post.comments.map((comment, index) => (
                <div>
               
                <div style={{ display: 'flex', alignItems: 'center'}}>
                <div style={{ marginRight: '15px' }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYPxHTOtUvx8GB1mR1XfLov8CmiqxxDBW1d8p78A6Hg&s"
                style={{
                  borderRadius: '50%', // Makes the image round
                  width: '30px', // Sets the width of the image
                  height: '30px', // Sets the height of the image
                  objectFit: 'cover', // Maintains the aspect ratio
                }}
              />
            </div>
            <div>
            <Card.Text key={index}>{comment}</Card.Text>
            </div>
            </div>
            </div>
              ))}
            </Card.Body>
          </Card>
        </div>
      </Collapse>
    </div>
  );
};

export default RedditPost;
