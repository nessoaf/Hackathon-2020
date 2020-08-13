import React from 'react';
import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './components/Home'
import AppNavbar from './components/AppNavbar'
import CreateQuote from './components/CreateQuote'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <AppNavbar component={AppNavbar} />
      <div>
        <Switch>
          <Route path='/profile' component={Profile} />
          <Route path='/random' render={props => <Home />} />
          <Route path='/' render={props => <CreateQuote />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
