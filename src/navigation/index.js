import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from 'react-native';

import HomeScreen from '../screen/HomeScreen';
import AccountScreen from '../screen/AccountScreen';
import MessageScreen from '../screen/MessageScreen';
import MessageBoard from '../screen/MessageBoard';
import SearchScreen from '../screen/SearchScreen';
import EditAccountScreen from '../screen/EditAccountScreen';
import AnnouncementScreen from '../screen/AnnouncementScreen';
import RegisterScreen from '../screen/SignUpScreen';
import LoginScreen from '../screen/LoginScreen';
import ForgetcodeScreen from '../screen/ForgetcodeScreen';
import SignUpScreen from '../screen/SignUpScreen';

import { selectIsLoggedIn, logIn, logOut } from '../redux/accountSlice';
import MyTheme from '../theme';
import { selectToggle } from '../redux/toggleSlice';
import useColormodeChange from '../component/colorchange/ColormodeChange';
import useAnimatedColor from '../component/colorchange/useAnimated';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => (
  <NavigationContainer theme={MyTheme}>
    <MyTabs />
  </NavigationContainer>
);


const MyTabs = () => {
  const colormode = useSelector(selectToggle);
  const isLoggedIn = useSelector(selectIsLoggedIn); //查看登入狀態
  const backgroundColor = useColormodeChange(colormode, '#73DBC8', '#6B6B6B');
  const dispatch = useDispatch();


  return (
    <Tab.Navigator
      initialRouteName='地圖'
      screenOptions={{
        tabBarStyle: { height: "8%", backgroundColor },
        tabBarActiveTintColor: "#FFE7AB",
        tabBarInactiveTintColor: 'white',
        tabBarLabel: () => null,
        headerStyle: { backgroundColor },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center'
      }}
    >
      <Tab.Screen name="留言區"
        options={{
          tabBarHideOnKeyboard: true,
          //headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={30} />
          ),
        }}>
        {() => <MessageStack />}
      </Tab.Screen>
      <Tab.Screen name="地圖"
        options={{
          //headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="umbrella" color={color} size={40} />
          ),
        }}>
        {() => <HomeStack />}
      </Tab.Screen>
      <Tab.Screen name="個人" options={{
        tabBarHideOnKeyboard: true,
        // headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={30} />
        ),
      }}>


        {() => isLoggedIn ? <AccountStack /> : <LoginStack />}


      </Tab.Screen>
    </Tab.Navigator>
  );
};

const HomeStack = ({ navigation }) => {
  const colormode = useSelector(selectToggle);
  const backgroundColor = useColormodeChange(colormode, '#73DBC8', '#6B6B6B');
  return (
    <Stack.Navigator
      initialRouteName='-傘電-'
    // screenOptions={{
    //   headerStyle: { height: "8%",backgroundColor },
    //   headerTintColor: 'white',
    //   headerTitleStyle: { fontWeight: 'bold' },
    //   headerTitleAlign: 'center'
    // }}
    >
      <Stack.Screen
        name="-傘電-"
        component={HomeScreen}
        options={{
          headerShown: false,
          
        }}
      />
      <Stack.Screen
        name="search"
        component={SearchScreen}
        options={{
          headerShown: false,
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

const MessageStack = () => {
  const colormode = useSelector(selectToggle);
  const { backgroundColor } = useColormodeChange(colormode, '#73DBC8', '#6B6B6B');

  return (
    <Stack.Navigator initialRouteName='留言板'>
      <Stack.Screen
        name="留言板"
        component={MessageBoard}
        options={{
          headerShown: false,
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B", // 动态背景颜色
          headerTitleAlign: "center", //文字置中
        }}
      />
      <Stack.Screen
        name="留言"
        component={MessageScreen}
        options={{
          headerShown: false,
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B", // 动态背景颜色
          headerTitleAlign: "center", //文字置中
        }}
      />
    </Stack.Navigator>

  );
};

const LoginStack = () => {
  const colormode = useSelector(selectToggle);
  const { backgroundColor } = useColormodeChange(colormode, '#73DBC8', '#6B6B6B');

  return (
    <Stack.Navigator
      initialRouteName='LoginScreen'
    // screenOptions={{
    //   backgroundColor: 'white',
    // }}
    >
      <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen}
        options={{
          // headerShown: false,
          headerShown: false,
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
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          // headerShown: false,
          headerShown: false,
          title: "",
          headerBackVisible: false,
          headerTitle: false,
          headerStyle: {
            backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B"
          },

        }}
      />
    </Stack.Navigator >
  )
}

const AccountStack = () => {
  const colormode = useSelector(selectToggle);
  const { backgroundColor } = useColormodeChange(colormode, '#73DBC8', '#6B6B6B');

  return (
    <Stack.Navigator
      initialRouteName='LoginScreen'
    // screenOptions={{
    //   backgroundColor: 'white',
    // }}
    >
      {/* <Stack.Screen
        name="忘記密碼"
        component={ForgetcodeScreen}
        options={{
          // headerShown: false,
          title: "",
          headerBackVisible: false,
          headerTitle: false,
          headerStyle: {
            backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B"
          },

        }}
      /> */}
      <Stack.Screen
        name="關於"
        component={AccountScreen}
        options={{
          headerShown: false,
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
      <Stack.Screen
        name="編輯個人資料"
        component={EditAccountScreen}
        options={{
          headerShown: false,
          headerTintColor:
            "white"
          ,
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerStyle: {
            backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B"
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="維護公告"
        component={AnnouncementScreen}
        options={{
          headerShown: false,
          headerTintColor:
            "white"
          ,
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerStyle: {
            backgroundColor: colormode == "light" ? "#73DBC8" : "#6B6B6B"
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator >
  )
}
export default Navigation;
