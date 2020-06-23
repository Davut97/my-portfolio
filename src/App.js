import React from 'react';
import logo from './logo.svg';
import { Link, Router, BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './Components/Navbar/Navbar';
import './App.css';
import { Navbar, Nav, Form, Button, FormControl, Row } from 'react-bootstrap';
import Main from './Components/Home/main';
function App() {
    return (
        <React.Fragment>
            <NavigationBar />
            <BrowserRouter>
                <Switch>
                    <Route to="/" component={Main}></Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
