import React, { Component } from 'react';
import '../css/home.css'; 
import Button from './modal/Button';
import '../css/common.css';
import Bedroom from './Bedroom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row no-padding">
          <div className="col-lg-9">
            <div className="all-room-btn">
              <Button />
            </div>
            <div className="home-structure row">
              <div className="bed-room col-lg-4"> <a href = "JavaScript:Void(0);" Style="text-decoration:none;color:'yellow'"> Bedroom</a></div>
              <div className="col-lg-4"></div>
              <div className="living-room col-lg-4">Living room</div>
            </div>
            <div className="row">

            </div>
          </div>
          <div className="col-lg-3">
             <Bedroom/>
          </div>
        </div>
      </div>
    )
  }
}
