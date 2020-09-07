import React from 'react';
import {View as DefaultView, ViewStyle} from 'react-native';
import {SvgCss} from 'react-native-svg';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export const createIcon = (xml: string) => {
  interface IconProps {
    iconSize: number;
    style?: ViewStyle;
    onPress?: () => void;
  }

  const Icon: React.FC<IconProps> = ({iconSize, style, onPress}) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <DefaultView style={[style, {width: iconSize, height: iconSize}]}>
          <SvgCss xml={xml} width="100%" height="100%" />
        </DefaultView>
      </TouchableWithoutFeedback>
    );
  };

  return Icon;
};
