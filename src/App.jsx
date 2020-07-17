import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import NavigationBar from './Components/Navbar/Navbar.jsx';
import './App.css';
import Main from './Components/Main/Main';
import Terminal from './Components/terminal/myTerminal';

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/my-portfolio/" component={Main} />
        <Route path="/my-portfolio/terminal" component={Terminal} />
      </Switch>
    </HashRouter>
  );
}

export default App;
