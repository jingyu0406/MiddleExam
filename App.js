import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './src/navigation';


export default function App() {
  return (
    <Navigation/>
  );
}
