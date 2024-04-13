import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import HomeScreen from '../screen/HomeScreen';
import AccountScreen from '../screen/AccountScreen';
import MessageScreen from '../screen/MessageScreen';
import SearchScreen from '../screen/SearchScreen'
import { Header } from 'react-native/Libraries/NewAppScreen';
import MessageBoard from '../screen/MessageBoard';
import { useNavigation } from '@react-navigation/native';



import MyTheme from '../theme';
import { View } from 'react-native';
import { Pressable } from '@gluestack-ui/config/build/theme';

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
  const { colors } = useTheme();

  return (

    <Tab.Navigator
      initialRouteName='借傘'
      //tabBarPosition="bottom"
      screenOptions={{
        tabBarStyle: { height: 60, backgroundColor: colors.DayGreen }, //更改tab的高度
        tabBarActiveTintColor: colors.DayGreen,
        tabBarInactiveTintColor: 'white',
        
        tabBarLabel: () => null

      }}
    >
      <Tab.Screen name="留言區" component={MessageStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color ,focused}) => (
            <View style={{ backgroundColor: focused ? 'white' : 'transparent', borderRadius: 50, padding: 10 }}>
            <MaterialCommunityIcons name="chat" color={color} size={30} />
            </View>
          )
        }}
      />
      <Tab.Screen name="借傘" component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color ,focused}) => (
            <View style={{ backgroundColor: focused ? 'white' : 'transparent', borderRadius: 50, padding: 10 }}>
            <MaterialCommunityIcons name="umbrella" color={color} size={30} />
            </View>
          )
        }}
      />
      <Tab.Screen name="關於" component={AccountScreen}
        options={{
          
          tabBarIcon: ({ color ,focused}) => (
            <View style={{ backgroundColor: focused ? 'white' : 'transparent', borderRadius: 50, padding: 10 }}>
            <MaterialCommunityIcons name="account" color={color} size={30} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='-傘電-'
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
              onPress={() => navigation.navigate('search')} // 在這裡添加導航功能
            />
          )
        }}
      />
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={{
          headerTitleAlign: "center", //文字置中
        }}
      />
    </Stack.Navigator >
  )
}

const MessageStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='留言板'
      screenOptions={{
        backgroundColor: 'white', // 设置背景颜色为白色
      }}
    >
      <Stack.Screen
        name="留言板"
        component={MessageBoard}
        options={{
          headerTitleAlign: "center", //文字置中
        }}
      />
      <Stack.Screen
        name="留言"
        component={MessageScreen}
        options={{
          headerTitleAlign: "center", //文字置中

        }}
      />
    </Stack.Navigator >
  )
}

export default Navigation;