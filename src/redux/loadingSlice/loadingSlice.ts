import {createSlice} from '@reduxjs/toolkit';
import {LoadingState} from './loadingSlice.types';

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    toggleIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const {toggleIsLoading} = loadingSlice.actions;

export const loading = loadingSlice.reducer;
