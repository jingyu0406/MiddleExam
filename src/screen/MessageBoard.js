import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import Message from '../component/Message';
import MessageScreen from './MessageScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector } from 'react-redux';
import { selectMessage } from '../redux/messageSlice';
import { useNavigation } from '@react-navigation/native';

import { Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { selectToggle } from '../redux/toggleSlice';


const FloatingActionButton = ({ onPress }) => {
  const colormode = useSelector(selectToggle);
  // const { colors } = useTheme();
  const styles = StyleSheet.create({

    FAB: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      width: 60,
      height: 60,
      backgroundColor: colormode == "light" ? "#73DBC8" : "#FFB800",
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
  });

  return (
    <Pressable style={styles.FAB} onPress={onPress}>
      <MaterialCommunityIcons name="plus" size={30} color="white" />
    </Pressable>



  );
};

const MessageBoard = ({ navigation }) => {
  const message = useSelector(selectMessage);
  const colormode = useSelector(selectToggle);




  return (

    <View style={{ flex: 1, backgroundColor: colormode === "light" ? "white" : "#3C3C3C" }}>

      <FloatingActionButton onPress={() => {
        console.log('Button pressed');
        navigation.navigate('留言');
      }} />
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