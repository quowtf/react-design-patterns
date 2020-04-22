import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailsScreen';

const Tab = createBottomTabNavigator();

const StackNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Detail" component={DetailScreen} />
    </Tab.Navigator>
  );
};

export default StackNav;
