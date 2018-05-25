import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import routes from './routes';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
}
export default withRouter(connect(mapStateToProps)(App));
