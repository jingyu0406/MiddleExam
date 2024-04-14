import React from 'react';
import { Box, Button, Text, } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from '@react-navigation/native';
import { Pressable, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectToggle } from '../redux/toggleSlice';



const FloatingActionButton = ({ onPress }) => {
  return (
    <Pressable style={styles.FAB} onPress={onPress}>
      <MaterialCommunityIcons name="plus" size={30} color="white" />
    </Pressable>
  );
};

const Message = ({ text }) => {
  // const { colors } = useTheme();
  const colormode = useSelector(selectToggle);
  return (

    <Box
      flexDirection='row'
      alignItems='center'
      borderBottomWidth={8}
      borderLeftWidth={10}
      borderRightWidth={10}
      paddingBottom={30}
      padding={10}
      flex={1}
      borderColor={colormode === "light" ? "#73DBC8" : "#434343"}
      backgroundColor={colormode === "light" ? "white" : "#6B6B6B"}
    >
      <MaterialCommunityIcons
        marginRight={10}
        name="account"
        size={50}
        color='white'
        backgroundColor='pink'
        style={{
          borderRadius: 50
        }}
      />
      <Text fontSize={15} width={270} color={colormode === "light" ? "#434343" : "white"}>{text} </Text>
    </Box >

  );
}

const styles = StyleSheet.create({
  FAB: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Message;