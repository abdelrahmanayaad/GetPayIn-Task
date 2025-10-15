import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomButton } from '../ui';
import FormInput from './FormInput';

const LoginForm = () => {
  return (
    <View>
      <FormInput label="Email" placeholder="Enter your Email" type="email" />
      <FormInput
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <CustomButton
        style={styles.buttonstyle}
        title="Login"
        onPress={() => console.log('Login')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonstyle: {
    marginBottom: 20,
  },
});

export default LoginForm;
