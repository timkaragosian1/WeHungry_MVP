import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('Facebook sign in pressed');
  };

  const onSignInGoogle = () => {
    console.warn('Google sign in pressed');
  };

  const onSignInApple = () => {
    console.warn('Apple sign in pressed');
  };

  return (
    <>
      <CustomButton
        text={'Sign In with Facebook'}
        onPress={onSignInFacebook}
        bgcolor='#E7EAF4'
        fgcolor='#4765A9'
      />
      <CustomButton
        text={'Sign In with Google'}
        onPress={onSignInGoogle}
        bgcolor='#FAE9EA'
        fgcolor='#DD4D44'
      />
      <CustomButton
        text={'Sign In with Apple'}
        onPress={onSignInApple}
        bgcolor='#e3e3e3'
        fgcolor='#363636'
      />
    </>
  );
};

export default SocialSignInButtons;
