import { Box, Pressable, Text } from "@gluestack-ui/themed";
import { retry } from "@reduxjs/toolkit/query";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { ActivityIndicator, Button, } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FIREBASE_AUTH } from "../api/FireBase";
import HomeScreen from "./HomeScreen";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/accountSlice";
import { selectToggle } from "../redux/toggleSlice";

const LoginScreen = () => {
    const colormode = useSelector(selectToggle);
    const [password, setPassword] = useState('');
    const [email, setemail] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const signIn = async () => {
        //判斷有無輸入
        if (!email || !password)
            return;

        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);

            dispatch(logIn());
        } catch (error) {
            console.log(error)
            alert('登入錯誤:' + error.message);
        }
        finally {
            setLoading(false);

            // navigation.navigate('HomeScreen')
        }
    }

    return (
        <Box flex={1} backgroundColor={colormode == "light" ? "white" : "#404040"}>
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
            <Text style={{ fontWeight: "bold", color: colormode === "light" ? "black" : "white" }} marginLeft={80} marginBottom={10}>信箱</Text>
            <Box marginLeft={80} marginRight={80} marginBottom={10} borderColor="darkgray" borderWidth={1} borderRadius={5} padding={1} paddingLeft={5}>
                <TextInput
                    value={email}
                    placeholder="email"
                    placeholderTextColor={"darkgray"}
                    onChangeText={(text) => setemail(text)}
                    style={{ color: colormode === "light" ? "black" : "white" }}
                />
            </Box>
            <Text style={{ fontWeight: "bold", color: colormode === "light" ? "black" : "white" }} marginLeft={80} marginBottom={10}>密碼</Text>
            <Box marginLeft={80} marginRight={80} marginBottom={10} borderColor="darkgray" borderWidth={1} borderRadius={5} padding={1} paddingLeft={5}>
                <TextInput
                    value={password}
                    placeholder="password"
                    placeholderTextColor={"darkgray"}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    style={{ color: colormode === "light" ? "black" : "white" }}
                />
            </Box>


            {loading ? (
                //等待時轉圈圈
                <ActivityIndicator size="small" color="#0000ff" />
            ) : (
                <>
                    <Pressable  title="登入" onPress={signIn}>
                        <Box
                            marginTop={15}
                            alignItems="center"
                            marginLeft={80}
                            marginRight={80}
                            paddingBottom={5}
                            borderRadius={30}
                            backgroundColor={colormode === "light" ? "#73DBC8" : "#FFB800"}>

                            <Text color="white">登入</Text>
                        </Box>
                    </Pressable>

                    {/*忘記密碼區 */}
                    {/* <Pressable
                        onPress={() => {
                            console.log('Button pressed');
                            navigation.navigate('忘記密碼')
                        }}
                    >

                        <Text color="lightgray" textDecorationLine="underline">忘記密碼?</Text>
                    </Pressable> */}
                    {/* <Text color="lightgray">or</Text> */}
                    <Pressable
                        marginLeft={165}
                        justifyContent="center"
                        onPress={() => {
                            navigation.navigate('SignUpScreen')
                        }}
                    >
                        <Text fontSize={10} color="lightgray" textDecorationLine="underline">沒有帳號?立即註冊</Text>
                    </Pressable>
                </>
            )}
        </Box >





    )
}

export default LoginScreen;