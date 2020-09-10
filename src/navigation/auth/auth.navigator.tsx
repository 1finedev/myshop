import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Landing, Login, SignUp} from '../../screens';
import {defaultAuthStackNavigationOptions} from '../utils.navigation';
import {AuthStackParamList} from './auth.types';

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={defaultAuthStackNavigationOptions}>
      <AuthStack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
