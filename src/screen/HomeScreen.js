import React, { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Box, GluestackUIProvider, Center, HStack, Text, FlatList, Button, Pressable } from "@gluestack-ui/themed";
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
//import { handleConfirm, handleCancel, openConfirmationModal, onConfirm} from "../component/ModalAbout";

const HomeScreen = () => {


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
    const borrowToggleFunction = () => {
        dispatch(borrowToggle());
    }

    //Modal相關

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
        setSelectedMarkerId(markerId); // 在狀態中保存 markerId
    };

    const onConfirm = (MarkerId) => {
        console.log({ borrowed });
        if (borrowed) {
            borrowToggleFunction();
            UmbrellaPlusFunction(MarkerId); // 使用 MarkerId 而不是 MarkerId
            handleConfirm();
        }
        else if (!borrowed && UmbrellaSum[MarkerId] > 0) {
            borrowToggleFunction();
            UmbrellaMinusFunction(MarkerId); // 使用 MarkerId 而不是 MarkerId
            handleConfirm();
        }
        else {
            setfailed(true);
            setModalVisible(false);


        }
    }

    //樓變數
    const UmbrellaSum = useSelector(selectBuilding);
    const UmbrellaMinusFunction = (id) => {
        dispatch(buildingUmbrellaMinus(id));
    }
    const UmbrellaPlusFunction = (id) => {
        dispatch(buildingUmbrellaPlus(id));
    }

    //id的
    const [selectedMarkerId, setSelectedMarkerId] = useState(null);

    //失敗變數
    const [failed, setfailed] = useState(false);

    //Marker大小
    const handleMarkerPress = (markerId) => {
        setSelectedMarkerId(markerId);
    };

    const handleMarkerRelease = () => {
        setSelectedMarkerId(null);
    };
    const snapPoints = useMemo(() => ['4%', '50%'], []);


    //陰影
    // const shadowOpt = {
    //     width: 160,
    //     height: 170,
    //     color: "#000",
    //     border: 2,
    //     radius: 3,
    //     opacity: 0.2,
    //     x: 0,
    //     y: 3,
    //     style: { marginVertical: 5 }
    // };

    return (
        <Box flex={1} >
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
                            title={marker.title}
                            description={marker.description}
                            onPress={() => handleMarkerPress(marker.id)}
                        >
                            <MaterialCommunityIcons
                                name={'map-marker'}
                                size={selectedMarkerId === marker.id ? 70 : 50}
                                color={colormode == "light" ? "#9DD8CD" : "#FFB800"}
                                style={{ elevation: 10 }}
                            />
                            <Callout
                                onPress={() => {
                                    console.log('Button pressed');
                                    console.log('Button pressed for marker:', marker);
                                    onPress = { handleMarkerRelease }
                                    openConfirmationModal(marker.id);
                                }}>
                                <Box width={200} height="auto" alignItems="center">
                                    <Text fontWeight="bold">{marker.title}</Text>
                                    <Text>{marker.description}</Text>
                                    <Text >此地目前有：{UmbrellaSum[marker.id]}把傘</Text>
                                </Box>
                            </Callout>

                        </Marker>
                    ))}
                </MapView>

                <BottomSheet
                    //ref={bottomSheetRef}
                    index={1}
                    snapPoints={snapPoints}
                //onChange={handleSheetChanges}
                >
                    <BottomSheetView >
                        <Text>Awesome 🎉</Text>
                    </BottomSheetView>
                </BottomSheet>



                <ConfirmationModal
                    isVisible={modalVisible}
                    MarkerId={selectedMarkerId} // 傳遞 selectedMarkerId
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景色
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginHorizontal: 20
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
}
);

export default HomeScreen;