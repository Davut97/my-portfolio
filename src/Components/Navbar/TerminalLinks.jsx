import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const terminalLinks = () => (
  <Nav.Item>
    <Nav.Link>
      <Link to="/terminal">Feel old?</Link>
    </Nav.Link>
  </Nav.Item>
);

export default terminalLinks;
