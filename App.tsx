import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReadingList from './components/ReadingList/ReadingList';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <ReadingList />
      <StatusBar style="auto" />
    </View>
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
