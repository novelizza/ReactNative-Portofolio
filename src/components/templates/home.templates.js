import React from 'react';
import Organisms from '../organisms';
import propTypes from 'prop-types';

function HomeTemplates(props) {
  return <Organisms.HomeOrganisms data={props.data} />;
}

HomeTemplates.propTypes = {
  data: propTypes.any,
};

HomeTemplates.defaultProps = {
  data: null,
};
export default HomeTemplates;
