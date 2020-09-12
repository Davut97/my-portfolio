import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const terminalLinks = () => (
  <>
    <Nav.Item>
      <Nav.Link>
        <Link to="/">Home</Link>
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
        <Link to="/terminal">Feel geeky?</Link>
      </Nav.Link>
    </Nav.Item>
  </>
);

export default terminalLinks;
