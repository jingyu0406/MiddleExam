import { Box, HStack} from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from "react";
import { StyleSheet, Text, View,TextInput,Button, Pressable} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useSelector, useDispatch } from 'react-redux';
import { selectMessage, writeMessage } from '../redux/messageSlice';
import messageSlice from '../redux/messageSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';




const SearchScreen = ({ navigation }) => {
    return (
        <Box padding={20}>
            <Text>12</Text>

        </Box>

    )
}

export default SearchScreen