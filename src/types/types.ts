import { ImageURISource } from 'react-native';
import { HomeScreenNavigationProp } from '../navigation/types';

// global state types
export interface LoaderInitialStateInterface {
  isLoading: boolean;
}
export interface UserInterface {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
}
export interface AuthInitialStateInterface {
  token: string | null;
  user: UserInterface | null;
  isSuperAdmin: boolean;
  isAuthenticated: boolean;
  isLocked: boolean;
}

// APIs requests types
export interface LoginRequestInterface {
  username: string;
  password: string;
}

//APIs responses types
export interface LoginResponseInterface {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

// Categories types

export type CategoryType = {
  name: string;
  image: ImageURISource;
  onPress: (navigation: HomeScreenNavigationProp) => void;
};
