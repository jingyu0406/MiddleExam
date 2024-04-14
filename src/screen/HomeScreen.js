import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Box, GluestackUIProvider, Center, HStack, Text, FlatList, Button, Pressable } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import MapView, { Callout, Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import mapMarker from "../json/mapMarker.json";
import { useDispatch, useSelector } from "react-redux";
import { selectToggle, toggleColorMode } from "../redux/toggleSlice";
import { selectBorrow, borrowToggle } from "../redux/borrowSlice";


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


    // //darkmode 
    // Get states from store
    const colormode = useSelector(selectToggle);

    // Define a dispatch to send actions
    const dispatch = useDispatch();


    const toggleFunction = () => {
        dispatch(toggleColorMode());
    };


    //讀json
    const [markers, setMarkers] = useState([]);
    useEffect(() => {
        // 讀取 JSON 文件中的標記數據
        setMarkers(mapMarker);
    }, []);

    //屆的變數
    const borrowed = useSelector(selectBorrow);
    const borrowToggleFunction=()=>{
        dispatch(borrowToggle());
    }



    return (
        <Box flex={1}>
            <GluestackUIProvider config={config}>
                <MapView
                    region={region}
                    style={styles.map}
                    showsTraffic
                    mapType="terrain">
                    {markers.map(marker => (
                        <Marker
                            key={marker.id}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            title={marker.title}
                            description={marker.description}
                        >
                            <Callout                                         
                            onPress={() => {
                                console.log('Button pressed');
                                console.log({ borrowed });
                                borrowToggleFunction();
                            }}>
                                <Box width={200} height="auto" alignItems="center">
                                    <Text fontWeight="bold">{marker.title}</Text>
                                    <Text>{marker.description}</Text>
                                </Box>
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
                <View style={styles.toggleButton}>
                    <TouchableOpacity onPress={toggleFunction}>
                        <MaterialCommunityIcons
                            name={colormode === "light" ? "moon-waxing-crescent" : "white-balance-sunny"}
                            size={20}
                            color={colormode === "light" ? "black" : "gold"} // 根據切換按鈕的狀態設置不同的顏色
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
        top: "88%",
        left: "3%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

export default HomeScreen;