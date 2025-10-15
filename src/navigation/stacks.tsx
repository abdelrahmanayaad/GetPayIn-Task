import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Login } from '../screens/login';
import {
  AuthStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
} from './types';
import { Profile } from '../screens/profile';

const AuthStackNavigator = createStackNavigator<AuthStackParamList>();
const HomeStackNavigator = createStackNavigator<HomeStackParamList>();
const ProfileStackNavigator = createStackNavigator<ProfileStackParamList>();

export const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <AuthStackNavigator.Screen name="Login" component={Login} />
    </AuthStackNavigator.Navigator>
  );
};

export const HomeStack = () => {
  return (
    <HomeStackNavigator.Group screenOptions={{ headerShown: false }}>
      <HomeStackNavigator.Screen name="Home" component={Home} />
    </HomeStackNavigator.Group>
  );
};

export const ProfileStack = () => {
  return (
    <ProfileStackNavigator.Group screenOptions={{ headerShown: false }}>
      <ProfileStackNavigator.Screen name="Profile" component={Profile} />
    </ProfileStackNavigator.Group>
  );
};
