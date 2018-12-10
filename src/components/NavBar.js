import React from "react";


export default class NavBar extends React.Component {


  render() {

    return(
      <nav className="navbar">
    <h1>Declutterly</h1>
        <ul className="nav navbar-nav"> 
          <li><a href="./index.html">Home</a></li>
          <li><a href="./main.html">App</a></li>
        </ul>
    </nav>
    )
  }

}

