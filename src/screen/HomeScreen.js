import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Box, GluestackUIProvider, Center, HStack, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import MapView, { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {

    //Map
    const [region, setRegion] = useState({
        longitude: 121.544637,
        latitude: 25.024624,
        longitudeDelta: 0.001,
        latitudeDelta: 0.002,
    });

    const [marker, setMarker] = useState({
        coord: {
            longitude: 121.544637,
            latitude: 25.024624,
        },
        name: "國立臺北教育大學",
        address: "台北市和平東路二段134號",
    });


    //darkmode
    const [toggle, setToggle] = useState("light");
    const toggleFunction = () => {
        setToggle(toggle === "light" ? "dark" : "light");
    };


    return (
        <Box flex={1}>
            <GluestackUIProvider config={config}>
                <MapView
                    region={region}
                    style={styles.map}
                    showsTraffic
                    mapType="hybrid">
                    <Marker
                        coordinate={marker.coord}
                        title={marker.name}
                        description={marker.address}
                    />
                </MapView>
                <View style={styles.toggleButton}>
                    <TouchableOpacity onPress={toggleFunction}>
                        <MaterialCommunityIcons
                            name={toggle === "light" ? "white-balance-sunny" : "moon-waxing-crescent"}
                            size={20}
                            color={toggle === "light" ? "gold" : "black"} // 根據切換按鈕的狀態設置不同的顏色
                        />
                    </TouchableOpacity>
                </View>
            </GluestackUIProvider>
        </Box>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    toggleButton: {
        position: "absolute",
        top: 670,
        left: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
    },
});

export default HomeScreen;
