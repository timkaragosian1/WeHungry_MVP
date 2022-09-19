import React, { useState, setState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const setSearchBarValue = (newSearchValue) => {};

export function triggerSearch(newSearchValue) {
  console.warn(`triggered search of: ${newSearchValue}`);

  //this.GooglePlacesAutocomplete.TextInput.textInputProps.value = newSearchValue;
  //this.GooglePlacesAutocomplete.onPress;
}

const SearchBarComponent = (triggeredValue = null) => {
  const [searchValue, updateSearchValue] = useState('');
  const [searchResultsData, setSearchResultsData] = useState('');
  const [searchResultsDetails, setSearchResultsDetails] = useState('');

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        selectProps={{}}
        placeholder='Search Restaurants, Cities, or Zip code'
        enablePoweredByContainer={false}
        autoFocus={true}
        textInputProps={{
          value: searchValue,
          onChangeText: (text) => updateSearchValue(text),
        }}
        styles={{
          container: styles.container,
          textInput: styles.searchBox,
          autocompleteContainer: styles.autocompleteContainer,
          separator: styles.separator,
          listView: styles.listView,
        }}
        onPress={(data, details = null) => {
          console.log(data, details);
          //Logic to save search value in history if not the last search value
          //Logic to see if results are restaurant (if yes, show profile. If no, show restaurants nearby)
        }}
        query={{
          key: 'AIzaSyC7O9bbD1QZlKt20lmuVQOi7j4P332DMcg',
          language: 'en',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '11%',
    padding: 5,
    width: '100%',
    zIndex: 1,
  },
  searchBox: {
    backgroundColor: 'white',
    width: '97%',
    borderColor: '#c7c7c7',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    fontSize: 15,
  },
  textInput: {
    padding: 5,
    backgroundColor: '#eee',
    marginVertical: 0,
    marginLeft: 20,
  },
  autocompleteContainer: {
    top: 0,
    left: 10,
    right: 10,
    backgroundColor: '#eee',
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 55,
    marginLeft: 10,
    backgroundColor: '#eee',
  },
});

export default SearchBarComponent;
