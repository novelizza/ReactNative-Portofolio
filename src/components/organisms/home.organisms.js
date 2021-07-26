import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Styles from '../../styles';
import Atoms from '../atoms';
import propTypes from 'prop-types';
import molecules from '../molecules';
import MapView from 'react-native-maps';

const {HomeListItemMolecules} = molecules;

const {TextAtoms} = Atoms;

import Assets from '../../assets';
const {FotoMe} = Assets.ImageAssets;

const {HomeStyle} = Styles.StyleSheets;

function HomeOrganisms(props) {
  const [index, setIndex] = useState(1);

  const RenderElement = () => {
    if (index === 1) {
      return (
        <View>
          <TextAtoms
            isi="Halo, Perkenalkan nama saya Nouvel Izza Fardana, Saya lahir di kota kudus pada 25 oktober 1999. Saya fresh graduate Front-end & Back-end Developer, saya memahami berbagai Framework Front-end & Back-end, seperti Java Native, React Native, Express Js."
            styles={HomeStyle.descText}
          />
          <TextAtoms
            isi="Saya pernah ikut membangun beberapa proyek aplikasi, seperti aplikasi E-Commerce dan proyek kecil untuk mahasiswa. Saya juga terbiasa menggunakan beberapa bahasa pemrograman yang berbeda seperti Java, Javascript, dan PHP."
            styles={HomeStyle.descText}
          />
          <TextAtoms
            isi="Saya pernah ikut membangun beberapa proyek aplikasi, seperti aplikasi E-Commerce dan proyek kecil untuk mahasiswa. Saya juga terbiasa menggunakan beberapa bahasa pemrograman yang berbeda seperti Java, Javascript, dan PHP."
            styles={HomeStyle.descText}
          />
          <MapView
            initialRegion={{
              latitude: -6.805363974943779,
              longitude: 110.8404637266576,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={HomeStyle.maps}>
            <MapView.Marker
              coordinate={{
                latitude: -6.805363974943779,
                longitude: 110.8404637266576,
              }}
              title="Rumah"
              description="Acfa's Home"
            />
          </MapView>
        </View>
      );
    }
    if (index === 2) {
      return (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={props.data}
          renderItem={({item}) => <HomeListItemMolecules item={item} />}
          keyExtractor={item => item.id}
          style={HomeStyle.flatlist}
        />
      );
    }
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={props.data}
        renderItem={({item}) => <HomeListItemMolecules item={item} />}
        keyExtractor={item => item.id}
        style={HomeStyle.flatlist}
      />
    );
  };

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.wrapPhoto}>
        <Image style={HomeStyle.foto} source={FotoMe} />
      </View>
      <View style={HomeStyle.cardInfo}>
        <TextAtoms isi="NOUVEL IZZA FARDANA" styles={HomeStyle.judulText} />
        <TextAtoms
          isi="Front-end & Back-end Developer"
          styles={HomeStyle.subJudulText}
        />
        <View style={HomeStyle.tabWrapper}>
          <TouchableOpacity style={HomeStyle.tab} onPress={() => setIndex(1)}>
            <TextAtoms
              isi="Profil Diri"
              styles={
                index === 1 ? HomeStyle.txtTabActive : HomeStyle.txtTabInactive
              }
            />
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyle.tab} onPress={() => setIndex(2)}>
            <TextAtoms
              isi="Front-end"
              styles={
                index === 2 ? HomeStyle.txtTabActive : HomeStyle.txtTabInactive
              }
            />
          </TouchableOpacity>
          <TouchableOpacity style={HomeStyle.tab} onPress={() => setIndex(3)}>
            <TextAtoms
              isi="Back-end"
              styles={
                index === 3 ? HomeStyle.txtTabActive : HomeStyle.txtTabInactive
              }
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={HomeStyle.scrollview}>
          <RenderElement />
        </ScrollView>
        <View style={HomeStyle.garis} />
        <TextAtoms
          isi="Copyright © 2021 - Nouvel Izza Fardana"
          styles={HomeStyle.copyright}
        />
      </View>
    </View>
  );
}

HomeOrganisms.propTypes = {
  data: propTypes.any,
};

HomeOrganisms.defaultProps = {
  data: null,
};

export default HomeOrganisms;
