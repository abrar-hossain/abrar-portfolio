import React from 'react';
import { Carousel } from 'react-bootstrap';
import home from '../../images/bike/home.png';
import order from '../../images/bike/order.png';
import userDashboard from '../../images/bike/userDashboard.png';

const Details = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={order}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={userDashboard}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1>About This Project</h1>
            <p>This website online booking site. You can order a bike from this site and you can also delete your order product.</p>
            <h1>Code link:</h1>
            <a href="https://github.com/abrar-hossain/bike-booking-interactive-website" target="_blank">Client site</a>
            <a href="https://github.com/abrar-hossain/bike-booking-interactive-website-server" target="_blank">server site</a>
            <a href="https://motor-bike-authentication.web.app/" class="btn btn-primary" target="_blank">Live site</a>

            <h1>Technology used:</h1>
            <ul>
                <li>React.JS</li>
                <li>MUI</li>
                <li>mongoDB</li>
                <li>Node.JS</li>
                <li>Express.JS</li>
            </ul>
        </div>
    );
};

export default Details;