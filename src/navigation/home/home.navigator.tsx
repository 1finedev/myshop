import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from './home.types';
import {Home} from '../../screens';

const HomeStack = createStackNavigator<HomeStackParamList>();
const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{title: 'Shopertino', cardStyle: {backgroundColor: 'white'}}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
