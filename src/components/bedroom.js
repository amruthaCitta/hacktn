import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
        <Button onClick={this.handleChange} variant="contained" color="primary" className="primary ">Light</Button>
        <Button onClick={this.handleChange2} variant="contained" color="primary" className="primary ">Fan</Button>
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
