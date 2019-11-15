import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Dashboard from './components/RoadmapList/Dashboard';
import Navigation from './components/Navigation/Navigation';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
        <Dashboard />
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
