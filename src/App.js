import React from 'react';
import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './components/Home'
import AppNavbar from './components/AppNavbar'
import CreateQuote from './components/CreateQuote'

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Home />
    </div>
  );
}

export default App;
