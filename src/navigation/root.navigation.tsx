import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './auth.navigation';

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
