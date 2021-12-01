import React from 'react';
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
        <container>
                <form action="https://formsubmit.co/abrarmashuk@gmail.com" method="POST">
            <input placeholder="Enter your name" type="text" name="name" required/>
            <input placeholder="Enter your email" type="email" name="email" required/>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <Button variant="primary" type="submit">Send</Button>
            </form>
        </container>
        
    );
};

export default Contact;