import React from "react";
import { Link } from 'react-router-dom';
import './componentStyles/NavBar.css';

export default class NavBar extends React.Component {

  render() {

    return(
      <nav className="navbar">
        <div className="navbar-title">Declutterly</div>
        <div className="nav navbar-nav">                    
          <Link className="navLink" to="/dashboard">Demo</Link>
          <Link className="navLink" to="/">Home</Link>
        </div>
    </nav>
    )
  }
}


