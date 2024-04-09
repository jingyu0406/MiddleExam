import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import Message from '../component/Message';
import MessageScreen from './MessageScreen';

import { useSelector } from 'react-redux';
import { selectMessage } from '../redux/messageSlice';

const MessageBoard = ({navigation}) => {
  const message = useSelector(selectMessage);

  return (
    <View style={{ flex: 1, padding: 20 }}>
 
      <Button title="Add" onPress={() => navigation.navigate('留言')} />

      <FlatList
        data={message}
        renderItem={({ item }) => 
        <Message text={item.text} id={item.id} />
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