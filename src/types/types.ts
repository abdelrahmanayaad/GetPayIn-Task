import { ImageURISource } from 'react-native';

export type CategoryType = {
  name: string;
  image: ImageURISource;
  onPress: () => void;
};
