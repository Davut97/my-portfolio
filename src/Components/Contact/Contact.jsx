/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './style.css';
import { Form, Col, Button } from 'react-bootstrap';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [email, SetEmail] = useState('');
  const [name, SetName] = useState('');
  const [message, setMessage] = useState('');
  const handelSendEMail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'gmail',
        'template_jo5s0S0i',
        event.target,
        'user_owlc5OsZ173Tkward1CrE'
      )
      .then(
        (result) => {
          // eslint-disable-next-line no-alert
          alert('Thank you, Your message have been sent');
          document.forms.myForm.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <AnimatedOnScroll animationIn="fadeInUpBig">
      <div className="contactContainer">
        <div className="box" id="contact">
          <h2>
            <span className="statusHeader" style={{ textAlign: 'center' }}>
              Status
            </span>
            <br />
            <span className="txt-highlight ">Available</span>
            <p style={{ paddingTop: '40px', color: '#919191' }}>
              I’m currently taking on new projects!
            </p>
          </h2>
        </div>

        <Form
          className="formContainer"
          onSubmit={(e) => {
            handelSendEMail(e);
          }}
          name="myForm"
        >
          <Form.Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Your Name"
                onChange={(e) => SetName(e.target.value)}
                required
                type="text"
                name="from_name"
              />
            </Col>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => SetEmail(e.target.value)}
                placeholder="Your Email"
                required
                type="email"
                name="from_email"
              />
            </Col>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>How can I help you?</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
              name="message_html"
            />
          </Form.Group>
          <Button
            style={{
              background: '#4b6cc1',
              borderRadius: '1000px',
              cursor: 'pointer',
              fontWeight: '400',
              fontFamily: 'Rubik Arial',
              padding: '10px 20px',
              fontSize: '100%',
              textAlign: 'center',
              marginLeft: '43%',
            }}
            type="submit"
            value="Send"
          >
            Contact Me
          </Button>
        </Form>
      </div>
    </AnimatedOnScroll>
  );
};

export default Contact;
