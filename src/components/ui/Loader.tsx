import React from 'react';
import {
  ActivityIndicator,
  Modal,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { COLORS } from '../../utils/theme';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Loader = () => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  const OVERLAY_COLOR = 'rgba(0, 0, 0, 0.5)';
  return (
    <Modal
      visible={isLoading}
      transparent={true}
      animationType="fade"
      style={styles.modal}
    >
      <StatusBar backgroundColor={OVERLAY_COLOR} />
      <View style={styles.overlay}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={30} color={COLORS.primary} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
