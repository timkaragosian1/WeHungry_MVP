import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmEmailScreen = () => {
  const { code, setCode } = useState('');
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onConfirmPressed = (data) => {
    console.warn('confirm code pressed');
    console.log(data);
    navigation.navigate('Home');
  };

  const onResendPressed = () => {
    console.warn('resend code pressed');
  };

  const onSignInPressed = () => {
    console.warn('back to sign in screen pressed');
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>

        <CustomInput
          name={'confirmationCode'}
          placeholder={'Please enter your confirmation code'}
          value={code}
          control={control}
          setValue={setCode}
          secureTextEntry={false}
          rules={{ required: 'Confirmation code is required' }}
        />

        <CustomButton
          text={'Confirm'}
          onPress={handleSubmit(onConfirmPressed)}
        />
        <CustomButton
          text={'Resend Code'}
          onPress={onResendPressed}
          type={'SECONDARY'}
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

export default ConfirmEmailScreen;
