import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
  Animated,
  StatusBar,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import useBiometrics from '../../hooks/global/useBiometrics';
import { unlockApp } from '../../store/auth';
import { FONTS, FONTS_FAMILY, OVERLAY_COLOR } from '../../utils/constants';
import { COLORS } from '../../utils/theme';

interface LockOverlayProps {
  visible: boolean;
}

export const LockOverlay = ({ visible }: LockOverlayProps) => {
  const dispatch = useDispatch();
  const { isAvailable, authenticate } = useBiometrics();
  const [showPasswordInput, setShowPasswordInput] = useState(true);
  const [password, setPassword] = useState('');
  const [slideAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      slideAnim.setValue(0);
    }
  }, [visible]);

  const handleBiometricAuth = async () => {
    const result = await authenticate('Unlock the app'); // the title in fingerprint popoup Unlock the app
    if (result.success) {
      dispatch(unlockApp());
      setShowPasswordInput(false);
      setPassword('');
    } else {
      setShowPasswordInput(true);
    }
  };

  const handlePasswordAuth = () => {
    if (password.length > 0) {
      dispatch(unlockApp());
      setPassword('');
      setShowPasswordInput(false);
    } else {
      Alert.alert('Error', 'Please enter a password');
    }
  };

  const handleUseBiometrics = () => {
    setShowPasswordInput(false);
    handleBiometricAuth();
  };

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0],
  });

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <StatusBar backgroundColor={OVERLAY_COLOR} />
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateY }],
            },
          ]}
        >
          <Text style={styles.title}>App Locked</Text>
          <Text style={styles.subtitle}>
            {showPasswordInput
              ? 'Enter your password to unlock'
              : 'Use biometrics to unlock the app'}
          </Text>
          {showPasswordInput ? (
            <View style={styles.fullWidth}>
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                autoFocus={true}
                onSubmitEditing={handlePasswordAuth}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={handlePasswordAuth}
              >
                <Text style={styles.buttonText}>Unlock</Text>
              </TouchableOpacity>
              {isAvailable && (
                <TouchableOpacity
                  style={styles.biometricButton}
                  onPress={handleUseBiometrics}
                >
                  <Text style={styles.biometricText}>
                    Use Fingerprint Instead
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ) : (
            <View style={styles.fullWidth}>
              <TouchableOpacity
                style={styles.biometricMainButton}
                onPress={handleBiometricAuth}
              >
                <Image
                  style={styles.fingerprintIcon}
                  source={require('../../assets/icons/fingerprint.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.linkButton}
                onPress={() => setShowPasswordInput(true)}
              >
                <Text style={styles.linkText}>Use Password Instead</Text>
              </TouchableOpacity>
            </View>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: OVERLAY_COLOR,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: FONTS.xlg,
    fontFamily: FONTS_FAMILY.bold,
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.gray_5d5d5dff,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: FONTS.md,
  },
  fullWidth: {
    width: '90%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.gray_ddd,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: COLORS.white,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: FONTS.md,
    color: COLORS.white,
  },
  biometricButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  biometricText: {
    fontSize: FONTS.sm,
    fontFamily: FONTS_FAMILY.medium,
  },
  biometricMainButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 5,
    paddingVertical: 10,
  },
  biometricMainText: {
    fontSize: FONTS.md,
    fontFamily: FONTS_FAMILY.medium,
  },
  linkButton: {
    alignItems: 'center',
  },
  linkText: {
    fontSize: FONTS.sm,
    fontFamily: FONTS_FAMILY.medium,
  },
  fingerprintIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});
