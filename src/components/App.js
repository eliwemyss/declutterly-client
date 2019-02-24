import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Landing from './Landing';
import RegistrationPage from './RegistrationPage';
import Login from './Login';
import Dashboard from './Dashboard';
import AddInventory from './AddInventory';
import EditInventory from './EditInventory';
import { refreshAuthToken } from '../actions/auth'
import './componentStyles/App.css'

export default class App extends React.Component {
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
              <Route path ="/register" render={(props) => <RegistrationPage {...props} />}  />
              <Route exact path="/login" render={(props) => <Login {...props} />} />
              <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
              <Route path="/addInventory" render={(props) => <AddInventory {...props} />} />
              <Route exact path="/edit/:id" render={(props) => <EditInventory {...props} />} />
          </div>
        </Router>
      )
    }
  }
