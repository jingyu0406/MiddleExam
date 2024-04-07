import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import Message from '../component/Message';

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleAddMessage = () => {
    if (inputText) {
      const newMessage = { id: messages.length + 1, text: inputText };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Type your message here"
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
      <Button title="Add Message" onPress={handleAddMessage} />
      <FlatList
        data={messages}
        renderItem={({ item }) => 
        <Message text={item.text} id={item.id} onDelete={handleDeleteMessage} />
/*           (<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Text>{item.text}</Text>
            <Button title="Delete" onPress={() => handleDeleteMessage(item.id)} />
          </View> )*/
        }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default MessageBoard;