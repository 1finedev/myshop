import {useSelector} from 'react-redux';
import {RootState} from '../rootReducer';
import {UserState} from './userSlice.types';

export const useGetUserState = (): UserState => {
  return useSelector((state: RootState) => state.user);
};

export const useGetUser = (): UserState['user'] => {
  return useSelector((state: RootState) => state.user.user);
};

export const useGetToken = (): UserState['token'] => {
  return useSelector((state: RootState) => state.user.token);
};
