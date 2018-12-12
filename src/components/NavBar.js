import React from "react";
import './componentStyles/NavBar.css';

export default class NavBar extends React.Component {


  render() {

    return(
      <nav className="navbar">
    <h1>Declutterly</h1>
        <ul className="nav navbar-nav"> 
          <li>Home</li>
          <li>App</li>
        </ul>
    </nav>
    )
  }
}


