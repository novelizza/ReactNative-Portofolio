import React from 'react';
import {TouchableOpacity} from 'react-native';
import Styles from '../../styles';
import propTypes from 'prop-types';
import TextAtoms from './text.atoms';

const {GeneralAtoms} = Styles.StyleSheets;

function ButtonAtoms(props) {
  return (
    <TouchableOpacity
      style={GeneralAtoms.buttonWrap}
      onPress={() => alert('Bisa')}>
      <TextAtoms isi={props.judul} styles={props.styleText} />
    </TouchableOpacity>
  );
}

ButtonAtoms.propTypes = {
  judul: propTypes.string,
  styleText: propTypes.any,
};

ButtonAtoms.defaultProps = {
  judul: null,
  styleText: null,
};

export default ButtonAtoms;
