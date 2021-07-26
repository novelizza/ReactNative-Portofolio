import React from 'react';
import {View, Image} from 'react-native';
import Atoms from '../atoms';
import propTypes from 'prop-types';
import Styles from '../../styles';

const {GithubStyle} = Styles.StyleSheets;

const {TextAtoms, SearchBoxAtoms} = Atoms;

function GithubOrganisms(props) {
  return (
    <View style={GithubStyle.container}>
      <Image
        source={{uri: 'https://acfa-portofolio.herokuapp.com/github.png'}}
        style={GithubStyle.githubLogo}
      />
      <SearchBoxAtoms button="Cari" />
      <TextAtoms isi={props.data} />
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
