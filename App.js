import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './src/navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import store from './src/redux/store';

export default function App() {
  return (
    <SafeAreaProvider>
        <Provider store={store}>
          <Navigation/>
        </Provider>
    </SafeAreaProvider>





  );
}
