import {StyleSheet} from 'react-native';
import Color from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.GROUND_COLOR,
    flex: 1,
  },
  wrapPhoto: {
    flex: 2,
    justifyContent: 'center',
  },
  foto: {
    height: 290,
    width: 200,
    alignSelf: 'center',
  },
  cardInfo: {
    backgroundColor: Color.THEME1_COLOR,
    borderRadius: 25,
    flex: 3,
  },
  judulText: {
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 7,
    alignSelf: 'center',
  },
  subJudulText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 15,
    alignSelf: 'center',
  },
  tabWrapper: {
    marginTop: 7,
    paddingLeft: 9,
    flexDirection: 'row',
    backgroundColor: Color.GROUND_COLOR,
  },
  tab: {
    backgroundColor: Color.WHITE_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: Color.GREY2_COLOR,
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 6,
    marginVertical: 10,
  },
  txtTabActive: {
    color: Color.THEME2_COLOR,
    fontSize: 13,
    marginHorizontal: 8,
    marginVertical: 3,
  },
  txtTabInactive: {
    color: Color.GREY4_COLOR,
    fontSize: 13,
    marginHorizontal: 8,
    marginVertical: 3,
  },
  scrollview: {
    flex: 1,
  },
  flatlist: {
    paddingTop: 7,
  },
  listItem: {
    backgroundColor: Color.THEME2_COLOR,
    marginHorizontal: 10,
    maxHeight: 230,
    width: 140,
    alignItems: 'center',
  },
  descText: {
    fontSize: 14,
    alignSelf: 'center',
    width: '92%',
    color: Color.GREY3_COLOR,
    marginTop: 10,
    textAlign: 'justify',
  },
  imageListItem: {
    width: 115,
    height: 120,
    marginTop: 10,
  },
  judulListItem: {
    marginTop: 7,
    fontWeight: 'bold',
    fontSize: 17,
  },
  jenisListItem: {
    marginBottom: 2,
    color: Color.GREY3_COLOR,
    fontSize: 14,
  },
  // wrapCopyright: {
  //   justifyContent: 'flex-end',
  // },
  garis: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '92%',
    borderColor: Color.BLACK_COLOR,
    alignSelf: 'center',
  },
  copyright: {
    backgroundColor: Color.THEME1_COLOR,
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  maps: {
    width: '92%',
    height: 250,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
