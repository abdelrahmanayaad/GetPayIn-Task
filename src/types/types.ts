import { ImageURISource } from 'react-native';
import { HomeScreenNavigationProp } from '../navigation/types';

export type CategoryType = {
  name: string;
  image: ImageURISource;
  onPress: (navigation: HomeScreenNavigationProp) => void;
};
