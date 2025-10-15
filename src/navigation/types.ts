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
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type SplashScreenNavigationProp =
  StackNavigationProp<RootStackParamList>;
