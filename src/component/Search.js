import React from 'react';
import { Image, Pressable } from 'react-native';
import { Box, Text } from '@gluestack-ui/themed';
import { useSelector } from 'react-redux';
import { selectToggle } from '../redux/toggleSlice';
import { selectBuilding } from '../redux/building/buildingSlice';

const Search = ({ search, onPress }) => {
    const colormode = useSelector(selectToggle);
    const UmbrellaSum = useSelector(selectBuilding);

    return (
        <Pressable onPress={onPress}>
            <Box
                flex={1}
                flexDirection="row"
                paddingLeft={20}
                paddingTop={10}
                paddingBottom={10}
                backgroundColor={colormode == "light" ? "white" : "#333333"}
                borderColor={colormode == "light" ? "#73DBC8" : "#6B6B6B"}
                borderWidth={2}
                borderRadius={10}
                margin={5}
                marginBottom={3}
            >
                <Box>
                    <Image
                        width={60}
                        height={60}
                        borderRadius={100000000}
                        source={{ uri: search.picture }}
                    />
                </Box>
                
                <Box marginLeft={20} justifyContent="center">
                    <Text fontSize={20} color={colormode == "light" ? "black" : "white"}>{search.title}</Text>
                    <Text fontSize={12} color={colormode == "light" ? "black" : "white"}>剩餘傘:{UmbrellaSum[search.id]}</Text>
                </Box>
            </Box>
        </Pressable>
    );
}

export default Search;