import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Hero from './Hero';
import Login from './Login';
import Registration from './Registration';
import Landing from './Landing';
import Inventory from './Inventory';


export default class App extends Component {
  render() {
      return (
        <Router>
          <div>
            <NavBar />
            <Hero />
            <Landing />

            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
          </div>
        </Router>
      )
    }
  }
