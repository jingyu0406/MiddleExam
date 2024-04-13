import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList, SectionList } from "react-native";
import sections from "../json/albums.json";
import AlbumDetail from "./Albumdetail";


const Albumlist = ({ navigation }) => {
    const renderSectionHeader = ({ section }) => (
        <>
            {/* 開頭 */}
            <Text style={styles.sectionHeader}>{section.title}</Text>

            {/* 橫向排列 */}
            <FlatList
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <AlbumDetail album={item} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.title}
            />

        </>
    );
    const renderItem = () => null;

    return (
        // 渲染直向
        <SectionList
            sections={sections}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
    );
};

const styles = StyleSheet.create({
    sectionHeader: {
        fontFamily: "Roboto",
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 10
    },

    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 10
    },


    imageStyle: {
        height: 300,
        width: null
    }
});

export default Albumlist;