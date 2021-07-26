import React from 'react';
import Organisms from '../organisms';
import propTypes from 'prop-types';

function GithubTemplates(props) {
  return <Organisms.GithubOrganisms data={props.data} />;
}

GithubTemplates.propTypes = {
  data: propTypes.any,
};

GithubTemplates.defaultProps = {
  data: null,
};

export default GithubTemplates;
