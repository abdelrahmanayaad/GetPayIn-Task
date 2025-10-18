import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Fragment, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { CustomInternetConnection, Loader } from '../components/ui';
import { store } from '../store';

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppContainer>{children}</AppContainer>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <CustomInternetConnection />
      <Loader />
      {children}
    </Fragment>
  );
};

export default Providers;
