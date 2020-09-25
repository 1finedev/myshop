import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './auth';
import {DrawerNavigator} from './drawer';
import {LoadingModal} from '../components';
import {useGetUser, fetchCategories} from '../redux';
import {useDispatch} from 'react-redux';

export const RootNavigator: React.FC = () => {
  const dispatch = useDispatch();
  const user = useGetUser();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [user]);

  return (
    <NavigationContainer>
      <LoadingModal />
      {user ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
