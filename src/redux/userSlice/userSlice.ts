import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState, LoginPayload, SignUpPayload} from './userSlice.types';
import {AppThunk} from '../store';
import {toggleIsLoading} from '../loadingSlice';

const initialState: UserState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      const {email} = action.payload;
      state.user = {email, fullName: 'John Doe'};
    },
    signup: (state, action: PayloadAction<SignUpPayload>) => {
      state.user = action.payload;
    },
  },
});

export const {login, signup} = userSlice.actions;
export const user = userSlice.reducer;

export const loginUser = (data: LoginPayload): AppThunk => async (dispatch) => {
  try {
    dispatch(toggleIsLoading());

    setTimeout(function () {
      dispatch(toggleIsLoading());
      dispatch(login(data));
    }, 2000);
  } catch (error) {
    console.error(error);
  }
};

export const signupUser = (data: SignUpPayload): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(toggleIsLoading());

    setTimeout(function () {
      dispatch(toggleIsLoading());
      dispatch(signup(data));
    }, 2000);
  } catch (error) {
    console.error(error);
  }
};
