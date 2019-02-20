import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Landing from './Landing';
import RegistrationPage from './RegistrationPage';
import Login from './Login';
import Dashboard from './Dashboard';
import AddInventory from './AddInventory';
import EditInventory from './EditInventory';
import { refreshAuthToken } from '../actions/auth'

export default class App extends Component {
    componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
      return (
        <Router>
          <div className="app">
            <NavBar />
            <Landing />
              <Route exact path ="/register" component={RegistrationPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/addInventory" component={AddInventory} />
              <Route exact path="/edit/:id" component={EditInventory} />
          </div>
        </Router>
      )
    }
  }
