import React from 'react'
import './Contact.css'
import ContactForm from "./ContactForm";
import {Container, Row, Col } from 'react-bootstrap'




function Contact() {
  return (
      <Container>
    
          <Row >
            <Col md={12}>
              <div className='top'>
                <h3 className='cont'> CONT<span className='text-danger'>ACT</span></h3> <hr />
                <h1>GET IN TOUCH</h1>
              </div>
            </Col>
          </Row>
          
          <Row >
            <Col md={4}>
              
            <h2 className='phone'><h3> <i class="bi bi-telephone text-danger"></i></h3>PHONE         
              
                <h5> +234  8063 290  848</h5>
              </h2>
            </Col>
          
          
            <Col md={4}>
              <h2 className='phone'><h3> <i class="bi bi-telephone text-danger"></i></h3> EMAIL         
          
                <h6>nnamdi.raymondoct@gmail.com</h6>
              </h2>
            </Col>
          
          
            <Col md={4}>
              <h4 className='phone'>
              <h3> <i class="bi bi-house-door-fill text-danger"></i></h3>CONTACT ADDRESS
                <h6>Seamfix Nigeria limited, UNN Branch Nsukka</h6>
              </h4>
            </Col>
          </Row>

          <Row>
            <Col>
              {/* <Form className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form> */}
            </Col>
          </Row>
          <ContactForm />
      </Container>
  )
}

export default Contact;