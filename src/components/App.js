import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';
import AddInventory from './AddInventory';
import Registration from './Registration';
import EditInventory from './EditInventory';

export default class App extends Component {
  render() {
      return (
        <Router>
          <div>

            <Route exact path="/" component={Landing} />
            <Route path ="/registration" render={(props) => <Registration {...props} />}  />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addInventory" component={AddInventory} />
            <Route exact path="/edit/:id" component={EditInventory} />
          </div>
        </Router>
      )
    }
  }
