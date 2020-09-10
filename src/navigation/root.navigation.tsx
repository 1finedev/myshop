import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './auth';
import {DrawerNavigator} from './drawer';
import {LoadingModal} from '../components';
import {useGetUser} from '../redux';

export const RootNavigator: React.FC = () => {
  const user = useGetUser();
  return (
    <NavigationContainer>
      <LoadingModal />
      {user ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
