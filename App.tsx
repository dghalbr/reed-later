import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen/HomeScreen';
import SettingsScreen from './components/SettingsScreen/SettingsScreen';
import React from 'react';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const theme = {
  light: {
    primary: '#4CAF50', // Green color
    secondary: '#FFFFFF', // White color
    background: '#F5F5F5', // Light gray background
    text: '#212121', // Dark gray text
  },
  dark: {
    // Add dark theme colors if needed
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      color: theme.light.text,
      fontSize: 24
  }
});
