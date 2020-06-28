import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

const homeLinks = () => (
  <>
    <Nav.Item>
      <Nav.Link>
        <Link to="/">Home</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <LinkScroll
          activeClass="active"
          to="about"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          About
        </LinkScroll>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <LinkScroll spy smooth offset={-70} duration={500} to="contact">
          Contact
        </LinkScroll>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <Link to="/terminal">Feel old?</Link>
      </Nav.Link>
    </Nav.Item>
  </>
);

export default homeLinks;
