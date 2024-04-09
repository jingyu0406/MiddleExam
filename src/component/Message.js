import React from 'react';
import { Box, Button, Text,  } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from '@react-navigation/native';

const Message = ({ text }) => {
    const { colors } = useTheme();
    return (
        
       <Box 
            flexDirection='row'
            marginTop={10}
            alignItems='center'
            borderWidth={1}
            padding={10}
            flex={1}
            borderColor={colors.DayGreen}
            >
            <MaterialCommunityIcons marginRight={10} name="home" size={60}/>
            <Text fontSize={20} width={270}>{text} </Text>
        </Box> 
    );
}

export default Message;