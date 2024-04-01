import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const DetailScreen = ({navigation})=>{
    return(

        <View style={styles.container}>
            <Text textAlign="center">
                DetailScreen
            </Text>
        </View>

    )
}
export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
