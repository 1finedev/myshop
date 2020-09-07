import {StyleSheet} from 'react-native';
import {colors, fontSize, proportionedPixel} from '../../utils';

export default StyleSheet.create({
  header: {
    color: colors.darkGrey,
    fontSize: fontSize.xxlg,
    fontWeight: '600',
    marginLeft: 10,
    marginVertical: proportionedPixel(15),
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: proportionedPixel(6),
    paddingVertical: proportionedPixel(1),
  },
  btnContainer: {
    marginVertical: proportionedPixel(20),
    paddingHorizontal: proportionedPixel(5),
  },
  btnContainerText: {
    textAlign: 'center',
    marginVertical: proportionedPixel(5),
    fontSize: fontSize.lg,
  },
  btnTitle: {
    fontSize: fontSize.xlg,
  },
  loginBtn: {
    backgroundColor: colors.darkGrey,
    borderRadius: 100,
    paddingVertical: proportionedPixel(5),
  },
  facebookBtn: {
    backgroundColor: '#344D91',
    borderRadius: 100,
    paddingVertical: proportionedPixel(5),
  },
});
