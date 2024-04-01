import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import TestScreen from '../screen/TestScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
const MyTabs=() => {
    return (
      <Tab.Navigator
      initialRouteName='Home'
      tabBarPosition="bottom"
        screenOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                )
            }}
            />
        <Tab.Screen name="Settings" component={TestScreen} 
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bookmark" color={color} size={30} />
                )
            }}
        />
      </Tab.Navigator>
    );
  }

export default Navigation;