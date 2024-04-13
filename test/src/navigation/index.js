import React, { useState } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";

import AccountScreen from "../screens/AccountScreen";
import AlbumScreen from "../screens/AlbumScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DetailScreen from "../screens/DetailScreen";
import MyTheme from "../theme";
import WishlistScreen from "../screens/WishlistScreen";
import MybookScreen from "../screens/MybookScreen";
import store from "../redux/store";
import { selectColorMode } from "../redux/counterSlice";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const Navigation = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            {/* 設定要跳轉的頁面並寫成一個函式 */}
            {/* <StackNavigatior /> */}
            <MyDrawer />
        </NavigationContainer>
    );
}

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}
            contentContainerStyle
        >
            <View style={styles.userContainer}>
                <Image
                    style={styles.drawerimage}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHcOptvjqKcOfu335w1cHsy3ni_d_qDdlg6XSWr3ndEFFwfv3"
                    }} />
                <Text style={styles.user}>May</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}
const styles = StyleSheet.create({
    userContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#EDEDEF'
    },
    drawerimage: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 10,
        margin: 5,
        marginLeft: 20
    },
    user: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 20,
        marginBottom: 20,
    }
});


const MyDrawer = () => {

    return (
        <Drawer.Navigator initialRouteName="HomeStack"
            screenOptions={{

                drawerActiveTintColor: '#6200EE',
                drawerInactiveTintColor: '#666666',
                drawerStyle: { width: 300 },
                drawerLabelStyle: { fontSize: 14, fontWeight: '400' },
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >

            <Drawer.Screen
                name="MyTab"
                component={MyTab}
                options={{
                    headerShown: false,
                    drawerLabel: "Home",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />

            <Drawer.Screen
                name="AccountStack"
                component={AccountStack}
                options={{
                    headerShown: false,
                    drawerLabel: "Account",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                    )
                }
                }
            />
            <Drawer.Screen
                name="SettingStack"
                component={SettingStack}
                options={{
                    headerShown: false,
                    drawerLabel: "Settings",
                    drawerIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    )
                }
                }

            />
        </Drawer.Navigator>
    )
}

const MyTab = () => {
    // 設定顏色
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    return (
        <Tab.Navigator
            // 將stack函數的名稱放進來就可以使用功能
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarActiveTintColor: '#6200EE',
                tabBarInactiveTintColor: '#666666',
                tabBarStyle: {
                    paddingBottom: Platform.OS === 'ios' ? 30 : 5,

                }
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Wishlist"
                component={WishlistScreen}
                options={{

                    title: "Wishlist",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookmark" color={color} size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name="Mybook"
                component={MybookScreen}
                options={{
                    title: "Mybook",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-open" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}



const AccountStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    title: "Account",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 20 }}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}
const SettingStack = ({ navigation }) => {
    const colorMode = useSelector(selectColorMode);
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Setting"
                component={SettingsScreen}
                options={{
                    headerStyle: {
                        backgroundColor: colorMode == "light" ? "white" : "black"
                    },

                    title: "Settings",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20,
                    },

                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 20 }}
                        />
                    )
                }}
            />
        </Stack.Navigator>
    )
}


const HomeStack = ({ navigation }) => {
    const colorMode = useSelector(selectColorMode);
    const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={AlbumScreen}
                options={{
                    headerStyle: {
                        backgroundColor: colorMode == "light" ? "white" : "black"
                    },
                    headerShadowVisible: false,
                    title: "",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'menu'}
                            size={20}
                            onPress={() => navigation.openDrawer()}
                            style={{ marginRight: 20 }}
                        />
                    ),
                    headerRight: () => (
                        <MaterialCommunityIcons
                            name={'magnify'}
                            size={20}
                            style={{ marginRight: 10 }}
                        />
                    )
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    headerShadowVisible: false,
                    title: "",
                    headerLeft: () => (
                        <MaterialCommunityIcons
                            name={'chevron-left'}
                            size={30}
                            onPress={() => navigation.goBack(null)}
                            style={{ marginLeft: 0 }}
                        />
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => toggleFunction()}>
                            {toggle ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={26} /> :
                                <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={26} />}
                        </Pressable>
                    ),
                }}
            />



        </Stack.Navigator>
    );

};
export default Navigation;