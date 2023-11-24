import { Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from './HomePageNavbar'
const UserProfile = () => {
    return (
        <>
        <Navbar/>
        <div className="container" style={{marginTop:'100px'}}>
            <Row className="justify-content-center">
                <Col xl={6} md={2}>
                    <Card className="user-card-full" style={{width:'900px',marginLeft:'-15%',height:'100%'}}>
                        <Row className="m-0">
                            <Col sm={4} className="bg-c-lite-green user-profile" styl>
                                <Card.Body className="text-center" style={{backgroundColor:'green'}}>
                                    <div className="m-b-25">
                                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                        
                                    </div>
                                    <h6 className="f-w-600">Hembo Tingor</h6>
                                    <p>Web Designer</p>
                                    <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    <Button className="m-2">
          Edit Profile
        </Button>
      
                                </Card.Body>
                            </Col>
                            <Col sm={8}>
                            <Card.Body>
    {/* Information section */}
    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
    <div className="row">
        <div className="col-sm-6 mb-4">
            <p className="m-b-10 f-w-600">Current Education Level</p>
            <h6 className="text-muted f-w-400">Bachelor's Degree</h6>
            {/* Add other education details */}
        </div>
        <div className="col-sm-6 mb-4">
            <p className="m-b-10 f-w-600">Location</p>
            <h6 className="text-muted f-w-400">City, Country</h6>
            {/* Add location details */}
        </div>
    </div>
    
    {/* Additional study plans details */}
    <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Study Plans</h6>
    <div className="row">
        <div className="col-sm-6 mb-4">
            <p className="m-b-10 f-w-600">Current Active Study Plans</p>
            <h6 className="text-muted f-w-400">3</h6>
            {/* Add details for current active study plans */}
        </div>
        <div className="col-sm-6 mb-4">
            <p className="m-b-10 f-w-600">Total Study Plans Taken</p>
            <h6 className="text-muted f-w-400">10</h6>
            {/* Add details for total study plans taken */}
        </div>
    </div>
    
    {/* Add social links */}
    <ul className="social-link list-unstyled mt-4 mb-4">
        {/* Social links */}
    </ul>
    
    {/* Rest of your content */}
</Card.Body>


                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
        </>
    );
}

export default UserProfile;
