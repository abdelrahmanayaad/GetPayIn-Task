import React from 'react';
import MainStack from './src/navigation';
import Provider from './src/provider';
import { StatusBar } from 'react-native';
import { COLORS } from './src/utils/theme';

const App = () => {
  return (
    <Provider>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <MainStack />
    </Provider>
  );
};

export default App;
