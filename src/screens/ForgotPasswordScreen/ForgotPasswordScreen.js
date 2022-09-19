import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = () => {
  const { username, setUsername } = useState('');
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onConfirmPressed = (data) => {
    console.warn('confirm forgot password pressed');
    console.log(data);
    navigation.navigate('NewPassword');
  };

  const onSignInPressed = () => {
    console.warn('back to sign in screen pressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Password Reset</Text>

        <CustomInput
          placeholder={'Username'}
          name={'username'}
          control={control}
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
          rules={{
            required: 'Username is required',
          }}
        />

        <CustomButton
          text={'Confirm'}
          onPress={handleSubmit(onConfirmPressed)}
        />
        <CustomButton
          text={'Back to Sign In'}
          onPress={onSignInPressed}
          type={'TERTIARY'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: { alignItems: 'center', padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    marginBottom: 15,
  },
  text: { color: 'gray', marginVertical: 10 },
  link: { color: '#FDB075' },
});

export default ForgotPasswordScreen;
