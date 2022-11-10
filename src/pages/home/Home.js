import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/nd.jpg";
import TypeWriter from "./TypeWriter";
import './Home.css'
import { AiFillGithub, AiFillInstagram} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {BsGripHorizontal} from 'react-icons/bs'
import About from  '../about/About'
import Portfolio from "../portfolio/Portfolio";
import Contact from '../contact/Contact'





function Home() {
  return (
    
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>           

            <Col md={5}>
              <img src={myImg} className="low" alt="avatar img" />
              <Col className="grip"><BsGripHorizontal />
              </Col>
            </Col>

            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Nnamdi <span className='setpink'>Nnadi</span></strong>
              </h1>
              <p className="heading-description blockquote">
                <h2> Web Developer | Computer Scientist</h2>
                
                A highly skilled and movtivated web developer who deliver best quality and scalable software for business . <br/>             
              </p>
            <div className="heading-type">
                <br/>
                <hr/>
                <TypeWriter />
                <hr/>
              </div>
            </Col>
          </Row>
          <br/><br/><br/>
        </Container>
        
        <Row>
          <Col md={4} xl={4}>
            <ul className="home-about-social-links">
              <li className="social-icons ">
                <a 
                  href="https://github.com/natoraymond"
                  target="_blank"
                  rel="nnamdi noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub className="social-icon text-black" />
                </a>
              </li>
              
              <li className="social-icons ">
                <a
                  href="https://www.linkedin.com/in/nnadi-nnamdi-raymond-972abb234/"
                  target="_blank"
                  rel="namdinnadi noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn className="social-icon" />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.facebook.com/nnamdi.raymond.1/"
                  target="_blank"
                  rel="namdinnadi noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook className="social-icon" />
                </a>
              </li>

              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/raymond_nnamdi/?hl=en"
                  target="_blank"
                  rel="nnamdinnadi noreferrer"
                  className="icon-colour home-social-icons text-danger"
                >
                  <AiFillInstagram className="social-icon" />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="mailto:nnamdi.raymondoct@gmail.com"
                  target="_blank"
                  rel="nnamdinnadi noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail className="social-icon" />
                  
                </a>
              </li>
            </ul>
          </Col>
          
          <Col md={4} xl={4}>
            <button  type="button" class="btn btn-primary btn-lg btn2 "> <i class="bi bi-download"></i>  Download CV</button>
            <button  type="button" class="btn btn-primary btn-lg btn2 "> Hire Me </button>
          </Col>
        </Row>        
        
        <br/><br/><br/>
        <About />
        
        <br/><br/><br/>
        <Portfolio />
        
        <br/><br/><br/>
        <br/><br/><br/>
        <Contact />
          
        
      </Container>    
  

  );
}

export default Home;

