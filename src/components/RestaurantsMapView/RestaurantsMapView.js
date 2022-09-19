import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const RestaurantsMapView = () => {
  const initialRegion = {
    latitude: 42.618,
    longitude: -83.359,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  var initialLong = -83;
  var initialLang = 42;

  return (
    <View>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{
            latitude: initialLang || location.latitude,
            longitude: initialLong || location.longitude,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default RestaurantsMapView;
