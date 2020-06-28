import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import NavigationBar from './Components/Navbar/Navbar.jsx';
import './App.css';
import Main from './Components/Main/Main';
import Terminal from './Components/terminal/myTerminal';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/terminal" component={Terminal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
