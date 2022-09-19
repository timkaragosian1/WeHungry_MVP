import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RestaurantsScreen from '../RestaurantsScreen/RestaurantsScreen';
import FindFoodScreen from '../FindFoodScreen/FindFoodScreen';
import AccountScreen from '../AccountScreen/AccountScreen';
import FriendsScreen from '../FriendsScreen/FriendsScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const Drawer = createDrawerNavigator();
var localParams = '';

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Restaurants' component={RestaurantsScreen} />
      <Drawer.Screen name='Find Food' component={FindFoodScreen} />
      <Drawer.Screen name='Friends' component={FriendsScreen} />
      <Drawer.Screen name='Profile' component={ProfileScreen} />
      <Drawer.Screen name='Account' component={AccountScreen} />
      <Drawer.Screen name='Settings' component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const HomeScreen = (params) => {
  localParams = params.route.params;
  return (
    <>
      <DrawerNavigation />
    </>
  );
};

export default HomeScreen;
