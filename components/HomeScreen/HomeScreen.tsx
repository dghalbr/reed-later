import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import ReadingList from '../ReadingList/ReadingList';

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

export default function HomeScreen({ navigation }: { navigation: any }) { //fix this type lol
  return (
    <View style={styles.container}>
      <ReadingList />
      <StatusBar style="auto" />
    </View>
  );
}