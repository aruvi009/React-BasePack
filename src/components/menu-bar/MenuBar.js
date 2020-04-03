import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router'

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
        <div>Menu Bar
          <ul>
            <li><a href="#/home">Home</a></li>
            <li><a href="#/about">About</a></li>
          </ul>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, {})(MenuBar);
