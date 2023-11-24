import React, { useState } from 'react';
import { Tabs, Tab,Button ,Row,Col,Modal,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './sidebar';
import DashBoardNavbar from './DashBoardNavbar';
import DisscusionForum from './DisscusionForum';
import ResourcePreview from './ResourcePreview';
const StylishTabs = () => {
  const [showModal, setShowModal] = useState(false);
  const [postInput, setPostInput] = useState('');

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handlePostSubmit = () => {
    // Here you can handle the submitted post (e.g., send it to a server, update UI, etc.)
    console.log('Submitted Post:', postInput);
    setShowModal(false); // Close the modal after submission (you might want to update this behavior)
  };
  const [key, setKey] = useState('tab1');
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Musab Bin Abaid',
      content: 'This is the content of the first sample post.',
      comments: ['Comment 1', 'Comment 2', 'Comment 3'],
    },
    {
      id: 2,
      title: 'Ahmed Ali',
      content: 'This is the content of the second sample post.',
      comments: ['Comment A', 'Comment B', 'Comment C'],
    },
    {
        id: 3,
        title: 'Abrar Ali',
        content: 'This is the content of the first sample post.',
        comments: ['Comment 1', 'Comment 2', 'Comment 3'],
      },
      {
        id: 4,
        title: 'New user',
        content: 'This is the content of the second sample post.',
        comments: ['Comment A', 'Comment B', 'Comment C'],
      },
      {
        id: 5,
        title: 'Old User',
        content: 'This is the content of the first sample post.',
        comments: ['Comment 1', 'Comment 2', 'Comment 3'],
      },
      {
        id: 6,
        title: 'Sample Post 2',
        content: 'This is the content of the second sample post.',
        comments: ['Comment A', 'Comment B', 'Comment C'],
      },
    // Add more posts as needed
  ]);

  const [visiblePosts, setVisiblePosts] = useState(4); // Number of posts to display initially
  const postsPerPage = 4; // Number of posts to load per click

  const handleLoadMore = () => {
    setVisiblePosts(visiblePosts + postsPerPage);
  };

  return (
    <>
    <DashBoardNavbar/>
    <div style={{marginTop:'100px'}}>
    <Tabs
      id="controlled-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      variant="pills"
    >
      <Tab eventKey="tab1" title="Study Schedule">
        {/* Content for Tab 1 */}
        <Sidebar/>
        <p>This is the content of Tab 1.</p>
      </Tab>
      <Tab eventKey="tab2" title="Quiz Generation">
        {/* Content for Tab 2 */}
        <p>This is the content of Tab 2.</p>
      </Tab>
      <Tab eventKey="tab3" title="Summary Generation">
        {/* Content for Tab 3 */}
        <p>This is the content of Tab 3.</p>
      </Tab>
      <Tab eventKey="tab4" title="Disscusion Forum">
      <Container>
      <Row>
        <Col xs={8}>
        <h1>Latest Question Asked</h1>
       
        </Col>
        <Col>
        <Button variant="primary" onClick={handleModalShow}>
            Ask a question
          </Button>
          {/* Other content related to the latest question goes here */}
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write your post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder="Write your post..."
            value={postInput}
            onChange={(e) => setPostInput(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePostSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
        {/* Content for Tab 3 */}
        {/* <DisscusionForum post={samplePost} /> */}
        {posts.slice(0, visiblePosts).map((post) => (
        <DisscusionForum key={post.id} post={post} />
      ))}
    
      {visiblePosts < posts.length && (
        <Button onClick={handleLoadMore} style={{marginTop:'5px',marginLeft:'50%'}}>Load More</Button>
      )}
      
      </Tab>
      <Tab eventKey="tab5" title="Resource preview">
        {/* Content for Tab 3 */}
      <ResourcePreview/>
      </Tab>
    </Tabs>
    </div>
    </>
  );
};

export default StylishTabs;