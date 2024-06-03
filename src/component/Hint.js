import React, { useEffect, useRef } from "react";
import { Box } from "@gluestack-ui/themed";
import { selectBorrow, borrowToggle } from "../redux/borrowSlice";
import { useDispatch, useSelector } from "react-redux";
import LocationTracker from "./LocationTracker";
import { selectToggle } from "../redux/toggleSlice";
import { TouchableOpacity, Animated } from "react-native";

const Hint = ({ onPress }) => {
  const borrowed = useSelector(selectBorrow);
  const colormode = useSelector(selectToggle);
  const colorAnim = useRef(new Animated.Value(colormode === "light" ? 0 : 1)).current;

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
          height: 50,
          backgroundColor: "white",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: borderColorInterpolation,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LocationTracker />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Hint;
