import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useColormodeChange = (colormode, fromColor, toColor) => {
  const colorAnim = useRef(new Animated.Value(colormode === 'light' ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: colormode === 'light' ? 0 : 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [colormode]);

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [fromColor, toColor],
  });

  return backgroundColor ;
};

export default useColormodeChange;
