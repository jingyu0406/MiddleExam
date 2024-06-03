import { Box, Pressable, ScrollView, Text, View, useColorMode } from "@gluestack-ui/themed";
import { Picker } from "@react-native-picker/picker";

import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FIREBASE_AUTH, FIREBASE_DB, auth } from "../api/FireBase"; // 確保這裡的路徑正確
import { ActivityIndicator, ActivityIndicatorBase, Button, KeyboardAvoidingView } from "react-native";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { firebase } from "@react-native-firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/accountSlice";
import { selectToggle } from "../redux/toggleSlice";
import { setEmail } from "../redux/emailSlice";
import { setName } from "../redux/nameSlice";

const SignUpScreen = ({ navigation }) => {
    const colormode = useSelector(selectToggle)
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setnumber] = useState('')
    const [loading, setLoading] = useState(false)
    const [gender, setgender] = useState('female')
    const [name, setname] = useState('')
    const [id, setid] = useState('')
    const auth = FIREBASE_AUTH
    const data = FIREBASE_DB
    const dispatch = useDispatch();
    const [showError, setShowError] = useState(false);

    // const handleEmailChange = (text) => {
    //     setEmail(text);
    //     dispatch(setEmail(text));
    // }
    const signUp = async () => {
        //檢查必填項目是否填寫
        if (!email || !password || !number || !id || !gender) {
            alert('尚未輸入完全(密碼需5字以上)')
            return;
        }

        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            //儲存額外的用戶資料
            const user = response.user
            await setDoc(doc(data, 'users', user.uid), {
                name: name,
                email: email,
                number: number,
                id: id,
                gender: gender,
            });
            console.log(response);
            alert('已創建用戶資料並儲存')
            dispatch(setEmail(email))
            dispatch(setName(name))
            dispatch(logIn());
        } catch (error) {
            console.log(error)
            alert('註冊錯誤:' + error.message);
        }
        finally {
            setLoading(false);

            // navigation.navigate('HomeScreen')
        }
    }

    return (
        <Box flex={1} backgroundColor={colormode == "light" ? "white" : "#404040"}>
            <Box alignItems={"center"} marginTop={50} marginBottom={10}>
                <MaterialCommunityIcons
                    marginRight={10}
                    marginBottom={10}
                    name="account"
                    size={100}
                    color='white'
                    backgroundColor={gender === "female" ? 'pink' : 'lightblue'}
                    style={{
                        borderRadius: 100000
                    }}
                />
            </Box>
            <ScrollView>
                <KeyboardAvoidingView behavior="padding">
                    <Text style={{ fontWeight: "bold", color: colormode === "light" ? "black" : "white" }} marginLeft={80} marginBottom={10}>姓名</Text>
                    <Box marginLeft={80} marginRight={80} marginBottom={10} borderColor="darkgray" borderWidth={1} borderRadius={5} padding={1} paddingLeft={5}>

                        <TextInput
                            value={name}
                            placeholder="name"
                            placeholderTextColor={"darkgray"}
                            onChangeText={(text) => setname(text)}
                            style={{ color: colormode === "light" ? "black" : "white" }}
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
                    <Text style={{ fontWeight: "bold", color: colormode === "light" ? "black" : "white" }} marginLeft={80} marginBottom={10}>身分證字號</Text>
                    <Box marginLeft={80} marginRight={80} marginBottom={10} borderColor="darkgray" borderWidth={1} borderRadius={5} padding={1} paddingLeft={5}>
                        <TextInput
                            value={id}
                            placeholder="id"
                            placeholderTextColor={"darkgray"}
                            onChangeText={(text) => setid(text)}
                            secureTextEntry={true}
                            style={{ color: colormode === "light" ? "black" : "white" }}

                        />
                    </Box>
                    <Text style={{ fontWeight: "bold", color: colormode === "light" ? "black" : "white" }} marginLeft={80} marginBottom={10}>學號</Text>
                    <Box marginLeft={80} marginRight={80} marginBottom={10} borderColor="darkgray" borderWidth={1} borderRadius={5} padding={1} paddingLeft={5}>
                        <TextInput
                            value={number}
                            placeholder="number"
                            placeholderTextColor={"darkgray"}
                            onChangeText={(text) => setnumber(text)}
                            secureTextEntry={true}
                            style={{ color: colormode === "light" ? "black" : "white" }}
                        />
                    </Box>
                    <Text style={{ fontWeight: "bold", color: colormode === "light" ? "black" : "white" }} marginLeft={80} marginBottom={10}>性別</Text>
                    <Box marginLeft={80} marginRight={80} marginBottom={20} backgroundColor={colormode == "light" ? "white" : "darkgray"} borderColor="darkgray" borderWidth={1} borderRadius={5}>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(gender) =>
                                setgender(gender)
                            }>
                            <Picker.Item style={{ color: "black" }} label="女性" value="female" />
                            <Picker.Item style={{ color: "black" }} label="男性" value="male" />
                        </Picker>
                    </Box>
                    {loading ? (
                        //等待時轉圈圈
                        <ActivityIndicator size="small" color="#0000ff" />
                    ) : (
                        <>
                            <Pressable color="#73DBC8" title="註冊" onPress={signUp}>

                                <Box
                                    alignItems="center"
                                    marginLeft={80}
                                    marginRight={80}
                                    paddingBottom={5}
                                    borderRadius={30}
                                    backgroundColor={colormode === "light" ? "#73DBC8" : "#FFB800"}>
                                    <Text color="white">註冊</Text>

                                </Box>
                            </Pressable>
                            <Pressable
                                marginLeft={150}
                                onPress={() => {
                                    navigation.navigate('LoginScreen')
                                }}
                            >
                                <Text fontSize={10} color="lightgray" textDecorationLie="underline">已經有帳號了嗎?立即登入</Text>
                            </Pressable>
                        </>
                    )}

                </KeyboardAvoidingView>
            </ScrollView>
        </Box >
    )
}

export default SignUpScreen;
