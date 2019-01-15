import React from "react";
import { Link } from 'react-router-dom';
import './componentStyles/NavBar.css';

import Login from './Login';

export default class NavBar extends React.Component {

  render() {

    return(
      <nav className="navbar">
        <ul className="nav navbar-nav"> 
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/Login">Login</Link>
          <Link className="navLink" to="/dashboard">Dashboard</Link>
        </ul>
    </nav>
    )
  }
}


