import React, { JSX } from 'react';
import {
  Image,
  ImageURISource,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';
import { CustomTextInput } from '../ui';

type FormInputType = {
  formInoutContainer?: ViewStyle;
  label: string;
  placeholder: string;
  type?: 'username' | 'password';
  error?: string;
  rightIcon?: () => JSX.Element;
  showPassword?: boolean;
  onChangeText: (value: string) => void;
};

const FormInput = ({
  formInoutContainer,
  label,
  placeholder,
  type,
  error,
  rightIcon,
  onChangeText,
  showPassword,
  ...props
}: FormInputType) => {
  return (
    <View style={[styles.inputContainer, formInoutContainer]}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={styles.inputContainerStyle}>
        <CustomTextInput
          {...props}
          style={styles.inputStyle}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={type === 'password' && showPassword}
        />
        {rightIcon && rightIcon()}
      </View>
      {error && <Text style={styles.errorMessageStyle}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  labelStyle: {
    fontSize: FONTS.sm,
    color: COLORS.primary,
    fontFamily: FONTS_FAMILY.regular,
    marginBottom: 10,
  },
  inputContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: COLORS.gray_ddd,
    borderRadius: 5,
    fontSize: FONTS.sm,
    color: COLORS.gray_5d5d5dff,
  },
  inputStyle: {
    flex: 1,
  },
  errorMessageStyle: {
    fontSize: FONTS.xs,
    color: COLORS.error,
    fontFamily: FONTS_FAMILY.regular,
  },
});

export default FormInput;
