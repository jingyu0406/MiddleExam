import { Box, Button, Pressable, Text } from "@gluestack-ui/themed";
import { retry } from "@reduxjs/toolkit/query";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [number, setnumber] = useState('')
    const [loading, setLoading] = useState(false)

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error)
            alert('登入錯誤:' + error.message);
        }
        finally {
            setLoading(false);
        }
    }

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
            <Text style={{ fontWeight: "bold" }} marginLeft={80} marginBottom={10}>學號</Text>
            <Box marginLeft={80} marginRight={80} marginBottom={10} borderColor="darkgray" borderWidth={1} borderRadius={5} padding={1} paddingLeft={5}>
                <TextInput
                    value={number}
                    placeholder="number"
                    placeholderTextColor={"darkgray"}
                    onChangeText={(text) => setnumber(text)}
                    secureTextEntry={true}
                />
            </Box>
            <Text style={{ fontWeight: "bold" }} marginLeft={80} marginBottom={10}>密碼</Text>
            <Box marginLeft={80} marginRight={80} marginBottom={10} borderColor="darkgray" borderWidth={1} borderRadius={5} padding={1} paddingLeft={5}>
                <TextInput
                    value={password}
                    placeholder="password"
                    placeholderTextColor={"darkgray"}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
            </Box>

            <Box marginLeft={110} marginTop={0} flexDirection="row">
                {loading ? (
                    //等待時轉圈圈
                    <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                    <>
                        <Box alignItems="center" marginLeft={80} marginRight={80} paddingBottom={5} borderRadius={30} backgroundColor="#73DBC8">

                            <Button color="#73DBC8" title="登入" onPress={signIn} />
                        </Box>


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
                    </>
                )}


            </Box>


        </Box>
    )
}

export default LoginScreen;