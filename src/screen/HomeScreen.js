import React, { useEffect, useMemo, useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Box, GluestackUIProvider, Text, Pressable, Image } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import MapView, { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import mapMarker from "../json/mapMarker.json";
import { useDispatch, useSelector } from "react-redux";
import { selectToggle, toggleColorMode } from "../redux/toggleSlice";
import { selectBorrow, borrowToggle } from "../redux/borrowSlice";
import { selectBuilding, buildingUmbrellaPlus, buildingUmbrellaMinus } from "../redux/building/buildingSlice";
import { selectNearest } from "../redux/nearestSlice";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import ConfirmationModal from "../component/ConfirmationModal";
import FailedModal from "../component/FaildModal";
import Hint from "../component/Hint";
import searchMap from "../json/searchMap.json"

const HomeScreen = () => {
    const colormode = useSelector(selectToggle);
    const dispatch = useDispatch();
    const [markers, setMarkers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMarkerId, setSelectedMarkerId] = useState(null);
    const [failed, setFailed] = useState(false);
    const borrowed = useSelector(selectBorrow);
    const UmbrellaSum = useSelector(selectBuilding);
    const nearest = useSelector(selectNearest);
    const mapRef = useRef(null);

    useEffect(() => {
        setMarkers(mapMarker);
    }, []);

    const toggleFunction = () => {
        dispatch(toggleColorMode());
    };

    const handleConfirm = () => {
        setModalVisible(false);
        setMarkers([...markers]);
    };

    const handleCancel = () => {
        setModalVisible(false);
        setFailed(false);
    };

    const openConfirmationModal = (markerId) => {
        setModalVisible(true);
        setSelectedMarkerId(markerId);
    };

    const onConfirm = (MarkerId) => {
        if (borrowed) {
            borrowToggleFunction();
            UmbrellaPlusFunction(MarkerId);
            handleConfirm();
        }
        else if (!borrowed && UmbrellaSum[MarkerId] > 0) {
            borrowToggleFunction();
            UmbrellaMinusFunction(MarkerId);
            handleConfirm();
        }
        else {
            setFailed(true);
            setModalVisible(false);
        }
    }

    const borrowToggleFunction = () => {
        dispatch(borrowToggle());
    }

    const UmbrellaMinusFunction = (id) => {
        dispatch(buildingUmbrellaMinus(id));
    }

    const UmbrellaPlusFunction = (id) => {
        dispatch(buildingUmbrellaPlus(id));
    }

    const handleMarkerPress = (markerId) => {
        setSelectedMarkerId(markerId);
        bottomSheetRef.current.snapToIndex(1);
    };

    const handleMarkerRelease = () => {
        setSelectedMarkerId(null);
    };

    const snapPoints = useMemo(() => ['3%', '40%'], []);
    const bottomSheetRef = useRef(null);
    const handleButtonPress = () => {
        bottomSheetRef.current.snapToIndex(0);
    };

    const bottomSheetText = borrowed ? "立即還傘" : "立即借傘";

    const targetCoordinate = nearest !== null ? {
        latitude: mapMarker[nearest].latitude,
        longitude: mapMarker[nearest].longitude
    } : null;

    const handleCenterCoordinate = () => {
        if (mapRef.current && targetCoordinate) {
            mapRef.current.animateToRegion({
                ...targetCoordinate,
                latitudeDelta: 0.0001,
                longitudeDelta: 0.0001,
            });
        } else {
            console.error('targetCoordinate is not defined');
        }
    };

    return (
        <Box flex={1}>
            <GluestackUIProvider config={config}>
                <MapView
                    ref={mapRef}
                    initialRegion={{
                        longitude: 121.544637,
                        latitude: 25.024624,
                        longitudeDelta: 0.001,
                        latitudeDelta: 0.002,
                    }}
                    style={styles.map}
                    showsTraffic
                    mapType="terrain"
                >
                    {markers.map(marker => (
                        <Marker
                            key={marker.id}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            onPress={() => handleMarkerPress(marker.id)}
                        >
                            <MaterialCommunityIcons
                                name={'map-marker'}
                                size={selectedMarkerId === marker.id ? 70 : 50}
                                color={colormode == "light" ? "#9DD8CD" : "#FFB800"}
                                style={{ elevation: 10 }}
                            />
                        </Marker>
                    ))}
                </MapView>

                <BottomSheet
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={snapPoints}
                >
                    <BottomSheetView>
                        <Box justifyContent="center" alignItems="center" marginVertical={3}>
                            <Box flexDirection="row">
                                <Image
                                    source={{ uri: selectedMarkerId == null ? searchMap[0].picture : searchMap[selectedMarkerId].picture }}
                                    alt="Selected Marker"
                                    width={150}
                                    height={150}
                                    borderRadius={50}
                                    margin={20}
                                />

                                <Box justifyContent="center" height={150} margin={20}>
                                    <Text fontWeight="bold" fontSize={35} margin={10} marginTop={0}>{selectedMarkerId == null ? mapMarker[0].title : mapMarker[selectedMarkerId].title}</Text>
                                    <Text fontSize={20}>可借： {UmbrellaSum[selectedMarkerId]} 把傘</Text>
                                    <Text fontSize={20}>可還： {UmbrellaSum[selectedMarkerId]} 把傘</Text>
                                </Box>
                            </Box>
                            <Pressable
                                onPress={() => {
                                    handleMarkerRelease();
                                    handleButtonPress();
                                    openConfirmationModal(selectedMarkerId);
                                }}>
                                <Box backgroundColor="pink" padding={10} paddingHorizontal={100} borderRadius={20}>
                                    <Text fontSize={25}>{bottomSheetText}</Text>
                                </Box>
                            </Pressable>
                        </Box>
                    </BottomSheetView>
                </BottomSheet>

                <Hint onPress={handleCenterCoordinate}/>

                <ConfirmationModal
                    isVisible={modalVisible}
                    MarkerId={selectedMarkerId}
                    borrowed={borrowed}
                    onConfirm={onConfirm}
                    onCancel={handleCancel}
                />
                <FailedModal
                    FailedisVisible={failed}
                    onCancel={handleCancel}
                />

                <View style={styles.toggleButton}>
                    <TouchableOpacity onPress={toggleFunction}>
                        <MaterialCommunityIcons
                            name={colormode === "light" ? "moon-waxing-crescent" : "white-balance-sunny"}
                            size={20}
                            color={colormode === "light" ? "black" : "gold"}
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
    buttonContainer: {
        position: 'absolute',
        top: '90%',
        left: '50%',
        transform: [{ translateX: -75 }],
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    toggleButton: {
        position: "absolute",
        top: "88%",
        left: "3%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
    },
});

export default HomeScreen;