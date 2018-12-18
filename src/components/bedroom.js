import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch';
import '../css/rooms.css';
export default class Bedroom extends Component {
    state = {
        auth: true,
        anchorEl: null,
    };
     handleChange = event => {
         this.setState({
             auth: event.target.checked
         });
     };
  render() {
      const {auth,anchorEl} = this.state;
    return (
 <div className="row">
                <div className = "control-panel col-lg-9" >
                     <h1></h1>
                 </div>
       <div className="control-panel col-lg-3">
        <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
       </div>
      {auth && (
          <div className="col bedroom">

          </div>
      )
      }
 </div>
     
    )
  }
}
