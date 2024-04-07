import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import HomeScreen from '../screen/HomeScreen';
import AccountScreen from '../screen/AccountScreen';
import MessageScreen from '../screen/MessageScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import MessageBoard from '../screen/MessageBoard';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: { height: 80, paddingBottom: 10 }, //更改tab的高度
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="留言區" component={MessageBoard}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={40} />
          )
        }}
      />
      <Tab.Screen name="借傘" component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="umbrella" color={color} size={50} />
          )
        }}
      />
      <Tab.Screen name="關於" component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={40} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="-傘電-"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center", //文字置中
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={30}
              style={{ marginRight: 10 }}
            />
          )
        }

        }
      />
    </Stack.Navigator >
  )
}

export default Navigation;