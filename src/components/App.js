import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';
import AddInventory from './AddInventory';

export default class App extends Component {
  render() {
      return (
        <Router>
          <div>

            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addInventory" component={AddInventory} />
          </div>
        </Router>
      )
    }
  }
