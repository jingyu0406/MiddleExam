import React from "react";
import { View } from "react-native";
import Albumlist from "../components/AlbumList";
import albumData from "../json/albums.json"

const AlbumScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Albumlist
                list={albumData.Albumlist}
                navigation={navigation}
            />
        </View>
    );
};

export default AlbumScreen;