import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import abrar from '../../images/abrar.jpg';

const Hero = () => {
    return (
      <Container style={{ marginBottom: 15, marginTop: 60 }}>
          <Row>
          <Col className='my-3' sm={12} lg={true}>
            <h1 style={{ paddingTop: 60 }}>
                Hi World!
              </h1>

            <h1>
                This is
              <strong class="text-primary"> Abrar Hossain</strong>
              </h1>
              <div style={{ textAlign: "left",textDecoration:'none' }}>
              <a class="p-1 rounded bg-primary text-white" style={{ textDecoration:'none',fontSize:'20px',fontWeight:'400' }} href="https://drive.google.com/file/d/1VKIyP7mZuTLKWlEIU4E3dcToErWZQVnW/view?usp=sharing" download>Resume</a>
              </div>             
            </Col>

          <Col className='my-3' sm={12} lg={true} style={{ paddingBottom: 20 }}>
              <img src={abrar} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>

    );
};

export default Hero;