import React from "react";
// import { Link } from 'react-router-dom';
import './componentStyles/NavBar.css';

export default class NavBar extends React.Component {


  render() {

    return(
      <nav className="navbar">
        <ul className="nav navbar-nav"> 
          <li className="navLink">Login</li>
          <li className="navLink">Register</li>
          <li className="navLink">Dashboard</li>
        </ul>
    </nav>
    )
  }
}


