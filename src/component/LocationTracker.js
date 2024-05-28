import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';

import mapMarker from'../json/mapMarker.json'

import { useSelector , useDispatch} from 'react-redux';
import { selectNearest ,setNearest} from '../redux/nearestSlice';


const LocationTracker = () => {
  const [location, setLocation] = useState(null);
  const [nearestLocation, setNearestLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch =useDispatch()
  const handleSetNearest = (id) => {
    dispatch(setNearest(id));
  };

  useEffect(() => {
    const startLocationTracking = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
      findNearestLocation(currentLocation.coords);
    };

    startLocationTracking();
  }, []);

  const findNearestLocation = (currentLocation) => {
    let minDistance = Infinity;
    let nearestCoord = null;

    mapMarker.forEach(coord => {
      const distance = getDistance(
        { latitude: currentLocation.latitude, longitude: currentLocation.longitude },
        { latitude: coord.latitude, longitude: coord.longitude }
      );

      if (distance < minDistance) {
        minDistance = distance;
        nearestCoord = coord;

      }
    });

    setNearestLocation(nearestCoord);
    handleSetNearest(nearestCoord.id);
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location && nearestLocation) {
    text = `您現在在 ${nearestLocation.title} 嗎`;
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