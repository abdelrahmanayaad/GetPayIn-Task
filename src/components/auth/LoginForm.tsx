import React from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { CustomButton } from '../ui';
import FormInput from './FormInput';
import { Text } from 'react-native-gesture-handler';
import { COLORS } from '../../utils/theme';

const LoginForm = () => {
  return (
    <View>
      <FormInput label="Email" placeholder="Enter your Email" type="email" />
      <FormInput
        formInoutContainer={styles.formInoutContainer}
        label="Password"
        placeholder="Enter your password"
        type="password"
      />
      <Pressable
        onPress={() => Alert.alert('Message', 'Forget password coming soon!')}
      >
        <Text style={styles.forgetPasswordTitle}>Forget password?</Text>
      </Pressable>
      <CustomButton
        style={styles.buttonstyle}
        title="Login"
        onPress={() => Alert.alert('Message', 'Navigate to home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formInoutContainer: {
    marginBottom: 5,
  },
  buttonstyle: {
    marginBottom: 20,
  },
  forgetPasswordTitle: {
    textAlign: 'right',
    color: COLORS.primary,
    textDecorationLine: 'underline',
    marginBottom: 40,
  },
});

export default LoginForm;
