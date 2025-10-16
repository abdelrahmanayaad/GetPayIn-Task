import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  AuthStack: undefined;
  Tabs: undefined;
};

export type TabsParamList = {
  HomeStack: undefined;
  ProfileStack: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Category: {
    category: string;
  };
  Products: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type SplashScreenNavigationProp =
  StackNavigationProp<RootStackParamList>;

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;
export type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList>;

export type CategoryRouteProp = RouteProp<HomeStackParamList, 'Category'>;
