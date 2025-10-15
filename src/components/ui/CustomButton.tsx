import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';

type CustomButtonType = {
  title: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
};

const CustomButton = ({
  title,
  style,
  titleStyle,
  ...props
}: CustomButtonType & PressableProps) => {
  return (
    <Pressable {...props} style={[styles.buttonStyle, style]}>
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  titleStyle: {
    fontSize: FONTS.md,
    color: COLORS.white,
    fontFamily: FONTS_FAMILY.bold,
  },
});

export default CustomButton;
