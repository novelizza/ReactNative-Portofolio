import React from 'react';
import {View, Image, FlatList} from 'react-native';
import Atoms from '../atoms';
import Molecules from '../molecules';
import propTypes from 'prop-types';
import Styles from '../../styles';

const {GithubStyle} = Styles.StyleSheets;

const {TextAtoms, SearchBoxAtoms} = Atoms;

const {GithubListItemMolecules} = Molecules;

function GithubOrganisms(props) {
  return (
    <View style={GithubStyle.container}>
      <Image
        source={{uri: 'https://acfa-portofolio.herokuapp.com/github.png'}}
        style={GithubStyle.githubLogo}
      />
      <SearchBoxAtoms button="Cari" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={props.data}
        renderItem={({item}) => <GithubListItemMolecules item={item} />}
        keyExtractor={item => item.id}
        style={GithubStyle.flatlist}
      />
    </View>
  );
}

GithubOrganisms.propTypes = {
  data: propTypes.any,
};
GithubOrganisms.defaultProps = {
  data: null,
};

export default GithubOrganisms;
