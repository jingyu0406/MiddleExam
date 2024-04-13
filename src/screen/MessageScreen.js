import { Box, HStack } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useSelector, useDispatch } from 'react-redux';
import { selectMessage, writeMessage } from '../redux/messageSlice';
import messageSlice from '../redux/messageSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';




const MessageScreen = ({ navigation }) => {
    const { colors } = useTheme();

    const [inputText, setInputText] = useState('');

    const dispatch = useDispatch();

    const handleAddMessage = () => {
        if (inputText) {

            dispatch(writeMessage({
                text: inputText, id: Date.now()
            }))
            setInputText('');
            /*         const newMessage = { id: messages.length + 1, text: inputText };
                    setMessages([...messages, newMessage]);
                    setInputText(''); */
        }
    };

    const styles = StyleSheet.create({
        input: {
            height: 450,
            borderColor: colors.DayGreen,
            borderWidth: 1,
            marginBottom: 10,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 10,
            fontSize: 10
        },
        AddButton: {
            height: 50,
            backgroundColor: colors.DayGreen,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20
        },
        buttonText: {
            fontSize: 20,
            color: "white"
        }
    });


    return (
        <Box padding={20}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                    marginRight={10}
                    marginBottom={10}
                    name="account"
                    size={50}
                    color='white'
                    backgroundColor='pink'
                    style={{
                        borderRadius: 100000
                    }}
                />
                <Text style={{ marginBottom: 10, fontSize: 15 }}>
                    匿名
                </Text>

            </View>
            <TextInput
                style={styles.input}
                placeholder="輸入文字..."
                onChangeText={setInputText}
                value={inputText}
                textAlignVertical="top"
                multiline={true} // 啟用多行輸入
                numberOfLines={null} // 讓文字自動換行
            />
            <Pressable
                style={styles.AddButton}
                onPress={() => {
                    handleAddMessage();
                    navigation.navigate('留言板')
                }} >
                <Text style={styles.buttonText}>發佈</Text>

            </Pressable>

        </Box>

    )
}

export default MessageScreen