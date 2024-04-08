import { Box } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from "react";
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const MessageScreen = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
  
    const handleAddMessage = () => {
      if (inputText) {
        const newMessage = { id: messages.length + 1, text: inputText };
        setMessages([...messages, newMessage]);
        setInputText('');
      }
    };
    return (
        <Box>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                placeholder="Type your message here"
                onChangeText={text => setInputText(text)}
                value={inputText}
            />
            <Button title="Add Message" onPress={handleAddMessage} />

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