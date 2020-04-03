import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
// import dataService from '../../../providers/dataService';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="l-content">
        ABOUT PAGE!!
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, {})(About);
