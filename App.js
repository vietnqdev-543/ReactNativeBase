
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/Login/Login'
import BottomTabs from './src/component/BottomTabs/BottomTabs';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown:false}}  initialRouteName='Login' >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name='BottomTabs' component={BottomTabs} />   
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
