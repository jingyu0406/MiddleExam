import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity ,Modal} from "react-native";
import { Box, GluestackUIProvider, Center, HStack, Text, FlatList, Button, Pressable } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import MapView, { Callout, Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import mapMarker from "../json/mapMarker.json";
import { useDispatch, useSelector } from "react-redux";
import { selectToggle, toggleColorMode } from "../redux/toggleSlice";
import { selectBorrow, borrowToggle } from "../redux/borrowSlice";
import { selectDuXing, DuXingUmbrellaMinus ,DuXingUmbrellaPlus} from "../redux/building/DuXingSlice";



const ConfirmationModal = ({ isVisible, onConfirm, onCancel }) => { // 將 Modal 改為 ConfirmationModal
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onCancel}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do you want to proceed?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={onConfirm} style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onCancel} style={styles.button}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

const HomeScreen = () => {

    //Map
    const [region, setRegion] = useState({
        longitude: 121.544637,
        latitude: 25.024624,
        longitudeDelta: 0.001,
        latitudeDelta: 0.002,
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
    };
  
    const openConfirmationModal = () => {
      setModalVisible(true);
    };
    //篤行變數
    const DuXingUmbrellaSum = useSelector(selectDuXing);
    const DuXingUmbrellaMinusFunction=()=>{
        dispatch(DuXingUmbrellaMinus());
    }
    const DuXingUmbrellaPlusFunction=()=>{
        dispatch(DuXingUmbrellaPlus());
    }




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
                            title={marker.title}
                            description={marker.description}
                        >
                            <Callout                                         
                            onPress={() => {
                                console.log('Button pressed');
                                openConfirmationModal();
                            }}>
                                <Box width={200} height="auto" alignItems="center">
                                    <Text fontWeight="bold">{DuXingUmbrellaSum}</Text>
                                    <Text>{marker.description}</Text>
                                </Box>
                            </Callout>

                        </Marker>
                    ))}
                </MapView>
                <ConfirmationModal
                     isVisible={modalVisible}
                     onConfirm={()=>{
                        borrowToggleFunction();
                        
                        console.log({ borrowed });
                        if(borrowed){
                            DuXingUmbrellaPlusFunction();
                        }
                        else{
                            DuXingUmbrellaMinusFunction();
                        }
                        handleConfirm();
                     }}
                     onCancel={handleCancel}
                   />
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
        marginHorizontal:20
      },
      buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
      },
}
);

export default HomeScreen;