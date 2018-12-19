import React from "react";
import { Link, Redirect } from 'react-router-dom';
import './componentStyles/NavBar.css';

export default class NavBar extends React.Component {


  render() {

    return(
      <nav className="navbar">
        <ul className="nav navbar-nav"> 
          <Link className="navLink" to="/login">Login</Link>
          <Link className="navLink" to="/registration">Register</Link>
        </ul>
    </nav>
    )
  }
}


