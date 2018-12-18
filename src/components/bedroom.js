import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch';
import '../css/rooms.css';
import Button from '@material-ui/core/Button';
export default class Bedroom extends Component {
    constructor(props){
        super(props)
        this.state = {
            auth: true,
            anchorEl: null,
        };
    }
   
     handleChange = event => {
    this.setState(state => ({ auth: !state.auth }));
     };
  render() {
      const {auth,anchorEl} = this.state;
    return (
 <div className="row">
                <div className = "control-panel col-lg-9" >
                     <h1></h1>
                 </div>
       <div className="control-panel col-lg-3">
       <div className="row">
        <Button onClick={this.handleChange} variant="contained" color="primary" className="primary ">Light</Button>
       </div>
       <div className="row">

       </div>
        <Button onClick={this.handleChange} variant="contained" color="primary" className="primary ">Light</Button>
                <Button onClick={this.handleChange} variant="contained" color="primary" className="primary ">Fan</Button>
                        <Button onClick={this.handleChange} variant="contained" color="primary" className="primary ">Music System</Button>
       </div>
      {auth && (
          <div className="col bedroom">
            <h1>h111</h1>
          </div>
      )
      }
 </div>
     
    )
  }
}
