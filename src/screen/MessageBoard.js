import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import Message from '../component/Message';
import MessageScreen from './MessageScreen';

const MessageBoard = ({navigation}) => {
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
 
      <Button title="Add" onPress={() => navigation.navigate('留言')} />

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