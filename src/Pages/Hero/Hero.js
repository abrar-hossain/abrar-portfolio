import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import abrar from '../../images/abrar.jpg';

const Hero = () => {
    return (
        <section>
      <Container style={{ marginBottom: 15,marginTop: 60 }}  fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingTop: 60 }} className="heading">
                Hi World!
              </h1>

              <h1 className="heading-name">
                This is
                <strong class="text-primary"> Abrar Hossain</strong>
                <h2>Front End Developer</h2>
              </h1>
              <div style={{ textAlign: "left",textDecoration:'none' }}>
              <a class="p-1 rounded bg-primary text-white" style={{ textDecoration:'none',fontSize:'20px',fontWeight:'400' }} href="https://drive.google.com/file/d/1VKIyP7mZuTLKWlEIU4E3dcToErWZQVnW/view?usp=sharing" download>Resume</a>
              </div>             
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={abrar} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    );
};

export default Hero;