import React from 'react';
import { Box, Button, Text,  } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from '@react-navigation/native';
import { Pressable, StyleSheet } from 'react-native';



const FloatingActionButton = ({ onPress }) => {
    return (
      <Pressable style={styles.FAB} onPress={onPress}>
        <MaterialCommunityIcons name="plus" size={30} color="white" />
      </Pressable>
    );
  };

const Message = ({ text }) => {
    const { colors } = useTheme();
    return (
        
       <Box 
            flexDirection='row'
            alignItems='center'
            borderWidth={1}
            padding={10}
            flex={1}
            borderColor={colors.DayGreen}
            backgroundColor='white'
            >
            <MaterialCommunityIcons 
                marginRight={10} 
                name="account" 
                size={50}
                color='white'
                backgroundColor='pink'
                style={{
                    borderRadius: 100000
                  }}
                />
            <Text fontSize={15} width={270}>{text} </Text>
        </Box> 
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