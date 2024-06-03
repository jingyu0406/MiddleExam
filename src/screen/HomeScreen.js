import React, { useEffect, useMemo, useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Box, GluestackUIProvider, Text, Pressable, Image } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
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
import searchMap from "../json/searchMap.json";
import { useRoute } from "@react-navigation/native";
import ColormodeChange from "../component/colorchange/ColormodeChange";
import useColormodeChange from "../component/colorchange/ColormodeChange";
import { selectIsLoggedIn } from "../redux/accountSlice";
import GoLogin from "../component/GoLogin";


const HomeScreen = ({ navigation }) => {
    const colormode = useSelector(selectToggle);
    const dispatch = useDispatch();
    const [markers, setMarkers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [LoginVisible, setLoginVisible] = useState(false);

    const [selectedMarkerId, setSelectedMarkerId] = useState(null);
    const [failed, setFailed] = useState(false);
    const borrowed = useSelector(selectBorrow);
    const UmbrellaSum = useSelector(selectBuilding);
    const nearest = useSelector(selectNearest);
    const mapRef = useRef(null);
    const route = useRoute();

    const isLoggedIn = useSelector(selectIsLoggedIn); //查看登入狀態



    useEffect(() => {
        setMarkers(mapMarker);
    }, []);

    useEffect(() => {
        if (route.params?.myChoose && route.params?.itemId) {
            const { myChoose, itemId } = route.params;
            mapRef.current.animateToRegion({
                ...myChoose,
                latitudeDelta: 0.0001,
                longitudeDelta: 0.0001,
            });
    
            console.log(itemId); // 处理 itemId
            handleMarkerPress(itemId)
        }
    }, [route.params?.myChoose, route.params?.itemId]);


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
        setLoginVisible(false);
    };

    const openConfirmationModal = (markerId) => {
        setModalVisible(true);
        setSelectedMarkerId(markerId);
    };

    const GoLoginConfirm=()=>{
        setLoginVisible(false);
        navigation.navigate("個人");
        console.log(navigation)
    }

    const onConfirm = (MarkerId) => {
        if (borrowed) {
            if (5 - UmbrellaSum[MarkerId] > 0) {
                borrowToggleFunction();
                UmbrellaPlusFunction(MarkerId);
                handleConfirm();
            }
            else {
                setFailed(true);
                setModalVisible(false);
            }
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
            handleMarkerPress(nearest)
        } else {
            console.error('targetCoordinate is not defined');
        }
    };

    const backgroundColor = useColormodeChange(colormode, '#73DBC8', '#6B6B6B');
    const colorAnim = useRef(new Animated.Value(colormode === 'light' ? 0 : 1)).current;

    const FadeInView = ({ trigger, fromColor, toColor, duration, children, style }) => {

        useEffect(() => {
            Animated.timing(
                colorAnim,
                {
                    toValue: trigger ? 1 : 0,
                    duration: duration || 3000,
                    useNativeDriver: false,
                }
            ).start();
        }, [trigger]);

        const backgroundColorInterpolation = colorAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [fromColor, toColor]
        });

        return (
            <Animated.View
                style={{
                    ...style,
                    borderColor: backgroundColorInterpolation,
                }}
            >
                {children}
            </Animated.View>
        );
    };
    const FadeInView2 = ({ trigger, fromColor, toColor, duration, children, style }) => {

        useEffect(() => {
            Animated.timing(
                colorAnim,
                {
                    toValue: trigger ? 1 : 0,
                    duration: duration || 3000,
                    useNativeDriver: false,
                }
            ).start();
        }, [trigger]);

        const backgroundColorInterpolation = colorAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [fromColor, toColor]
        });

        return (
            <Animated.View
                style={{
                    ...style,
                    backgroundColor: backgroundColorInterpolation,
                }}
            >
                {children}
            </Animated.View>
        );
    };

    const trigger = colormode === "light" ? 0 : 1;




    return (

        <GluestackUIProvider config={config}>
            <MapView
                ref={mapRef}
                initialRegion={{
                    longitude: 121.544637,
                    latitude: 25.024624,
                    longitudeDelta: 0.001,
                    latitudeDelta: 0.002,
                }}
                provider={PROVIDER_GOOGLE}
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


                        <FadeInView
                            trigger={trigger}
                            fromColor="#9DD8CD"
                            toColor="#FFB800"
                            duration={1000}
                            style={styles.markerTest}
                        >
                            <Text style={styles.text}>{borrowed?5-UmbrellaSum[marker.id]:UmbrellaSum[marker.id]}</Text>
                        </FadeInView>


                    </Marker>
                ))}
            </MapView>

            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
            >
                <BottomSheetView>
                    <Box justifyContent="center" alignItems="center" marginVertical={3} >
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
                                <Text fontSize={20}>可還： {5 - UmbrellaSum[selectedMarkerId]} 把傘</Text>
                            </Box>
                        </Box>
                        <Pressable
                            onPress={() => {
                                if (isLoggedIn) {
                                    handleMarkerRelease();
                                    handleButtonPress();
                                    openConfirmationModal(selectedMarkerId);
                                } else {
                                    setLoginVisible(true);
                                }
                            }}>
                            <FadeInView2
                                trigger={trigger}
                                fromColor="#9DD8CD"
                                toColor="#FFB800"
                                duration={1000}
                                style={styles.BottomSheetButton}
                            >
                                <Text fontSize={25}>{bottomSheetText}</Text>
                            </FadeInView2>

                        </Pressable>
                    </Box>
                </BottomSheetView>
            </BottomSheet>

            <Hint onPress={handleCenterCoordinate} />

            {/* <View style={styles.container}>
                <FadeInView
                    trigger={trigger}
                    fromColor="red"
                    toColor="blue"
                    duration={3000}
                    style={styles.fadeInView}
                >
                    <Text style={styles.text}>React Native Animated</Text>
                </FadeInView>

            </View> */}

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
                borrowed={borrowed}

            />
            <GoLogin
                isVisible={LoginVisible}
                MarkerId={selectedMarkerId}
                borrowed={borrowed}
                onConfirm={GoLoginConfirm}
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
            <View style={styles.SearchButton}>
                <TouchableOpacity onPress={() => {navigation.navigate('search')
                ,handleButtonPress()}}>
                    <MaterialCommunityIcons
                        name='magnify'
                        size={20}
                        color={"black"}
                    />
                </TouchableOpacity>
            </View>
        </GluestackUIProvider>

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
        top: "8%",
        right: "3%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
    },
    SearchButton: {
        position: "absolute",
        top: "1%",
        right: "3%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fadeInView: {
        padding: 20,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        color: 'gray',
    },
    markerTest: {
        backgroundColor: "white",

        width: 50,
        height: 50,
        borderWidth: 3,
        borderRadius: 10000,
        alignItems: "center",
        justifyContent: "center"

    },
    BottomSheetButton: {
        padding: 10,
        paddingHorizontal: 100,
        borderRadius: 20
    }
});

export default HomeScreen;
