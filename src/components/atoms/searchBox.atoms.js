import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import TextAtoms from './text.atoms';
import Styles from '../../styles';

const {GeneralAtoms} = Styles.StyleSheets;

function searchBoxAtoms(props) {
  return (
    <View style={GeneralAtoms.textInputWrap}>
      <TextInput style={GeneralAtoms.textInput} placeholder="Cari Akun" />
      <TouchableOpacity
        style={GeneralAtoms.buttonWrap}
        onPress={() => alert('Bisa')}>
        <TextAtoms isi={props.button} />
      </TouchableOpacity>
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
