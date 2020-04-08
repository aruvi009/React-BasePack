import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class MenuBar extends Component {

  constructor(props) {

    super(props);
    this.state = {
    };
    this.baseState = this.state;

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
  }

  loadData = () => {
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
          <img
        alt=""
        src="./src/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}React BasePack</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, {})(MenuBar);
