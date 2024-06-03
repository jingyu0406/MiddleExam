import * as React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './src/navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import store from './src/redux/store';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import MyTheme from './src/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <GluestackUIProvider config={MyTheme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Navigation />
          </GestureHandlerRootView>
        </GluestackUIProvider>
      </Provider>
    </SafeAreaProvider>



  );
}
