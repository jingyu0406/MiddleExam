import React from "react";
import { View, Text, Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode, toggleColorMode } from "../redux/counterSlice";
const AccountScreen = () => {
    const colorMode = useSelector(selectColorMode);

    return (
        <View >
            <Text style={{ backgroundColor: colorMode == "light" ? "white" : "black" }}>
                Current Color Mode: {colorMode}
            </Text>
        </View>

    );

};

export default AccountScreen;