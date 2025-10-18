import React, { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/login';
import useLogin from '../../apis/auth/useAuth';
import { CustomButton } from '../ui';
import FormInput from './FormInput';
import { hideLoader, showLoader } from '../../store/loader';
import { setCredentials } from '../../store/auth';
import { COLORS } from '../../utils/theme';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { LoginScreenNavigationProp } from '../../navigation/types';
import { AuthInitialStateInterface, UserInterface } from '../../types/types';

const LoginForm = () => {
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const { handleInputChange, inputs, setErrors, inputsErrors } = useForm();
  const dispatch = useDispatch();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { mutate } = useLogin();

  const showMessage = (message: string) => {
    Alert.alert('Message', message);
  };

  const handleClickOnEye = () => setShowPassword(!showPassword);

  const rightIcon = () => {
    return (
      <Pressable onPress={handleClickOnEye}>
        <Image
          style={styles.rightIconStyle}
          source={
            showPassword
              ? require('../../assets/icons/open-eye.png')
              : require('../../assets/icons/close-eye.png')
          }
        />
      </Pressable>
    );
  };

  const validateForm = () => {
    let isValid = true;
    setErrors('usernameError', '');
    setErrors('passwordError', '');
    if (inputs.username.length === 0) {
      setErrors('usernameError', `Username can't be empty`);
      isValid = false;
    } else if (inputs.username.length < 3) {
      setErrors('usernameError', 'Username must be at least 3 characters');
      isValid = false;
    }
    if (inputs.password.length === 0) {
      setErrors('passwordError', `Password can't be empty`);
      isValid = false;
    }
    return isValid;
  };

  const handleLoginSuccess = (
    data: AuthInitialStateInterface & UserInterface,
  ) => {
    dispatch(
      setCredentials({
        token: data.token,
        user: {
          id: data.id,
          username: data.username,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          image: data.image,
        },
      }),
    );
    dispatch(hideLoader());
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Tabs' }],
      }),
    );
  };

  const handleLoginError = (error: TypeError) => {
    dispatch(hideLoader());
    setApiError(error.message);
  };

  const handleLogin = () => {
    if (!validateForm()) return;
    dispatch(showLoader());
    mutate(
      { username: inputs.username, password: inputs.password },
      {
        onSuccess: handleLoginSuccess,
        onError: handleLoginError,
      },
    );
  };

  return (
    <View>
      {apiError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{apiError}</Text>
        </View>
      )}
      <FormInput
        label="Username"
        placeholder="Enter your username"
        type="username"
        onChangeText={value => handleInputChange('username', value)}
        error={inputsErrors.usernameError}
      />
      <FormInput
        formInoutContainer={styles.formInoutContainer}
        label="Password"
        placeholder="Enter your password"
        type="password"
        onChangeText={value => handleInputChange('password', value)}
        error={inputsErrors.passwordError}
        rightIcon={rightIcon}
        showPassword={showPassword}
      />
      <Pressable onPress={() => showMessage('Forget password coming soon!')}>
        <Text style={styles.forgetPasswordTitle}>Forget password?</Text>
      </Pressable>
      <CustomButton
        style={styles.buttonstyle}
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.error,
    backgroundColor: 'rgba(253, 229, 229, 1)',
    marginBottom: 10,
    borderRadius: 5,
  },
  errorMessage: {
    fontSize: FONTS.xs,
    color: COLORS.error,
    fontFamily: FONTS_FAMILY.regular,
  },
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
  rightIconStyle: {
    width: 16,
    height: 16,
  },
});

export default LoginForm;
