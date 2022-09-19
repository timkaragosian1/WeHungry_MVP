import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import SearchBarComponent, {
  triggerSearch,
} from '../../components/SearchBar/SearchBarComponent';
import RestaurantsMapView from '../../components/RestaurantsMapView/RestaurantsMapView';
import RestaurantsSearchResults from '../../components/RestaurantsSearchResults/RestaurantsSearchResults';

const RestaurantsScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState(null);

  /*useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log(text);*/

  const [searchValue, setSearchValue] = useState('');

  triggerSearch('Detroit, MI, USA');

  return (
    <View>
      <SearchBarComponent searchValue={'Test Default'} />
      <RestaurantsSearchResults />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default RestaurantsScreen;
