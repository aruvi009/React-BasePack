import React from 'react';
import PropTypes from 'prop-types';

const NoMatchPage = ({ classes }) => (
  <div>
    PAGE NOT FOUND
  </div>
);

NoMatchPage.propTypes = {
  location: PropTypes.object, // react router
};

export default NoMatchPage;
