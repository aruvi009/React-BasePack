import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// Routes
import Routes from './Routes';

import { MenuBar } from './components'

// Store Configuration
import createStore from './store';
const STORE = createStore();

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
  return (
    <Provider store={STORE}>
      <HashRouter>
      <div className="App App-header">
        <MenuBar />
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Routes />
      </div>
      </HashRouter>
    </Provider>
  );
}
}


export default App;
