import { Box, Pressable, Text } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectToggle } from '../redux/toggleSlice';
import { logIn, logOut, selectIsLoggedIn } from '../redux/accountSlice';
import { selectUserEmail } from '../redux/emailSlice';

const AccountScreen = ({ navigation, email }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const dispatch = useDispatch()
    const userEmail = useSelector(selectUserEmail);
    const colormode = useSelector(selectToggle);
    const { colors } = useTheme();
    return (
        /*         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Account!</Text>
                </View> */
        <Box flex={1} padding={30} backgroundColor={colormode == "light" ? "white" : "#404040"}>
            <Box flexDirection='row' marginBottom={10}>
                <MaterialCommunityIcons
                    marginRight={30}
                    marginBottom={10}
                    name="account"
                    size={80}
                    color='white'
                    backgroundColor='pink'
                    style={{
                        borderRadius: 100000
                    }}
                />
                <Box padding={5}>
                    <Text color={colormode == "light" ? "black" : "white"} fontSize={20} marginBottom={10}>傘電鳥</Text>
                    <Text color={colormode == "light" ? "gray" : "#E1E1E1"} fontSize={15} >Email:{userEmail}</Text>
                </Box>
            </Box>
            <Pressable
                margin
                marginHorizontal={7}
                backgroundColor={colormode == "light" ? "#73DBC8" : "#A5A5A5"}
                borderRadius={5}
                height={35}
                alignItems='center'
                justifyContent='center'
                width={335}
                onPress={() => {
                    //console.log('Button pressed');
                    navigation.navigate('編輯個人資料')
                }} >

                <Text color="white" >編輯個人資料</Text>


            </Pressable>
            <Box width='auto' height={1} backgroundColor={colormode == "light" ? "#73DBC8" : "#A5A5A5"} marginVertical={20}></Box>

            <Box
                width='auto'
                height={50}
                backgroundColor={colormode == "light" ? "#D9EFEB" : "#A5A5A5"}
                marginVertical={10}
                alignItems='center'
                justifyContent='center'
                borderRadius={5}
            >
                <Box flexDirection='row' justifyContent='space-between' alignItems='center' width='100%' paddingHorizontal={15}>
                    <Text color={colormode == "light" ? "black" : "white"} fontSize={15}>借傘歷程</Text>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={40}
                        color='white'
                    />
                </Box>
            </Box>
            <Box
                width='auto'
                height={50}
                backgroundColor={colormode == "light" ? "#D9EFEB" : "#A5A5A5"}
                marginVertical={10}
                alignItems='center'
                justifyContent='center'
                borderRadius={5}
            >
                <Pressable
                    flexDirection='row'
                    justifyContent='space-between'
                    alignItems='center' width='100%'
                    paddingHorizontal={15}
                    onPress={() => {
                        //console.log('Button pressed');
                        navigation.navigate('維護公告')
                    }} >
                    <Text color={colormode == "light" ? "black" : "white"} fontSize={15}>維護公告</Text>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={40}
                        color='white'
                    />
                </Pressable>

            </Box>

            <Box
                width='auto'
                height={50}
                backgroundColor={colormode == "light" ? "#D9EFEB" : "#A5A5A5"}
                marginVertical={10}
                alignItems='center'
                justifyContent='center'
                borderRadius={5}
            >
                <Box flexDirection='row' justifyContent='space-between' alignItems='center' width='100%' paddingHorizontal={15}>
                    <Text color={colormode == "light" ? "black" : "white"} fontSize={15}>常見問題</Text>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={40}
                        color='white'
                    />
                </Box>
            </Box>
            <Pressable
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                width='100%'

                onPress={() => {
                    //console.log('Button pressed');
                    navigation.navigate('地圖')
                    dispatch(logOut())
                }} >

                <Box
                    width='100%'
                    height={50}
                    backgroundColor={colormode == "light" ? "white" : "#FFB800"}
                    borderWidth={1}
                    borderColor={colormode == "light" ? "#73DBC8" : "#FFB800"}
                    marginVertical={10}
                    paddingHorizontal={15}
                    //alignItems='center'
                    justifyContent='center'
                    borderRadius={5}
                >
                    <Text fontSize={15} color={colormode == "light" ? "#73DBC8" : "white"}>登出帳號</Text>
                </Box>
            </Pressable>



        </Box>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AccountScreen