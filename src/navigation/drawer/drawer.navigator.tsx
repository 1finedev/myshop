import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Home} from '../../screens';
import {ShopNavigator} from '../shop';
import {DrawerParamList} from './drawer.types';

const Drawer = createDrawerNavigator<DrawerParamList>();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Shop" component={ShopNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
