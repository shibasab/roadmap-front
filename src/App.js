import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Routes from './components/Common/Routes';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
