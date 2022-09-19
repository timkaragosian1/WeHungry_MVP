import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import RecentlySearched from './RecentlySearched';
import SearchBarComponent from '../SearchBar/SearchBarComponent';

import SearchHistorySample from '../../mockdata/SearchHistory';

const recentSearchPressed = (data) => {
  //get search value from props and search
  console.warn(`Search recent result ${data.searchValue}`);
};

const loadMoreResults = () => {
  console.warn('Load More Results Pressed');
};

const RestaurantsSearchResults = (
  props,
  { restaurantSearch = 'Restaurants Near Me' }
) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.recentlySearchedContainer}>
          <Text style={styles.subTitleText}> </Text>
          <Text style={styles.subTitleText}>Recent Searches</Text>
        </View>
        {SearchHistorySample.map((data) => (
          <Pressable onPress={() => recentSearchPressed(data)}>
            <RecentlySearched data={data} />
          </Pressable>
        ))}

        <View style={styles.line} />
        <View style={styles.searchResultsContainer}>
          <Text style={styles.subTitleText}>{restaurantSearch}</Text>
        </View>
        {/* Creating a Search Results Row Template*/}
        <View style={styles.moreResultsRow}></View>
        <View style={styles.line} />

        <Pressable
          style={styles.moreResultsContainer}
          onPress={() => loadMoreResults()}
        >
          <Text style={styles.moreResultsText}>More Restaurants...</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  recentlySearchedContainer: { paddingVertical: 10 },
  searchResultsContainer: { paddingVertical: 10 },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 15,
  },
  subTitleText: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 18,
  },
  moreResultsContainer: { paddingVertical: 5, alignItems: 'center' },
  moreResultsText: { fontWeight: 'bold', fontSize: 14, color: '#ababab' },
  moreResultsRow: { flexDirection: 'row' },
});

export default RestaurantsSearchResults;
