import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './auth.navigation';
import {LoadingModal} from '../components';

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <LoadingModal />
      <AuthNavigator />
    </NavigationContainer>
  );
};
