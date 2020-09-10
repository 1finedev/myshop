import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  AppState,
  SetUserPayload,
  LoginPayload,
  SignUpPayload,
} from './appSplice.types';
import * as api from '../../api';
import {AppThunk} from '../store';

const initialState: AppState = {
  isLoading: false,
  user: null,
  categories: null,
};

const appSplice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleIsLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setUser: (state, action: PayloadAction<SetUserPayload>) => {
      state.user = action.payload.user;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const {toggleIsLoading, setUser, removeUser} = appSplice.actions;
export const appReducer = appSplice.reducer;

export const loginUser = (data: LoginPayload): AppThunk => async (dispatch) => {
  try {
    dispatch(toggleIsLoading());

    const authUser = await api.login(data);

    dispatch(toggleIsLoading());
    dispatch(setUser({user: authUser}));
  } catch (error) {
    console.error(error);
  }
};

export const signupUser = (data: SignUpPayload): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(toggleIsLoading());

    const authUser = await api.signup(data);

    dispatch(toggleIsLoading());
    dispatch(setUser({user: authUser}));
  } catch (error) {
    console.error(error);
  }
};
