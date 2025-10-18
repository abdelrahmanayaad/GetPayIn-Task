import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Fragment, PropsWithChildren } from 'react';
import { Provider, useSelector } from 'react-redux';
import { CustomInternetConnection, Loader } from '../components/ui';
import { RootState, store } from '../store';
import { LockOverlay } from '../components/auth/LockOverlay';
import { useInactivityLock } from '../hooks/global/useInactivityLock';

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
  const { isLocked } = useSelector((state: RootState) => state.auth);
  useInactivityLock();
  return (
    <Fragment>
      <CustomInternetConnection />
      <Loader />
      <LockOverlay visible={isLocked} />
      {children}
    </Fragment>
  );
};

export default Providers;
