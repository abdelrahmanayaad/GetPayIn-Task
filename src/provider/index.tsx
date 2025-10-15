import { NavigationContainer } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react';

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <AppContainer>{children}</AppContainer>
    </NavigationContainer>
  );
};

const AppContainer = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Provider;
