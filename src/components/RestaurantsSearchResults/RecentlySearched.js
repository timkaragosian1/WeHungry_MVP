import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const pressedRow = (searchValue) => {
  console.warn(searchValue);
};

const RecentlySearched = (props) => {
  console.log(props);
  const searchValue = props.data.searchValue;
  const searchDate = props.data.searchDate;
  const locationType = props.data.locationType;

  console.log(searchDate);
  console.log(locationType);

  return (
    <View style={styles.recentlySearchedRow}>
      <MaterialIcons
        name='history'
        size={24}
        color='black'
        style={{ marginRight: 20 }}
      />
      <Text style={{ fontSize: 16 }}>{searchValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recentlySearchedRow: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
});

export default RecentlySearched;
