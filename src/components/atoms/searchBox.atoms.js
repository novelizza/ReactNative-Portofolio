import React from 'react';
import {View, TextInput} from 'react-native';
import propTypes from 'prop-types';
import ButtonAtoms from './button.atoms';
import Styles from '../../styles';

const {GeneralAtoms} = Styles.StyleSheets;

function searchBoxAtoms(props) {
  return (
    <View style={GeneralAtoms.textInputWrap}>
      <TextInput
        style={GeneralAtoms.textInput}
        placeholder="BENERIN STYLING BUTTON, MASIH STATIK"
      />
      <ButtonAtoms judul={props.button} />
    </View>
  );
}

searchBoxAtoms.propTypes = {
  button: propTypes.string,
};
searchBoxAtoms.defaultProps = {
  button: 'cari',
};

export default searchBoxAtoms;
