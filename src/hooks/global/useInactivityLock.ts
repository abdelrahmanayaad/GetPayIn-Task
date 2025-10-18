import { AppState, AppStateStatus } from 'react-native';
import { lockApp } from '../../store/auth';
import { useEffect, useRef } from 'react';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { INACTIVITY_TIMEOUT } from '../../utils/constants';

export const useInactivityLock = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isLocked } = useSelector(
    (state: RootState) => state.auth,
  );
  const inactivityTimer = useRef<number | null>(null);
  const appState = useRef(AppState.currentState);

  const resetInactivityTimer = () => {
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
    if (isAuthenticated && !isLocked) {
      inactivityTimer.current = setTimeout(() => {
        dispatch(lockApp());
      }, INACTIVITY_TIMEOUT);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    const subscription = AppState.addEventListener(
      'change',
      (nextAppState: AppStateStatus) => {
        if (
          appState.current.match(/active/) &&
          nextAppState.match(/inactive|background/)
        ) {
          // the app in background
          dispatch(lockApp());
        }
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          // the app is active
          resetInactivityTimer();
        }
        appState.current = nextAppState;
      },
    );
    resetInactivityTimer();
    return () => {
      subscription.remove();
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
    };
  }, [isAuthenticated, isLocked]);
  return { resetInactivityTimer };
};
