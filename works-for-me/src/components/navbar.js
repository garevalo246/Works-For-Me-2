import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {Icon, Typography} from '@material-ui/core'
import pic from "../images/whitecal.png"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

export default class Navbar extends Component {

  render() {
    return (
    <div class = "container-fluid" position= "stickytop">
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        {/* leftcol */}
        <div class="col-2">
          <Link to="/" className="navbar-brand">
            <Typography variant ="h7">&nbsp;&nbsp;Home&nbsp;
              <Icon><HomeRoundedIcon /></Icon>
          </Typography>
          </Link>
        </div>
        
        <div class="col">        
          <div class="container-fluid navbar-brand " >
            <Typography variant = "h4" align = "center"> Works for Me &nbsp;
            <img src = {pic} alt = "memories" height = "40"  />
            </Typography>
          </div>
        </div>
       
        <div class="col-2">
         
        <div className="collpase navbar-collapse">
        
        <ul className="navbar-nav mr-auto">
          
          <li className="navbar-item">
              <Link to="/create" className="nav-link">Find Time</Link>
          </li>
        
          <li className="navbar-item">
              <Link to="/user" className="nav-link">Add Friends</Link>
          </li>
        </ul>
        </div>
         </div>
      </nav>
    </div>
    );
  }
}