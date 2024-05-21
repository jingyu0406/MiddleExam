import { Box, Pressable, Text } from "@gluestack-ui/themed";
import { retry } from "@reduxjs/toolkit/query";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState();
    return (
        <Box flex={1} backgroundColor="white">
            <Box alignItems={"center"} marginTop={50} marginBottom={50}>
                <MaterialCommunityIcons
                    marginRight={10}
                    marginBottom={10}
                    name="account"
                    size={150}
                    color='white'
                    backgroundColor={"#C6C6C6"}
                    style={{
                        borderRadius: 100000
                    }}
                />
            </Box>
            <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
                <TextInput placeholder="學號" placeholderTextColor={"lightgray"} />
            </Box>
            <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={10}>
                <TextInput placeholder="密碼" placeholderTextColor={"lightgray"} secureTextEntry />
            </Box>
            <Box marginTop={30} alignItems="center" marginLeft={80} marginRight={80} paddingBottom={5} borderRadius={30} backgroundColor="#73DBC8">
                <Pressable>
                    <Text fontSize={20} color="white">登入</Text>
                </Pressable>
            </Box>
            <Box marginLeft={110} marginTop={0} flexDirection="row">
                <Pressable
                    onPress={() => {
                        console.log('Button pressed');
                        navigation.navigate('忘記密碼')
                    }}
                >

                    <Text color="lightgray" textDecorationLine="underline">忘記密碼?</Text>
                </Pressable>
                <Text color="lightgray">or</Text>
                <Pressable
                    onPress={() => {
                        navigation.navigate('新增帳號')
                    }}
                >

                    <Text color="lightgray" textDecorationLine="underline">沒有帳號?立即註冊</Text>
                </Pressable>

            </Box>


        </Box>
    )
}

export default LoginScreen;