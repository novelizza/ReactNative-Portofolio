import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import Styles from '../../styles';
import Atoms from '../atoms';

const {TextAtoms} = Atoms;

const {HomeStyle} = Styles.StyleSheets;

function HomeListItemMolecules(props) {
  return (
    <View style={HomeStyle.listItem}>
      <Image source={{uri: props.item.img}} style={HomeStyle.imageListItem} />
      <TextAtoms
        isi={props.item.projectName}
        styles={HomeStyle.judulListItem}
      />
      <TextAtoms isi={props.item.jenis} styles={HomeStyle.jenisListItem} />
      <TouchableOpacity style={HomeStyle.tab} onPress={() => alert('Bisa')}>
        <TextAtoms isi="Detail" styles={HomeStyle.txtTabActive} />
      </TouchableOpacity>
    </View>
  );
}

HomeListItemMolecules.propTypes = {
  item: propTypes.any,
};

HomeListItemMolecules.defaultProps = {
  item: null,
};

export default HomeListItemMolecules;
