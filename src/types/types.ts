import { ImageURISource } from 'react-native';

export type categoryType = {
  name: string;
  image: ImageURISource;
  onPress: () => void;
};
