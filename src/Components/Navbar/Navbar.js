import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, Router, BrowserRouter, Switch } from 'react-router-dom';

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

const NavigationBar = () => (
    <BrowserRouter>
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">Code Life</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Nav.Link>
                                <Link exact to="/">
                                    Home
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/about">About</Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <Link to="/contact">Contact</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    </BrowserRouter>
);
export default NavigationBar;
