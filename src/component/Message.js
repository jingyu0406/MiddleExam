import React from 'react';
import { Box, Button, Text } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Message = ({ text}) => {
    return (
        <Box flexDirection='row' marginTop={10} alignItems='center' borderWidth={1}>
            <MaterialCommunityIcons name="home" color="gold" size={90} marginRight={20}/>
            <Text fontSize={30} >{text}</Text>
        </Box>
    );
}

export default Message;