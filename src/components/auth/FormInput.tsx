import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';
import { CustomTextInput } from '../ui';

type FormInputType = {
  formInoutContainer?: ViewStyle;
  label: string;
  placeholder: string;
  type?: 'email' | 'password';
};

const FormInput = ({
  formInoutContainer,
  label,
  placeholder,
  type,
}: FormInputType) => {
  return (
    <View style={[styles.inputContainer, formInoutContainer]}>
      <Text style={styles.labelStyle}>{label}</Text>
      <CustomTextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
      />
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
  inputStyle: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: COLORS.gray_ddd,
    borderRadius: 5,
    fontSize: FONTS.sm,
    color: COLORS.gray_5d5d5dff,
  },
});

export default FormInput;
