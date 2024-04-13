import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking } from 'react-native';
import Star from "../components/star"
import { Center } from '@gluestack-ui/themed';
const DetailScreen = ({ route }) => {
    const { title,
        artist,
        url,
        image,
        star,
        descriptions,
    } = route.params;
    return (
        <ScrollView style={styles.ScrollViewstyle}>
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: image
                    }}
                />



                <Text>
                    <Text style={styles.title}>{title}</Text>
                </Text>
                <Text>
                    <Text style={styles.artist}>{artist}</Text>
                </Text>
                <View style={styles.starSection}>
                    {star ? <Star star={star} /> : null}
                    {star ? <Text style={styles.score}>
                        {star}.0 <Text style={styles.scoreNum}>/ 5.0</Text>
                    </Text> : null}
                </View>
                <Text style={styles.descriptionsstyle}>
                    <Text style={styles.descriptions}>{'\t'}{descriptions}</Text>
                </Text>
                <View style={styles.buttonstyle}>

                    <Button style={styles.button}
                        onPress={() => Linking.openURL(url)}
                        title="Buy Now For 46.99"
                        color="#6200EE"
                        borderRadius="4"
                    />
                </View>


            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ScrollViewstyle: {
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageStyle: {
        height: 300,
        width: 210,
        marginTop: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
    artist: {
        fontSize: 14,
        color: "gray"
    },
    starSection: {
        flexDirection: "row",
    },
    score: {
        marginTop: 10,
        marginLeft: 10,
        fontWeight: "500"
    },
    scoreNum: {
        fontWeight: "300"
    },
    priceStyle: {
        fontFamily: "Roboto",
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 40,
        marginVertical: 20,

    },
    descriptionsstyle: {
        marginTop: 10,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 20,
        textAlign: "center"
    },
    descriptions: {
        lineHeight: 24,
        fontFamily: "Roboto",
        fontSize: 14,
    },
    buttonstyle: {
        width: 200,
        height: 46,


    },

});

export default DetailScreen;