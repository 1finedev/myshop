import {Dimensions, PixelRatio} from 'react-native';

export const widthPercentageToDP = (widthPercent: number) => {
  const screenWidth = Dimensions.get('window').width;
  // const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

export const heightPercentageToDP = (heightPercent: number) => {
  const screenHeight = Dimensions.get('window').height;
  // const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};
export const proportionedPixel = (designPixels: number) => {
  const screenProportion = Dimensions.get('window').width / 180;
  return PixelRatio.roundToNearestPixel(designPixels * screenProportion);
};
