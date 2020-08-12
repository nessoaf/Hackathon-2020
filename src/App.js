import React from 'react';
import './App.css';
import Home from './components/Home'
import AppNavbar from './components/AppNavbar'

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Home />
    </div>
  );
}

export default App;
