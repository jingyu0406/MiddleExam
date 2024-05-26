// LocationTracker.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const LocationTracker = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    let subscription;

    const startLocationTracking = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      subscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,  // 每5秒获取一次位置
          distanceInterval: 1, // 每1米获取一次位置
        },
        (newLocation) => {
          setLocation(newLocation);
        }
      );
    };

    startLocationTracking();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocationTracker;