import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const HomeBanner = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bannerStyle}
        source={require('../../assets/images/offer banner.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  bannerStyle: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default HomeBanner;
