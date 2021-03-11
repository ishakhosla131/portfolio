import React from 'react';
import './style.css';

function Contact() {
    return (

        <div>
            <div>
                <h1>Send a Message!</h1>
            </div>
            <Form>
                <Form.Group controlId="yourName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="yourEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>


                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>

            <Button variant="primary">Primary</Button>{' '}
        </div>

    );
}
export default Contact;