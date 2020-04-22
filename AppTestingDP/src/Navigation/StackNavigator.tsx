import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpScreen from '../Screens/SignupScreen';
import TabNav from './TabNavigator';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName={'SignUp'}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={TabNav} />
    </Stack.Navigator>
  );
}
