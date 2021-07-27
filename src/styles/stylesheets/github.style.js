import {StyleSheet} from 'react-native';
import Color from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.THEME2_COLOR,
    flex: 1,
  },
  githubLogo: {
    alignSelf: 'center',
    height: 180,
    width: 180,
    marginTop: 10,
    marginBottom: 20,
  },
  flatlist: {
    paddingTop: 7,
    width: '91%',
    alignSelf: 'center',
  },
  listItem: {
    backgroundColor: Color.THEME1_COLOR,
    maxHeight: 90,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
  },
  imageListItem: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  usernameListItem: {
    fontWeight: 'bold',
    fontSize: 17,
    alignSelf: 'center',
    width: '51%',
  },
  detail: {
    backgroundColor: Color.GREY1_COLOR,
    alignSelf: 'center',
    borderRadius: 2,
    borderColor: Color.GREY2_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
