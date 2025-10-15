import React from 'react';
import MainStack from './src/navigation';
import Provider from './src/provider';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Provider>
      <StatusBar barStyle={'dark-content'} />
      <MainStack />
    </Provider>
  );
};

export default App;
