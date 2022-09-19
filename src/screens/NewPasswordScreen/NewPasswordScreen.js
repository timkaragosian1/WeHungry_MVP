import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const NewPasswordScreen = () => {
  const { code, setCode } = useState('');
  const { newPassword, setNewPassword } = useState('');
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = (data) => {
    console.warn('submit new password pressed');
    console.log(data);
    navigation.navigate('SignIn');
  };

  const onSignInPressed = () => {
    console.warn('back to sign in screen pressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Set New Password</Text>

        <CustomInput
          placeholder={'Code'}
          name={'password'}
          control={control}
          value={code}
          setValue={setCode}
          secureTextEntry={false}
          rules={{
            required: 'Code is required',
          }}
        />

        <CustomInput
          name={'password'}
          control={control}
          placeholder={'Enter your new password'}
          value={newPassword}
          setValue={setNewPassword}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password must be at least 3 characters long',
            },
          }}
        />

        <CustomButton text={'Submit'} onPress={handleSubmit(onSubmitPressed)} />
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

export default NewPasswordScreen;
