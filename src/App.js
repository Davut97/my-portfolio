import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './Components/Navbar/Navbar';
import './App.css';
import Main from './Components/Home/main';
import About from './Components/About/About';
function App() {
    return (
        <>
            <NavigationBar />
            <Main title="Section 1" dark={true} id="section1" />
            <About title="Section 2" dark={false} id="about" />
        </>
    );
}

export default App;
