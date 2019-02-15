import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './Landing';
import NavBar from './NavBar';
import Dashboard from './Dashboard';
import InventoryForm from './InventoryForm';

export default class App extends Component {

  render() {
      return (
        <Router>
          <div>

            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addInventory" render={() => <div><InventoryForm /><NavBar /></div>} />
          </div>
        </Router>
      )
    }
  }
