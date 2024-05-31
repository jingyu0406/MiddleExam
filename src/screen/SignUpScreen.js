import { Box, Button, Pressable, Text, View } from "@gluestack-ui/themed";
import { Picker } from "@react-native-picker/picker";

import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FIREBASE_AUTH, auth, createUserWithEmailAndPassword } from "../api/FireBase"; // 確保這裡的路徑正確
import { ActivityIndicator, ActivityIndicatorBase } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState();
    const [identity, setIdentity] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, identity, password);
            console.log(response);
        } catch (error) {
            console.log(error)
            alert('Sign in failed:' + error.message);
        }
        finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, identity, password);
            console.log(response);
            alert('Check your email!')
        } catch (error) {
            console.log(error)
            alert('Sign in failed:' + error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <Box flex={1} justifyContent="center" backgroundColor="white">
            <Text marginHorizontal="20">LoginScreen</Text>
            <Box borderColor="black" borderWidth={1} margin={20} borderRadius={5} padding={10}>
                <TextInput
                    value={identity}
                    placeholder="identity"
                    placeholderTextColor={"darkgray"}
                    onChangeText={(text) => setIdentity(text)}
                />
            </Box>
            <Box borderColor="black" borderWidth={1} margin={20} borderRadius={5} padding={10}>
                <TextInput
                    value={password}
                    placeholder="password"
                    placeholderTextColor={"darkgray"}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
            </Box>

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <Button title="Sign Up" onPress={() => signUp} />
                    <Button title="Login" onPress={() => signIn} />
                </>
            )}
        </Box>
    )
}



// const [selectedValue, setSelectedValue] = useState();
// const [identity, setIdentity] = useState('');
// const [password, setPassword] = useState('');

// // const handleSignUp = () => {
// //     createUserWithEmailAndPassword(auth, identity, password)
// //         .then(userCredentials => {
// //             const user = userCredentials.user;
// //             console.log(user.identity);
// //         })
// //         .catch(error => alert(error.message));
// // };

// return (
//     <Box flex={1} backgroundColor="white">
//         <Box alignItems={"center"} marginTop={50} marginBottom={50}>
//             <MaterialCommunityIcons
//                 marginRight={10}
//                 marginBottom={10}
//                 name="account"
//                 size={100}
//                 color='white'
//                 backgroundColor={selectedValue === "female" ? 'pink' : 'lightblue'}
//                 style={{
//                     borderRadius: 100000
//                 }}
//             />
//         </Box>
//         {/* <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
//             <TextInput placeholder="姓名" placeholderTextColor={"lightgray"} />
//         </Box> */}
//         <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
//             <TextInput
//                 placeholder="身分證字號"
//                 placeholderTextColor={"lightgray"}
//                 value={identity}
//                 onChangeText={text => setIdentity(text)} />
//         </Box>
//         {/* <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
//             <TextInput placeholder="手機號碼" placeholderTextColor={"lightgray"} />
//         </Box>
//         <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
//             <TextInput placeholder="學號" placeholderTextColor={"lightgray"} />
//         </Box> */}
//         <Box marginLeft={80} borderBottomWidth={1} marginRight={80} marginBottom={30}>
//             <TextInput
//                 placeholder="設定密碼"
//                 placeholderTextColor={"lightgray"}
//                 secureTextEntry
//                 value={password}
//                 onChangeText={text => setPassword(text)} />
//         </Box>
//         {/* <Box marginLeft={80} borderWidth={1} marginRight={80} borderColor="black" borderRadius={10}>
//             <Picker
//                 selectedValue={selectedValue}
//                 onValueChange={(itemValue) =>
//                     setSelectedValue(itemValue)
//                 }>
//                 <Picker.Item label="女性" value="female" />
//                 <Picker.Item label="男性" value="male" />
//             </Picker>
//         </Box> */}
//         <Box marginTop={30} alignItems="center" marginLeft={80} marginRight={80} paddingBottom={5} borderRadius={30} backgroundColor="#73DBC8">
//             <Pressable
//                 // handleSignUp
//                 onPress={() => { }}>
//                 <Text fontSize={20} color="white">註冊</Text>
//             </Pressable>
//         </Box>
//         <Box marginLeft={150} marginTop={10}>
//             <Pressable
//                 onPress={() => {
//                     navigation.navigate('LoginScreen')
//                 }}
//             >
//                 <Text color="lightgray" textDecorationLine="underline">已經有帳號了嗎?立即登入</Text>
//             </Pressable>
//         </Box>
//     </Box>
// );
//};

export default SignUpScreen;
