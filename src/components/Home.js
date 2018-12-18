import React, { Component } from 'react';
import '../css/home.css';
import Button from './modal/Button';
import '../css/common.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row no-padding">
          <div className="col-lg-9">
            <div className="all-room-btn">
              <Button/>
            </div>
            <div className="home-structure">
              <div className="bed-room col-lg-4">Bedroom</div>
            </div>
          </div>
          <div className="col-lg-3">
             
          </div>
        </div>
      </div>
    )
  }
}
