import React from 'react';
import MainStack from './src/navigation';
import Providers from './src/provider';
import { StatusBar } from 'react-native';
import { COLORS } from './src/utils/theme';

const App = () => {
  return (
    <Providers>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <MainStack />
    </Providers>
  );
};

export default App;
