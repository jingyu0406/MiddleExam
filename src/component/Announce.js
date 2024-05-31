import React from 'react';
import { Box, Button, Text, } from '@gluestack-ui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { Pressable, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectToggle } from '../redux/toggleSlice';
import { useTheme } from '@react-navigation/native';



const FloatingActionButton = ({ onPress }) => {
    return (
        <Pressable style={styles.FAB} onPress={onPress}>
            <MaterialCommunityIcons name="plus" size={30} color="white" />
        </Pressable>
    );
};

const Announce = ({ text, text2 }) => {

    const colormode = useSelector(selectToggle);
    return (

        <Box

            alignItems='center'
            borderWidth={2}
            marginHorizontal={20}
            marginBottom={30}
            paddingVertical={70}
            padding={10}
            flex={1}
            borderColor={colormode === "light" ? "#D9EFEB" : "#434343"}
            backgroundColor={colormode === "light" ? "white" : "#6B6B6B"}
            borderRadius={20}
        >

            <Text fontSize={30} width={270} color={colormode === "light" ? "#434343" : "white"}>{text} </Text>
            <Text fontSize={25} width={270} color={colormode === "light" ? "#434343" : "white"}>{text2} </Text>
        </Box >

    );
}

export default Announce