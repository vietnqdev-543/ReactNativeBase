import React from 'react';
import { View } from 'react-native'; // Remove unnecessary imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screen/Home/Home';
import SettingScreen from '../../screen/Setting/Setting';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <View>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </View>
  );
}
