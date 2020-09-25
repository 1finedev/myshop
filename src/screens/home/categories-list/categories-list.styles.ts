import {StyleSheet} from 'react-native';
import {proportionedPixel, fontSize} from '../../../utils';

export default StyleSheet.create({
  categoryBoxContainer: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginHorizontal: proportionedPixel(3),
    width: proportionedPixel(65),
    height: proportionedPixel(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBoxTitle: {
    fontSize: fontSize.lg,
    color: 'white',
  },
});
