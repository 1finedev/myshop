import {StyleSheet} from 'react-native';
import {colors, fontSize, proportionedPixel} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
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
  btnTitle: {
    fontSize: fontSize.xlg,
  },
  signupBtnContainer: {
    marginTop: proportionedPixel(15),
  },
  signupBtn: {
    marginHorizontal: 10,
    backgroundColor: colors.darkGrey,
    borderRadius: 100,
    paddingVertical: proportionedPixel(5),
  },
  terms: {
    marginTop: 'auto',
    textAlign: 'center',
    color: 'grey',
  },
  termsLink: {
    color: '#0081E5',
  },
  errorMessage: {
    paddingLeft: proportionedPixel(5),
  },
});
