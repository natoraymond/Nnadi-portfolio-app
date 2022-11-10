import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'

function About() {
    return (
      <Container>
            <Row>
              <Col md={12}>
                <div className='about-section'> <h1>About <span className='text-danger'> Me</span> </h1> <hr />

                  <h2>Hi Everyone, I am <span className="purple">Nnamdi Nnadi </span>
                    from <span className="purple"> Nigeria.</span>
                    <br />
                    I am a web developer who is passionated in programming and solving complex algorithm in to a
                    simple solution and turns yours design ideas into a live website to help your business grow faster.
                    using modern web technologies <br />            
                  
                  </h2>
                  
                </div>
              </Col>
                
            </Row>

            <Row className='skill'>
                  <Col>
                    <h3>SKILLS</h3>
                  </Col>
                 
            </Row>    
              <br/><br/><br/>
            
            <Row>
              
                <Col md={3} > 
                    <h2 className='icons'>ICONS         
                      <h5>HTML</h5>
                    </h2>
                </Col>
                  
                <Col md={3}>
                    <h2 className='icons'>ICONS         
                      <h5>CSS</h5>
                    </h2>
                </Col>
                <Col md={3}>
                      <h2 className='icons'>ICONS         
                        <h5>JAVASCRIPT</h5>
                      </h2>
                </Col>
                <Col md={3}>
                      <h2 className='icons'>ICONS         
                        <h5>Bootstrap</h5>
                      </h2>
                </Col>
                  <Col md={3}>
                      <h2 className='icons'>ICONS         
                        <h5>ReactJS</h5>
                      </h2>
                  </Col>
                  <Col md={3}>
                      <h2 className='icons'>ICONS         
                        <h5>NodeJS</h5>
                      </h2>
                  </Col>
                  <Col md={3}>
                      <h2 className='icons'>ICONS         
                        <h5>Express</h5>
                      </h2>
                  </Col>

                  <Col md={3}>
                      <h2 className='icons'>ICONS         
                        <h5>Angular</h5>
                      </h2>
                  </Col>

                  <Col md={3}>
                      <h2 className='icons'>ICONS         
                        <h5>MongoDB</h5>
                      </h2>
                  </Col>

                  <Col md={3}>
                      <h2 className='icons'>ICONS         
                        <h5>Postman</h5>
                      </h2>
                  </Col>

            </Row>
            <Row className='ani'>
              <Col>
                <div></div>
              </Col>
            </Row>
        </Container>
            
  );
}

export default About;