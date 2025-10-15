import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

const CustomTextInput = ({ ...props }: TextInputProps) => {
  return <TextInput {...props} />;
};

export default CustomTextInput;
