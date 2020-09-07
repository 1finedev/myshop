import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import {
  fontSize,
  heightPercentageToDP,
  colors,
  proportionedPixel,
} from '../../utils';

const btnStyles: StyleProp<ViewStyle> = {
  borderRadius: 100,
  paddingVertical: proportionedPixel(4),
};

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: heightPercentageToDP(4.5),
  },
  header: {
    fontSize: fontSize.xlg,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: fontSize.lg,
    paddingHorizontal: 25,
    textAlign: 'center',
    marginVertical: heightPercentageToDP(3),
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 25,
    marginBottom: heightPercentageToDP(2),
  },
  btnTitle: {
    fontSize: fontSize.xlg,
  },
  signUpTitle: {
    fontSize: fontSize.xlg,
    color: colors.darkGrey,
  },
  logInBtn: {
    ...btnStyles,
    backgroundColor: colors.darkGrey,
  },
  signUpBtn: {
    ...btnStyles,
    borderColor: colors.darkGrey,
  },
});
