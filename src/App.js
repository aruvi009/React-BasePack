import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter, Link, Route } from 'react-router-dom';

import logo from './logo.svg';
// import './App.css';

// Routes
import Routes from './Routes';

import { MenuBar } from './components'

// Store Configuration
import createStore from './store';
import { Container, Row, Col } from 'react-bootstrap';


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
        <Container fluid="md">
          <Row className="justify-content-md-center">
            <Col>
              <MenuBar />
            </Col>
          </Row>
          <Row>
            <Col>
              <Routes />
            </Col>
          </Row>
      </Container>
      </HashRouter>

      <BrowserRouter>
      
      </BrowserRouter>
    </Provider>
  );
}
}


export default App;
