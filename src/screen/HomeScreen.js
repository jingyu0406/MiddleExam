import React, { useEffect, useMemo, useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Box, GluestackUIProvider, Center, HStack, Text, FlatList, Button, Pressable, Image } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import MapView, { Callout, Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import mapMarker from "../json/mapMarker.json";
import { useDispatch, useSelector } from "react-redux";
import { selectToggle, toggleColorMode } from "../redux/toggleSlice";
import { selectBorrow, borrowToggle } from "../redux/borrowSlice";
import { selectBuilding, buildingUmbrellaPlus, buildingUmbrellaMinus } from "../redux/building/buildingSlice";
import { BoxShadow } from "react-native-shadow";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FailedModal from "../component/FaildModal";
import ConfirmationModal from "../component/ConfirmationModal";
import Hint from "../component/Hint";
import searchMap from "../json/searchMap.json"

const HomeScreen = () => {

    const colormode = useSelector(selectToggle);
    const dispatch = useDispatch();

    const toggleFunction = () => {
        dispatch(toggleColorMode());
    };

    const [markers, setMarkers] = useState([]);
    useEffect(() => {
        setMarkers(mapMarker);
    }, []);

    const borrowed = useSelector(selectBorrow);
    const borrowToggleFunction = () => {
        dispatch(borrowToggle());
    }

    const [modalVisible, setModalVisible] = useState(false);

    const handleConfirm = () => {
        console.log('Confirmed');
        setModalVisible(false);
        setMarkers([...markers]);
    };

    const handleCancel = () => {
        console.log('Cancelled');
        setModalVisible(false);
        setfailed(false);
    };

    const openConfirmationModal = (markerId) => {
        setModalVisible(true);
        setSelectedMarkerId(markerId);
    };

    const onConfirm = (MarkerId) => {
        console.log({ borrowed });
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
            setfailed(true);
            setModalVisible(false);
        }
    }

    const UmbrellaSum = useSelector(selectBuilding);
    const UmbrellaMinusFunction = (id) => {
        dispatch(buildingUmbrellaMinus(id));
    }
    const UmbrellaPlusFunction = (id) => {
        dispatch(buildingUmbrellaPlus(id));
    }

    const [selectedMarkerId, setSelectedMarkerId] = useState(null);

    const [failed, setfailed] = useState(false);

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
        bottomSheetRef.current.snapToIndex(0) // 使用 bottomSheetRef.current 获取 BottomSheet 组件实例
    };
    const bottomSheetText= borrowed ? "立即還傘" : "立即借傘"

    return (
        <Box flex={1}>
            <GluestackUIProvider config={config}>
                <MapView
                    initialRegion={{
                        longitude: 121.544637,
                        latitude: 25.024624,
                        longitudeDelta: 0.001,
                        latitudeDelta: 0.002,
                    }}
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
                        <Box
                            justifyContent="center"
                            alignItems="center"
                            marginVertical={3}
                        >
                            <Box
                                flexDirection="row"
                            >
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
                                    handleButtonPress(); // 调用移动 Bottom Sheet 的函数
                                    openConfirmationModal(selectedMarkerId);
                                }}>
                                <Box
                                    backgroundColor="pink"
                                    padding={10}
                                    paddingHorizontal={100}
                                    borderRadius={20}
                                >
                                    <Text fontSize={25}>{bottomSheetText}</Text>
                                </Box>
                            </Pressable>
                        </Box>
                    </BottomSheetView>
                </BottomSheet>

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
                <Hint />
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