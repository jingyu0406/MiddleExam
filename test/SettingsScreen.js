
import { Box, Switch } from "@gluestack-ui/themed"
import React, { useState } from "react";
import {
    GluestackUIProvider,
    Center,
    HStack,
    Button,
    ButtonText,
    Text,
    Pressable
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SettingsScreen = () => {
    const [counter, setCounter] = useState(0);
    // const [colorMode, setColorMode] = useState("light");
    // const toggleColorMode = () => {
    //     if (colorMode == "light") setColorMode("dark");
    //     else setColorMode("light");
    // };

    const [toggle, setToggle] = useState("light");
    const toggleFunction = () => {
        if (toggle == "light") setToggle("dark")
        else setToggle("light")
    };


    const [region, setRegion] = useState({
        longitude: 121.544637,
        latitude: 25.024624,
        longitudeDelta: 0.0001,
        latitudeDelta: 0.0002,
    })
    const [marker, setMarker] = useState({
        coord: {
            longitude: 121.544637,
            latitude: 25.024624,
        },
        name: "國立臺北教育大學",
        address: "台北市和平東路二段134號",
    });

    return (
        <Box flex={1}>

            <GluestackUIProvider config={config}>
                <Center flex={1} bg={toggle == "light" ? "white" : "black"}>
                    <HStack space="3xl">
                        <Button
                            onPress={() => setCounter(counter + 2)}
                            size="md"
                            variant="solid"
                            action="primary"
                        >
                            <ButtonText size="3xl" color="white">
                                +
                            </ButtonText>
                        </Button>
                        <Button
                            onPress={() => setCounter(counter - 2)}
                            size="md"
                            variant="solid"
                            action="primary"
                        >
                            <ButtonText size="3xl" color="white">
                                -
                            </ButtonText>
                        </Button>
                    </HStack>
                    <Text size="3xl" mt="$10" color={toggle == "dark" ? "white" : "black"}>
                        {counter}
                    </Text>

                    <HStack mt={20} space={8} alignItems="center">
                        <Text size="lg" px="$2" color={toggle == "dark" ? "white" : "black"}>
                            {/* {colorMode == "light" ? "Light Mode" : "Dark Mode"} */}
                            {toggle == "light" ? "Light Mode" : "Dark Mode"}
                        </Text>
                        <Pressable onPress={() => toggleFunction()}>
                            <Text>{toggle === "light" ? <MaterialCommunityIcons
                                name={'menu'}
                                size={20}
                                color={"black"}

                            /> : <MaterialCommunityIcons
                                name={'bookmark'}
                                size={20}
                                color={"white"}
                            />}</Text>
                        </Pressable>
                        {/* <Switch
                            name="light Mode"
                            value={colorMode === "light"}
                            onToggle={toggleColorMode}
                            accessibilityLabel="display-mode"
                            accessibilityHint="light or dark mode"
                        /> */}
                    </HStack>

                </Center>

                <MapView
                    region={region}
                    style={{ flex: 1 }}
                    showsTraffic
                    mapType='Retro'>
                    {/* //hybrid */}
                    <Marker
                        coordinate={marker.coord}
                        title={marker.name}
                        description={marker.address}
                    />
                </MapView>
            </GluestackUIProvider>

        </Box>




    )
}

export default SettingsScreen;