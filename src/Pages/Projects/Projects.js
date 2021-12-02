import React from 'react';
import { Container } from 'react-bootstrap';
import bike from '../../images/bike.jpg';
import park from '../../images/park.jpg';
import health from '../../images/health.png';
import { Link, NavLink } from 'react-router-dom';

const Projects = () => {
    return (
        <Container>
        <div>
            <h2 class='m-5' style={{textAlign:'center'}}>My Projects</h2>
        </div>
            <div class="container">
            <div class="row ">
                    <div class="col col-12 col-lg-4 d-flex flex-row">
                        <div class="card" style={{width: "18rem"}}>
                            <img class="card-img-top" src={bike} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Mash Electric Bike Shop</h5>
                                <p class="card-text">This is an online bike booking shop.Build with ReactJS, MUI, Firebase for authentication.And For managing data use mongoDB and Nodejs, ExpressJS</p>
                                <div className="d-flex justify-content-between">
                                    <a href="https://motor-bike-authentication.web.app/" className="btn btn-primary" target="_blank">View Project</a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col col-12 col-lg-4">
                    <div class="card" style={{width: "18rem"}}>
                            <img class="card-img-top" src={park} alt="Card image cap"/>
                            <div class="card-body">
                            <h5 class="card-title">Awesome Park</h5>
                                <p class="card-text">This is a pakage booking website on Awesome Park.Build with ReactJS, MUI, Firebase for authentication.And For managing data use mongoDB and Nodejs, ExpressJS</p>
                                <a href=" https://jatra-front-end.web.app/" class="btn btn-primary" target="_blank">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-12 col-lg-4">
                    <div class="card" style={{width: "18rem"}}>
                            <img class="card-img-top" src={health} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Medilink Health Care Center.</h5>
                                <p class="card-text">This is a health care center  website .Build with ReactJS, React Bootstrap, Firebase for authentication.</p>
                                <a href="https://health-care-center-95a52.web.app/" class="btn btn-primary" target="_blank">View Project</a>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </Container>
    );
};

export default Projects;