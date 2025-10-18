import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HomeHeader = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <View style={styles.container}>
      <Text style={styles.helloStyle}>
        Hello, <Text style={styles.nameStyle}>{user?.firstName}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  helloStyle: {
    fontSize: FONTS.xlg,
    fontFamily: FONTS_FAMILY.medium,
  },
  nameStyle: {
    color: COLORS.primary,
  },
});

export default HomeHeader;
