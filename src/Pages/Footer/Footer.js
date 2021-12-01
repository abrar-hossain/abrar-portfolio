import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <Container class="bg-dark text-white">
            <Row>
                <Col md={4}>
                <h4 class='p-2'>Designed and Developed by Abrar Hossain</h4>
                </Col>
                <Col md={4}>
                <h5 class='p-3'>Copyright © 2021 AB</h5>
                </Col>
                <Col md={4}>
                <a
                  href="https://github.com/abrar-hossain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FontAwesomeIcon style={{height:'50px',width:'50px',paddingTop:'20px'}} icon={faGithub}></FontAwesomeIcon>
                </a>
              
            
              
                <a
                  href="https://www.linkedin.com/in/h-m-abrar-hossain-talukder-mashuk-74a617b4/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3"
                >
                  <FontAwesomeIcon style={{height:'50px',width:'50px',paddingTop:'20px'}}  icon={faLinkedinIn}></FontAwesomeIcon>
                </a>
           
              
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FontAwesomeIcon style={{height:'50px',width:'50px',paddingTop:'20px'}}  icon={faFacebook}></FontAwesomeIcon>
                </a>
              
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;