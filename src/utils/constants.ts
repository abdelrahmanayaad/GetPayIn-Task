import { CategoryType } from '../types/types';

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
    onPress: () => console.log('Watches'),
  },
  {
    name: 'Bags',
    image: require('../assets/icons/profile.png'),
    onPress: () => console.log('Bags'),
  },
  {
    name: 'Clothing',
    image: require('../assets/icons/profile.png'),
    onPress: () => console.log('Clothing'),
  },
  {
    name: 'Shoes',
    image: require('../assets/icons/profile.png'),
    onPress: () => console.log('Shoes'),
  },
  {
    name: 'Electronics',
    image: require('../assets/icons/profile.png'),
    onPress: () => console.log('Electronics'),
  },
  {
    name: 'Beauty',
    image: require('../assets/icons/profile.png'),
    onPress: () => console.log('Beauty'),
  },
  {
    name: 'Sports',
    image: require('../assets/icons/profile.png'),
    onPress: () => console.log('Sports'),
  },
  {
    name: 'Home',
    image: require('../assets/icons/profile.png'),
    onPress: () => console.log('Home'),
  },
  {
    name: 'Toys',
    image: require('../assets/icons/profile.png'),
    onPress: () => console.log('Toys'),
  },
  {
    name: 'More',
    image: require('../assets/icons/profile.png'),
    onPress: () => console.log('More Categories'),
  },
];
