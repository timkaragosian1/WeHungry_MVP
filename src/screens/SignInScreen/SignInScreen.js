import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import Logo from '../../../assets/images/logo_SMALL.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSignInPressed = (data) => {
    //validate user code goes here
    console.log(data);

    navigation.navigate('Home', {
      username: data.username,
    });
  };

  const onForgotPasswordPressed = () => {
    console.warn('forgot password pressed');
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    console.warn('sign up pressed');
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        <CustomInput
          name={'username'}
          placeholder={'Username'}
          control={control}
          secureTextEntry={false}
          rules={{ required: 'Username is required' }}
        />
        <CustomInput
          name={'password'}
          placeholder={'Password'}
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password must be at least 3 characters long',
            },
          }}
        />

        <CustomButton
          text={'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
        />
        <CustomButton
          text={'Forgot Password?'}
          onPress={onForgotPasswordPressed}
          type={'TERTIARY'}
        />
        <SocialSignInButtons />
        <CustomButton
          text={"Don't have an account? Create one!"}
          onPress={onSignUpPressed}
          type={'TERTIARY'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '75%',
    maxHeight: 300,
    borderRadius: 5,
    marginBottom: 15,
  },
  root: { alignItems: 'center', padding: 20 },
});

export default SignInScreen;
