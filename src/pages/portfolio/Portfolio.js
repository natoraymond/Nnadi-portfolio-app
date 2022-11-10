import React from 'react'
import './Portfolio.css'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { PORTFOLIO } from "../../Data";






function Portfolio() {
  return (
      <Container>       
        <h2 className='hero'>My most Recent Projects</h2>

        <div className='port-section'><h1>PROJ<span className='text-danger'> ECTS</span></h1></div><hr />
        
        <h2 className='prod'>This is how we work, to make your project awesome!</h2>              
              
        <div className='row'>
          <div className='col justify-content-center'>
          <br/><br/>
            <Card style={{ width: '18rem' }} className='cards'>
              <Card.Img variant="top" src="do list.jpg" />
              <Card.Body>
              <h1><i class="bi bi-briefcase"></i></h1>
                <Card.Title>WEB DESIGNING</Card.Title>
                <Card.Text>
                  Amazon Clone Website
                </Card.Text>
                   <Button variant="primary">View other works</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='col'>
            <br/><br/>
            <Card style={{ width: '18rem' }} className='cards'>
              <Card.Img variant="top" src="do list.jpg" />
              <Card.Body>
                <h1><i class="bi bi-calculator"></i></h1>
                <Card.Title> CALCULATOR APP</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                  <Button variant="primary">View other works</Button>
              </Card.Body>
            </Card>
          </div>
          
          <div className='col'>
            <br/><br/>
          
              <Card style={{ width: '18rem' }} className='cards'>
                <Card.Img variant="top" src="do list.jpg" />
                  <Card.Body>
                  <h1><i class="bi bi-check2-square"></i></h1>
                  <Card.Title>TODO LIST</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                    <Button variant="primary">View other works</Button>
                </Card.Body>
              </Card> 
                   
          </div>
          
        </div>

      </Container>
  );
}

export default Portfolio;