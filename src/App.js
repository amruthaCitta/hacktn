import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bedroom  from './components/Bedroom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="content">
        <div className="row">
          <div className="col-lg-9">
<Bedroom/>
          </div>
          {/* <div className="col-lg-3">hfgfhfghghjhgjhgjg</div> */}
        </div>
        </div>
      </div>
    );
  }
}

export default App;
