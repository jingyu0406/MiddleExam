import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useAnimatedColor = (isLightMode, lightColor, darkColor) => {
  const animatedValue = useRef(new Animated.Value(isLightMode ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isLightMode ? 0 : 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isLightMode]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [lightColor, darkColor],
  });

  return backgroundColor;
};

export default useAnimatedColor;