import React from "react";
import { Link } from 'react-router-dom';
import{ connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './componentStyles/NavBar.css';

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }
  render() {
    let navigation;
    let logOut;
    if (!this.props.loggedIn) {
      navigation = 
        <div>
        <Link className="navLink register" to="/register">Register</Link>
          <Link className="navLink login" to="/login">Login</Link>
        </div>
    } else{logOut = <Link className="navLink" to="/" onClick={() => this.logOut()}>Log out</Link>
  }


    return(
      <nav className="navbar">
        <div className="navbar-title">Declutterly</div>
        <div className="nav navbar-nav"> 
        {navigation}
        {logOut}
        </div>
    </nav>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser!== null
});

export default connect(mapStateToProps)(NavBar);

