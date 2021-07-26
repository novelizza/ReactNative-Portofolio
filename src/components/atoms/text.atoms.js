import React from 'react';
import {Text} from 'react-native';
import propTypes from 'prop-types';

function TextAtoms(props) {
  return <Text style={props.styles}>{props.isi}</Text>;
}

TextAtoms.propTypes = {
  isi: propTypes.string,
  styles: propTypes.object,
};

TextAtoms.defaultProps = {
  isi: null,
  styles: null,
};

export default TextAtoms;
