import React, { useEffect, useRef } from "react";
import { Box, Text } from "@gluestack-ui/themed";
import { selectBorrow, borrowToggle } from "../redux/borrowSlice";
import { useDispatch, useSelector } from "react-redux";
import LocationTracker from "./LocationTracker";
import { selectToggle } from "../redux/toggleSlice";
import { TouchableOpacity, Animated } from "react-native";

const Hint = ({ onPress }) => {
  const borrowed = useSelector(selectBorrow);
  const colormode = useSelector(selectToggle);
  const colorAnim = useRef(new Animated.Value(colormode === "light" ? 0 : 1)).current;

  const HintText = borrowed ? "借傘中": "未借傘"

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: colormode === "light" ? 0 : 1,
      duration: 1000, // 动画持续时间 (ms)
      useNativeDriver: false,
    }).start();
  }, [colormode]);

  const borderColorInterpolation = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#1DA189", "#FFB800"], // 起始和结束颜色
  });

  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const blink = () => {
      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start(() => blink());
    };

    blink();
  }, [opacityAnim]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        top: "3%",
        left: "50%",
        transform: [{ translateX: -100 }],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          width: 200,
          height: 60,
          backgroundColor: "white",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: borderColorInterpolation,
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Animated.Text
          style={{
            padding:2,
            justifyContent: "center",
            alignItems: "center",
            opacity: opacityAnim 
          }}
        >
          <Text fontSize={15}>{HintText}</Text>
        </Animated.Text>
        <LocationTracker />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Hint;
