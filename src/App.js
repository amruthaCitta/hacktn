import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Bedroom from './components/Bedroom'
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="content">
      <Navigation/>
      <Home/>
           <Bedroom/>
        </div>
      </div>
    );
  }
}

export default App;
