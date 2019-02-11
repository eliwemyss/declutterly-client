import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Login from './Login';
import InventoryForm from './InventoryForm';

export default class App extends Component {
  render() {
      return (
        <Router>
          <div>

            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addInventory" component={InventoryForm} />
          </div>
        </Router>
      )
    }
  }
