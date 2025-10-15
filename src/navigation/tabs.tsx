import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, ProfileStack } from './stacks';
import { TabsParamList } from './types';

const Tab = createBottomTabNavigator<TabsParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};
