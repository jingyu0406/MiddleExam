import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Star from "../components/star"

const AlbumDetail = ({ album }) => {
    const { navigate } = useNavigation();
    return (
        <View style={styles.cardContainerStyle}>
            <View style={styles.cardSectionStyle}>
                <Pressable
                    onPress={() => navigate('Detail', album)}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: album.image }}
                    />
                </Pressable>

            </View>
            <View style={styles.headerContentStyle}>
                {album.star > 0 ? <Star star={album.star} /> : null}
                <Text style={styles.title}>{album.title}</Text>
                <Text style={styles.artist}>{album.artist}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",

    },
    cardContainerStyle: {
        marginLeft: 10,
        marginRight: 5,
        marginTop: 10,

    },
    cardSectionStyle: {
        paddingBottom: 15
    },
    imageStyle: {
        height: 200,
        width: 140
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "bold",
        paddingBottom: 5
    },
    artist: {
        color: "gray"
    }
});

export default AlbumDetail;