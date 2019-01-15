import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Login from './Login';

export default class App extends Component {
  render() {
      return (
        <Router>
          <div>

            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>
      )
    }
  }
