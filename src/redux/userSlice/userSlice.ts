import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  UserState,
  LoginPayload,
  SignUpPayload,
  SetUserPayload,
} from './userSlice.types';
import {AppThunk} from '../store';
import {toggleIsLoading} from '../loadingSlice';
import * as api from '../../api';

const initialState: UserState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SetUserPayload>) => {
      state.user = action.payload.user;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const {setUser} = userSlice.actions;
export const user = userSlice.reducer;

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
