import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../css/bedroom.css'
export default class Bedroom extends Component {
    constructor(props){
        super(props)
        this.state = {
            auth: true,
            anchorEl: null,
            auth2: true,
        };
    }
   
     handleChange = event => {
    this.setState(state => ({ auth: !state.auth }));
     };
     handleChange2 = event => {
    this.setState(state => ({ auth2: !state.auth }));};
  render() {
      const {
          auth,
          auth2,anchorEl
      } = this.state;
    return (
       <div>                
       <div className="control-panel ">
       <div className="">
       <button className="switch-btn" onClick={this.handleChange} variant="contained">Light</button>
        {/* <Button onClick={this.handleChange} variant="contained" color="primary" className="switch-btn">Light</Button> */}
       </div>
       <div className="">
       <button onClick={this.handleChange2} variant="contained" className="switch-btn">Fan</button>
        {/* <Button onClick={this.handleChange2} variant="contained" color="primary" className="switch-btn">Fan</Button> */}
       </div>
       </div>
             {auth && (
                 <div className="col bedroom">
                 <h1>Light On</h1>
                </div>)
            }
  {auth2 && (
                 <div className="col bedroom">
                 <h1>Fan On</h1>
                </div>)
            }
 </div>
     
    )
  }
}
