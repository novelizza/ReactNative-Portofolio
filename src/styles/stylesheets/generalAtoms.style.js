import {StyleSheet} from 'react-native';
import Color from '../colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrap: {
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BLUE_COLOR,
  },
  isiButton: {
    fontSize: 12,
  },
  textInputWrap: {
    height: 35,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    // backgroundColor: Color.RED_COLOR,
  },
  textInput: {
    height: 35,
    width: '82%',
    backgroundColor: Color.GREY1_COLOR,
  },
});
