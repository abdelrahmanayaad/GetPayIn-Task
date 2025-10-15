import React from 'react';
import { View } from 'react-native';
import { CustomButton } from '../ui';
import FormInput from './FormInput';

const LoginForm = () => {
  return (
    <View>
      <FormInput label="Email" placeholder="Enter your Email" />
      <FormInput label="Password" placeholder="Enter your password" />
      <CustomButton title="Login" onPress={() => console.log('Login')} />
    </View>
  );
};

export default LoginForm;
