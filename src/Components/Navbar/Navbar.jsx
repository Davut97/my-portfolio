import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import { GiPawprint } from 'react-icons/gi';
import TerminalLinks from './TerminalLinks';
import HomeLinks from './HomeLinks';

const Styles = styled.div`
  .navbar {
    background-color: white;
  }
  a,
  .navbar-nav .nav-link {
    color: black;
    text-decoration-color: red;

    &:hover {
      text-decoration-line: line-through;
      text-decoration-color: red;
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
  const links =
    props.location.pathname === '/' ? <HomeLinks /> : <TerminalLinks />;
  return (
    <Route>
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <GiPawprint />
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
