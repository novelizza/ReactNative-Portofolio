import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import Styles from '../../styles';
import Atoms from '../atoms';

const {TextAtoms} = Atoms;

const {GithubStyle} = Styles.StyleSheets;

function GithubListItemMolecules(props) {
  return (
    <View style={GithubStyle.listItem}>
      <Image source={{uri: props.item.img}} style={GithubStyle.imageListItem} />
      <TextAtoms
        isi={props.item.userName}
        styles={GithubStyle.usernameListItem}
      />
      <TouchableOpacity
        style={GithubStyle.detail}
        onPress={() => alert('Bisa')}>
        <TextAtoms isi="Detail" styles={GithubStyle.txtTabActive} />
      </TouchableOpacity>
    </View>
  );
}

GithubListItemMolecules.propTypes = {
  item: propTypes.any,
};

GithubListItemMolecules.defaultProps = {
  item: null,
};

export default GithubListItemMolecules;
