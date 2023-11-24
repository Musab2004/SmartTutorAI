import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const CardSlider = ({ cards }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slideLeft = () => {
//     if (currentIndex < cards.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const slideRight = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };
console.log(cards)
  const [currentIndex, setCurrentIndex] = useState(0);
const cardsToShow = 4; // Number of cards to show at a time
const totalCards = cards.length; // Total number of cards

const slideLeft = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};

const slideRight = () => {
  if (currentIndex < totalCards - cardsToShow) {
    setCurrentIndex(currentIndex + 1);
  }
};



  return (
    // <Container>
    //   <div style={{ display: 'flex', overflowX: 'hidden' }}>
    //   <Button onClick={slideRight} variant="light"   style={{ zIndex: 1 }}>   <i class="fas fa-arrow-left"></i>Slide Left</Button>
    //     {cards.map((studyPlan, index) => (
    //       <Card
    //         key={index}
    //         style={{
    //           width: '400px',
    //           height: '300px',
    //           marginRight: '10px',
    //           transition: 'transform 0.3s ease',
    //           transform: `translateX(${-currentIndex * (210)}px)`, // 210 is card width + margin
    //         }}
    //       >
    //         <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYPxHTOtUvx8GB1mR1XfLov8CmiqxxDBW1d8p78A6Hg&s" />
    //         <Card.Body style={{fontSize:'12px'}}>
    //           <Card.Title>{studyPlan.subject}</Card.Title>
    //           <Card.Text className="mb-2 text-muted">{studyPlan.schedule}</Card.Text>
    //           <Card.Text>{studyPlan.description}</Card.Text>
    //         </Card.Body>
           
              
          
    //       </Card>
    //     ))}
    //           <Button variant="light" onClick={slideLeft} style={{ zIndex: 1 }}>
    //           <i class="fas fa-arrow-right"></i>
    //             Slide Right</Button>
    //   </div>

    // </Container>
    <Container>
  <div style={{ display: 'flex', overflowX: 'hidden' }}>
  <Button onClick={slideLeft} variant="light" style={{ zIndex: 1, borderRadius: '50%',height:'100px', marginTop:'10%' }}>
  <i className="fas fa-chevron-left" style={{ fontSize: '40px' }}></i>
</Button>
    {cards.slice(currentIndex, currentIndex + cardsToShow).map((studyPlan, index) => (
  <Card
  key={index}
  style={{
    width: '400px',
    height: '300px',
    marginRight: index !== cardsToShow - 1 ? '10px' : '0', // Add margin between cards
    transition: 'transform 0.3s ease',
    transform: `translateX(${-currentIndex * (410)}px)`, // 410 is card width + margin
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Adding a box shadow for a subtle effect
    transition: 'box-shadow 0.3s ease', // Smooth transition for the box shadow
    cursor: 'pointer', // Change cursor on hover
    backgroundColor: '#fff', // Default background color
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#f5f5f5'; // Change background color on hover
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Change box shadow on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#fff'; // Restore default background color on mouse leave
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'; // Restore default box shadow on mouse leave
  }}
>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYPxHTOtUvx8GB1mR1XfLov8CmiqxxDBW1d8p78A6Hg&s" />
            <Card.Body style={{fontSize:'12px'}}>
              <Card.Title>{studyPlan.subject}</Card.Title>
              {/* <Card.Text className="mb-2 text-muted">{studyPlan.schedule}</Card.Text>
              <Card.Text>{studyPlan.description}</Card.Text> */}
              <Button variant="primary">Read more</Button>
            </Card.Body>
           
              
      </Card>
    ))}
    <Button variant="light" onClick={slideRight} style={{ zIndex: 1, borderRadius: '50%',height:'100px', marginTop:'10%' }}>
    <i class="fas fa-chevron-right" style={{fontSize:'40px'}}></i>

    </Button>
  </div>
</Container>
  );
};

export default CardSlider;