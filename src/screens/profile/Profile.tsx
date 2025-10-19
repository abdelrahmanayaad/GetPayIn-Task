import React from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton } from '../../components/ui';
import { COLORS } from '../../utils/theme';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '../../navigation/types';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo/GetPayIn logo.png')}
          resizeMode="cover"
        />
      </View>
      <CustomButton
        onPress={() =>
          Alert.alert('Logout', 'Are you sure you want to logout?', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Logout',
              onPress: () => {
                dispatch(logout());
                navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'AuthStack' }],
                  }),
                );
              },
              style: 'destructive',
            },
          ])
        }
        title="Logout"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: '40%',
  },
  logoContainer: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    backgroundColor: COLORS.gray_f6f6f6ff,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 200,
  },
});

export default Profile;
