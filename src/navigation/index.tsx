import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '../screens/login';
import { AuthStack } from './stacks';
import { Tabs } from './tabs';
import { RootStackParamList } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const RootStack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAuthenticated ? 'Tabs' : 'Splash'}
    >
      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="Tabs" component={Tabs} />
      <RootStack.Screen name="AuthStack" component={AuthStack} />
    </RootStack.Navigator>
  );
};

export default MainStack;
