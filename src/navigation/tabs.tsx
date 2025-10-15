import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ImageURISource, StyleProp, ViewStyle } from 'react-native';
import { FONTS, FONTS_FAMILY } from '../utils/constants';
import { COLORS } from '../utils/theme';
import { HomeStack, ProfileStack } from './stacks';
import { TabsParamList } from './types';
import { ComponentType, useMemo } from 'react';

const Tab = createBottomTabNavigator<TabsParamList>();

const tabBarStyleOptions: StyleProp<ViewStyle> = {
  height: 72,
  paddingBottom: 10,
  paddingTop: 10,
  borderTopWidth: 0,
  position: 'relative',
  bottom: 0,
};

export const Tabs = () => {
  const APP_TABS: {
    name: keyof TabsParamList;
    component: ComponentType;
    label: string;
    image: ImageURISource;
  }[] = useMemo(
    () => [
      {
        name: 'HomeStack',
        component: HomeStack,
        label: 'Home',
        image: require('../assets/icons/home.png'),
      },
      {
        name: 'ProfileStack',
        component: ProfileStack,
        label: 'Profile',
        image: require('../assets/icons/profile.png'),
      },
    ],
    [],
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray_5d5d5dff,
        tabBarStyle: tabBarStyleOptions,
      }}
    >
      {APP_TABS.map(({ name, image, label, component }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarLabelStyle: {
              fontFamily: FONTS_FAMILY.medium,
              fontSize: FONTS.xs,
            },
            tabBarLabel: label,
            tabBarIcon: ({ color }) => (
              <Image
                source={image}
                style={{ tintColor: color, width: 25, height: 25 }}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
