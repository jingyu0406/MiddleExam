import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import HomeScreen from '../screen/HomeScreen';
import AccountScreen from '../screen/AccountScreen';
import MessageScreen from '../screen/MessageScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import MessageBoard from '../screen/MessageBoard';


import MyTheme from '../theme';
import { useSelector } from 'react-redux';
import { selectToggle } from '../redux/toggleSlice';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyTabs />
    </NavigationContainer>
  );
}
const MyTabs = () => {
  // const { colors } = useTheme();
  const colormode = useSelector(selectToggle);
  return (

    <Tab.Navigator
      initialRouteName='借傘'
      //tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: { height: 80, paddingBottom: 10, backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B" }, //更改tab的高度
        tabBarActiveTintColor: "#FFB800",
        tabBarInactiveTintColor: 'white',
        tabBarLabel: () => null

      }}
    >
      <Tab.Screen name="留言區" component={MessageStack}
        options={{
          headerShown: false,
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
      <Tab.Screen name="個人" component={AccountStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={40} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
  const colormode = useSelector(selectToggle);
  return (
    <Stack.Navigator
      initialRouteName='-傘電-'
    >
      <Stack.Screen
        name="-傘電-"
        component={HomeScreen}
        options={{
          headerTintColor:
            colormode == "light" ? "black" : "white"
          ,
          headerStyle: {
            backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B"
          },

          headerTitleAlign: "center", //文字置中
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={30}
              color={colormode == "light" ? "black" : "white"}
              style={{ marginRight: 10 }}
            />
          )
        }

        }
      />
    </Stack.Navigator >
  )
}

const MessageStack = () => {
  const colormode = useSelector(selectToggle);
  return (
    <Stack.Navigator
      initialRouteName='留言板'
    // screenOptions={{
    //   backgroundColor: 'white', // 背景白色
    // }}
    >
      <Stack.Screen
        name="留言板"
        component={MessageBoard}
        options={{
          headerTintColor:
            colormode == "light" ? "black" : "white"
          ,
          headerStyle: {
            backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B"
          },
          headerTitleAlign: "center", //文字置中
        }}
      />
      <Stack.Screen
        name="留言"
        component={MessageScreen}
        options={{
          headerStyle: {
            backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B"
          },
          headerTitleAlign: "center", //文字置中
        }}
      />
    </Stack.Navigator >
  )
}

const AccountStack = () => {
  const colormode = useSelector(selectToggle);
  return (
    <Stack.Navigator
      initialRouteName='關於'
    // screenOptions={{
    //   backgroundColor: 'white',
    // }}
    >
      <Stack.Screen
        name="關於"
        component={AccountScreen}
        options={{
          headerTintColor:
            colormode == "light" ? "black" : "white"
          ,
          headerStyle: {
            backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B"
          },
          headerTitleAlign: "center", //文字置中
        }}
      />

    </Stack.Navigator >
  )
}
export default Navigation;