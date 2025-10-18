import { createSlice } from '@reduxjs/toolkit';
import { AuthInitialStateInterface } from '../types/types';
import { SUPER_ADMIN_USERNAME } from '../utils/constants';

const initialState: AuthInitialStateInterface = {
  token: null,
  user: null,
  isSuperAdmin: false,
  isAuthenticated: false,
  isLocked: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isSuperAdmin =
        action.payload.user.username === SUPER_ADMIN_USERNAME;
    },
    restoreSession: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.isSuperAdmin =
        action.payload.user.username === SUPER_ADMIN_USERNAME;
      state.isLocked = true;
    },
    lockApp: state => {
      state.isLocked = true;
    },
    unlockApp: state => {
      state.isLocked = false;
    },
    logout: state => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.isSuperAdmin = false;
      state.isLocked = false;
    },
  },
});

export const { setCredentials, restoreSession, lockApp, unlockApp, logout } =
  auth.actions;
export default auth.reducer;
