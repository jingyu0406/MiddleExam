import { Box, FlatList, Text } from '@gluestack-ui/themed';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Search from '../component/Search';
import searchMap from '../json/searchMap.json';
import { selectToggle } from '../redux/toggleSlice';
import { selectBuilding } from '../redux/building/buildingSlice';
import mapMarker from "../json/mapMarker.json"


const SearchScreen = () => {
    const colormode = useSelector(selectToggle);
    const UmbrellaSum = useSelector(selectBuilding);
    const filteredData = mapMarker.filter(item => UmbrellaSum[item.id] > 0);
    const navigation = useNavigation();

    const handlePress = (item) => {
        const myChoose = {
            latitude: item.latitude,
            longitude: item.longitude,
        };
        console.log(myChoose);
        navigation.navigate('-傘電-', { myChoose });
    };

    return (
        <Box flex={1} backgroundColor={colormode === 'light' ? '#D9EFEB' : '#333333'}>
            <Box padding={10} backgroundColor="#FFB800">
                <Text fontSize={15} color="white">
                    目前尚有傘的地點
                </Text>
            </Box>

            <FlatList
                horizontal={false}
                data={filteredData}
                renderItem={({ item }) => <Search search={item} onPress={() => handlePress(item)} />}
                keyExtractor={item => item.id.toString()}
            />
        </Box>
    );
};

export default SearchScreen;