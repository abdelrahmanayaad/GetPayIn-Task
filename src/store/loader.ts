import { createSlice } from '@reduxjs/toolkit';
import { LoaderInitialStateInterface } from '../types/types';

const initialState: LoaderInitialStateInterface = {
  isLoading: false,
};

const loader = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: state => {
      state.isLoading = true;
    },
    hideLoader: state => {
      state.isLoading = false;
    },
  },
});

export const { showLoader, hideLoader } = loader.actions;
export default loader.reducer;
