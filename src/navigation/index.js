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
import SearchScreen from '../screen/SearchScreen';


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
        tabBarStyle: { height: 60, backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B" }, //更改tab的高度
        tabBarActiveTintColor: "#FFE7AB",
        tabBarInactiveTintColor: 'white',
        tabBarLabel: () => null

      }}
    >
      <Tab.Screen name="留言區" component={MessageStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={30} />
          )
        }}
      />
      <Tab.Screen name="借傘" component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="umbrella" color={color} size={40} />
          )
        }}
      />
      <Tab.Screen name="個人" component={AccountStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  const colormode = useSelector(selectToggle);
  return (
    <Stack.Navigator
      initialRouteName='-傘電-'
    >
      <Stack.Screen
        name="-傘電-"

        component={HomeScreen}
        options={{
          headerTitleStyle: {
            fontWeight: "bold"
          },

          headerTintColor:
            "white"
          ,
          headerStyle: {
            backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B"
          },

          headerTitleAlign: "center", //文字置中
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={30}
              color={"white"}
              style={{ marginRight: 10 }}
              onPress={() => navigation.navigate('search')} // 在這裡添加導航功能

            />
          )
        }

        }
      />
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B"
          },
        }}
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
            "white"
          ,
          headerTitleStyle: {
            fontWeight: "bold"
          },
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
          headerTintColor:
            "white"
          ,
          headerTitleStyle: {
            fontWeight: "bold"
          },
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
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerTintColor:
            "white"
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