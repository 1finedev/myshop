import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ShopParamList} from './shop.types';
import {ShopHome, Dresses} from '../../screens';

const ShopStack = createStackNavigator<ShopParamList>();

const ShopNavigator = () => {
  return (
    <ShopStack.Navigator
      initialRouteName="ShopHome"
      screenOptions={{cardStyle: {backgroundColor: 'white'}}}>
      <ShopStack.Screen
        name="ShopHome"
        component={ShopHome}
        options={{title: 'Shopertino'}}
      />
      <ShopStack.Screen name="Dresses" component={Dresses} />
    </ShopStack.Navigator>
  );
};

export default ShopNavigator;
