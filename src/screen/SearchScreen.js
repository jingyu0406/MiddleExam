import { Box, FlatList, HStack, Image, Text } from '@gluestack-ui/themed';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useSelector, useDispatch } from 'react-redux';
import { selectMessage, writeMessage } from '../redux/messageSlice';
import messageSlice from '../redux/messageSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import Search from "../component/Search"
import searchMap from "../json/searchMap.json"
import { selectToggle } from '../redux/toggleSlice';
import { selectBuilding, buildingUmbrellaPlus, buildingUmbrellaMinus} from "../redux/building/buildingSlice";


const SearchScreen = ({ navigation }) => {
    const colormode = useSelector(selectToggle);
    const UmbrellaSum = useSelector(selectBuilding);
    const filteredData = searchMap.filter(item => UmbrellaSum[item.id]>0);


    return (
        <Box flex={1} backgroundColor={colormode == "light" ? "#D9EFEB" : "#333333"}>
            <Box padding={10} backgroundColor={colormode == "light" ? "#FFB800" : "#FFB800"}>
                <Text fontSize={15} color="white">
                    目前尚有傘的地點
                </Text>
            </Box>

            <FlatList
                horizontal={false}
                data={filteredData}
                renderItem={({ item }) => <Search search={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </Box>
    )
}

export default SearchScreen