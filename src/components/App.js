import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Hero from './Hero';
import Dashboard from './Dashboard'
import Landing from './Landing';


export default class App extends Component {
  render() {
      return (
          <div>
            <NavBar />
            <Hero />
            <Landing />
            <Dashboard />
          </div>
      )
    }
  }
