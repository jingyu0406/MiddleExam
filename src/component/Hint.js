import React from "react";
import { Box } from "@gluestack-ui/themed";
import { selectBorrow, borrowToggle } from "../redux/borrowSlice";
import { useDispatch, useSelector } from "react-redux";
import LocationTracker from "./LocationTracker";
import { selectToggle } from "../redux/toggleSlice";
import { TouchableOpacity } from "react-native";

const Hint = ({ onPress }) => {
    const borrowed = useSelector(selectBorrow);
    const colormode = useSelector(selectToggle);
    return (
        <TouchableOpacity 
            onPress={onPress}                 
            style={{
                position: 'absolute',
                top: '3%',
                left: '50%',
                transform: [{ translateX: -100 }],
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                width={200}
                height={50}
                backgroundColor="white"
                borderRadius={5}
                borderWidth={1}
                borderColor={colormode == "light" ? "#1DA189" : "#FFB800"}
                justifyContent="center"
                alignItems="center"
            >
                <LocationTracker />
            </Box>
        </TouchableOpacity>
    )
}

export default Hint;