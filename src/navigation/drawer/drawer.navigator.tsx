import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {ShopNavigator} from '../shop';
import {DrawerParamList} from './drawer.types';
import {HomeNavigator} from '../home';

const Drawer = createDrawerNavigator<DrawerParamList>();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Shop" component={ShopNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
