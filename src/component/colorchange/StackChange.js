import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useStackChange = (trigger, fromColor, toColor, duration = 3000) => {
  const colorAnim = useRef(new Animated.Value(trigger === 'light' ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: trigger === 'light' ? 0 : 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [trigger, duration]);

  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [fromColor, toColor]
  });

  return { backgroundColor };
};

export default useStackChange;
