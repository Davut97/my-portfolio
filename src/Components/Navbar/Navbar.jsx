/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import TerminalLinks from './TerminalLinks';
import HomeLinks from './HomeLinks';
import Logo from '../../Assets/img/letter-a.png';

const Styles = styled.div`
  .navbar {
    background-color: white;
  }
  a,
  .navbar-nav .nav-link {
    color: black;
    text-decoration: none;

    &:hover {
      transition: $animate;
      position: relative;
      &:before,
      &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        width: 0px;
        height: 5px;
        margin: 5px 0 0;
        transition: $animate;
        transition-duration: 0.75s;
        opacity: 0;
        background-color: darken(orange, 5%);
      }
    }
  }
`;

const NavigationBar = (props) => {
  // eslint-disable-next-line operator-linebreak
  const links =
    // eslint-disable-next-line react/prop-types
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/prop-types
    props.location.pathname === '/' ? <HomeLinks /> : <TerminalLinks />;
  return (
    <Route>
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand>
            <img src={Logo} alt="LOGO" style={{ width: '30px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">{links}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </Route>
  );
};
export default withRouter(NavigationBar);
