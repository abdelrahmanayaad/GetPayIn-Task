import { Alert } from 'react-native';
import { HomeScreenNavigationProp } from '../navigation/types';
import { CategoryType } from '../types/types';

export const BASE_URL = 'https://dummyjson.com';
export const SUPER_ADMIN_USERNAME = 'emilys';
export const OVERLAY_COLOR = 'rgba(0, 0, 0, 0.5)';
export const INACTIVITY_TIMEOUT = 10000;

export const FONTS = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xlg: 20,
  xxlg: 22,
  xxxlg: 24,
};

export const FONTS_FAMILY = {
  bold: 'Roboto-Bold',
  medium: 'Roboto-Medium',
  regular: 'Roboto-Regular',
  light: 'Roboto-Light',
};

export const categories: CategoryType[] = [
  {
    name: 'Watches',
    image: require('../assets/icons/profile.png'),
    onPress: (navigation: HomeScreenNavigationProp) =>
      navigation.navigate('Category', { category: 'Watches' }),
  },
  {
    name: 'Bags',
    image: require('../assets/icons/profile.png'),
    onPress: (navigation: HomeScreenNavigationProp) =>
      navigation.navigate('Category', { category: 'Bags' }),
  },
  {
    name: 'Clothing',
    image: require('../assets/icons/profile.png'),
    onPress: (navigation: HomeScreenNavigationProp) =>
      navigation.navigate('Category', { category: 'Clothing' }),
  },
  {
    name: 'Shoes',
    image: require('../assets/icons/profile.png'),
    onPress: (navigation: HomeScreenNavigationProp) =>
      navigation.navigate('Category', { category: 'Shoes' }),
  },
  {
    name: 'Electronics',
    image: require('../assets/icons/profile.png'),
    onPress: (navigation: HomeScreenNavigationProp) =>
      navigation.navigate('Category', { category: 'Electronics' }),
  },
  {
    name: 'Beauty',
    image: require('../assets/icons/profile.png'),
    onPress: (navigation: HomeScreenNavigationProp) =>
      navigation.navigate('Category', { category: 'Beauty' }),
  },
  {
    name: 'Sports',
    image: require('../assets/icons/profile.png'),
    onPress: (navigation: HomeScreenNavigationProp) =>
      navigation.navigate('Category', { category: 'Sports' }),
  },
  {
    name: 'Home',
    image: require('../assets/icons/profile.png'),
    onPress: (navigation: HomeScreenNavigationProp) =>
      navigation.navigate('Category', { category: 'Home' }),
  },
  {
    name: 'Toys',
    image: require('../assets/icons/profile.png'),
    onPress: (navigation: HomeScreenNavigationProp) =>
      navigation.navigate('Category', { category: 'Toys' }),
  },
  {
    name: 'More',
    image: require('../assets/icons/profile.png'),
    onPress: () => Alert.alert('Message', 'More category'),
  },
];
