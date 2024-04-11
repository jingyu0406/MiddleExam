import { Box } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from "react";
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useSelector, useDispatch } from 'react-redux';
import { selectMessage, writeMessage } from '../redux/messageSlice';
import messageSlice from '../redux/messageSlice';



const MessageScreen = ({ navigation }) => {
    const [inputText, setInputText] = useState('');
  
    const dispatch= useDispatch();

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
    return (
        <Box>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                placeholder="Type your message here"
                onChangeText={setInputText}
                value={inputText}
            />
            <Button title="Add Message" onPress={()=>{
                handleAddMessage();
                navigation.navigate('留言板')
            }

                } />

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

export default MessageScreen