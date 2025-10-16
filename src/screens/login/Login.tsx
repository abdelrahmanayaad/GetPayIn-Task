import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm, LoginHeader } from '../../components/auth';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <LoginHeader />
          <Text style={styles.exploreTitleStyle}>
            Let's login for explore products
          </Text>
          <LoginForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  exploreTitleStyle: {
    fontSize: FONTS.md,
    fontFamily: FONTS_FAMILY.regular,
    color: COLORS.gray_aaa,
    marginBottom: 30,
  },
});

export default Login;
