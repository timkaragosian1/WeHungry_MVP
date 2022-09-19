import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const { username, setUsername } = useState('');
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');
  const { passwordRepeat, setPasswordRepeat } = useState('');
  const { control, handleSubmit, watch } = useForm();

  const pwd = watch('password');

  const navigation = useNavigation();

  const onRegisterPressed = (data) => {
    console.warn(
      `register pressed, adding user ${username} and pass ${password}`
    );
    console.log(data);
    navigation.navigate('ConfirmEmail');
  };

  const onTermsOfUsePressed = () => {
    console.warn('terms of use pressed');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('privacy policy pressed');
  };

  const onSignInPressed = () => {
    console.warn('sign in screen pressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput
          name={'username'}
          placeholder={'Username'}
          control={control}
          secureTextEntry={false}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username cannot be longer than 24 chars',
            },
          }}
        />
        <CustomInput
          name={'email'}
          placeholder={'Email'}
          control={control}
          secureTextEntry={false}
          rules={{
            pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
            required: 'Email is required',
            minLength: {
              value: 3,
              message: 'Email must be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Email cannot be longer than 24 chars',
            },
          }}
        />
        <CustomInput
          name={'password'}
          placeholder={'Password'}
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
            maxLength: {
              value: 50,
              message: 'Password cannot be longer than 50 chars',
            },
          }}
        />
        <CustomInput
          name={'password-repeat'}
          placeholder={'Confirm Password'}
          control={control}
          secureTextEntry={true}
          rules={{
            validate: (value) => value === pwd || 'Passwords do not match',
          }}
        />
        <CustomButton
          text={'Register'}
          onPress={handleSubmit(onRegisterPressed)}
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
          .
        </Text>
        <SocialSignInButtons />
        <CustomButton
          text={'Have an Account? Sign in!'}
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

export default SignUpScreen;
