import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '../screens/login';
import { AuthStack } from './stacks';
import { Tabs } from './tabs';
import { RootStackParamList } from './types';

const RootStack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="AuthStack" component={AuthStack} />
      <RootStack.Screen name="Tabs" component={Tabs} />
    </RootStack.Navigator>
  );
};

export default MainStack;
