import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';

export const defaultAuthStackNavigationOptions: StackNavigationOptions = {
  cardStyle: {backgroundColor: 'white'},
  headerTitle: '',
  headerStyle: {
    shadowColor: 'transparent',
  },
  headerLeft: ({onPress}) => {
    return (
      <Icon
        name="arrow-left"
        type="simple-line-icon"
        size={30}
        onPress={onPress}
      />
    );
  },
  headerLeftContainerStyle: {paddingLeft: 10},
};
