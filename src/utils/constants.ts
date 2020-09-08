import {proportionedPixel} from './pixels';

// COLORS
export const colors = {
  darkGrey: '#333',
};

// FONT SIZES
export const fontSize = {
  mini: proportionedPixel(4.5),
  sm: proportionedPixel(5),
  md: proportionedPixel(6),
  lg: proportionedPixel(7),
  xlg: proportionedPixel(10),
  xxlg: proportionedPixel(12),
  xxxlg: proportionedPixel(20),
};

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
