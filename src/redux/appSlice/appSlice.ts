import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-community/async-storage';
import {
  AppState,
  SetUserPayload,
  LoginPayload,
  SignUpPayload,
  SetCategoriesPayload,
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
    setCategories: (state, action: PayloadAction<SetCategoriesPayload>) => {
      state.categories = action.payload.categories;
    },
  },
});

export const {
  toggleIsLoading,
  setUser,
  removeUser,
  setCategories,
} = appSplice.actions;
export const appReducer = appSplice.reducer;

export const loginUser = (data: LoginPayload): AppThunk => async (dispatch) => {
  try {
    dispatch(toggleIsLoading());

    const authUser = await api.login(data);

    await AsyncStorage.setItem('user', JSON.stringify(authUser));
    dispatch(setUser({user: authUser}));
    dispatch(toggleIsLoading());
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

    await AsyncStorage.setItem('user', JSON.stringify(authUser));
    dispatch(setUser({user: authUser}));
    dispatch(toggleIsLoading());
  } catch (error) {
    console.error(error);
  }
};

export const fetchCategories = (): AppThunk => async (dispatch) => {
  try {
    dispatch(toggleIsLoading());
    const categories = await api.fetchCategories();

    dispatch(setCategories({categories}));

    dispatch(toggleIsLoading());
  } catch (error) {
    console.error(error);
  }
};
