import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import { useNetworkStatus } from '../../hooks/global';
import { FONTS, FONTS_FAMILY } from '../../utils/constants';
import { COLORS } from '../../utils/theme';

const CustomInternetConnection = () => {
  const { isOnline } = useNetworkStatus();
  const [lastStatus, setLastStatus] = useState(isOnline);
  const slideAnim = React.useRef(new Animated.Value(-120)).current;

  useEffect(() => {
    if (!isOnline) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (lastStatus === false) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
      const timer = setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -120,
          duration: 400,
          useNativeDriver: true,
        }).start();
      }, 3000);
      return () => clearTimeout(timer);
    }
    setLastStatus(isOnline);
  }, [isOnline, lastStatus, slideAnim]);

  const isSuccess = isOnline;
  const message = isSuccess ? 'You are back online!' : 'No internet connection';
  const backgroundColor = isSuccess
    ? 'rgba(209, 250, 229, 1)'
    : 'rgba(253, 229, 229, 1)';
  const borderColor = isSuccess ? '#10B981' : COLORS.error;
  const textColor = isSuccess ? '#047857' : COLORS.error;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: slideAnim }],
          backgroundColor,
          borderColor,
        },
      ]}
    >
      <Text style={[styles.titleStyle, { color: textColor }]}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 8,
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    zIndex: 9999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
  },
  titleStyle: {
    fontSize: FONTS.xs,
    fontFamily: FONTS_FAMILY.medium,
    textAlign: 'center',
  },
});

export default CustomInternetConnection;
