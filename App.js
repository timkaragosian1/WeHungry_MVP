import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/nagivation';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantsScreen from './src/screens/RestaurantsScreen/RestaurantsScreen';
//import * as SQLite from 'expo-sqlite';

//global.db = SQLite.openDatabase('./assets/db/WeHungryDb.db');

//built using https://www.youtube.com/watch?v=ALnJLbjI7EY

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style='auto' barStyle='dark-content' />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
