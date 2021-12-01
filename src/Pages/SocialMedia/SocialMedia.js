import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const SocialMedia = () => {
    return (
        <div>
            <Container class="mt-5">
                <Row>
                    <Col md={12} >
                    <h1 class="mt-5 text-primary" style={{textAlign:'center'}}>FIND ME ON</h1>
                <h5 style={{textAlign:'center'}}>
              Feel free to connect with me
            </h5>
            <div style={{textAlign:'center',margin:'30px'}}>
              
                <a
                  href="https://github.com/abrar-hossain"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FontAwesomeIcon style={{height:'50px',width:'50px'}} icon={faGithub}></FontAwesomeIcon>
                </a>
              
            
              
                <a
                  href="https://www.linkedin.com/in/h-m-abrar-hossain-talukder-mashuk-74a617b4/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3"
                >
                  <FontAwesomeIcon style={{height:'50px',width:'50px'}} icon={faLinkedinIn}></FontAwesomeIcon>
                </a>
           
              
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FontAwesomeIcon style={{height:'50px',width:'50px'}} icon={faFacebook}></FontAwesomeIcon>
                </a>
              
            </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default SocialMedia;