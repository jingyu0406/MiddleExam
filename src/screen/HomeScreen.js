import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Box, GluestackUIProvider, Center, HStack, Text, FlatList } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import MapView, { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import mapMarker from "../json/mapMarker.json";


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


/*     const [markers, setMarkers] = useState([]);

    useEffect(() => {
      // 在這裡發起獲取 JSON 文件的請求
      fetch('../json/mapMarker.json')
        .then(response => response.json())
        .then(data => setMarkers(data))
        .catch(error => console.error('Error fetching markers data:', error));
    }, []); */


    return (

        

        <Box flex={1}>
            <GluestackUIProvider config={config}>
                <MapView
                    region={region}
                    style={styles.map}
                    showsTraffic
                    mapType="terrain">
                    <Marker
                        coordinate={marker.coord}
                        title={marker.name}
                        description={marker.address}
                    />
{/*                     {markers.map(marker => (
                        <Marker
                            key={marker.id}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))} */}
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
