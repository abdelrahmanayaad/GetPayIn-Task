import React from 'react';
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';

const LoginHeader = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={[{ height: height * 0.25 }, styles.headerStyle]}>
      <Image
        style={styles.logoStyle}
        source={require('../../assets/logo/GetPayIn full logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: '100%',
    height: 100,
  },
});

export default LoginHeader;
