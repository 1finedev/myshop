import {AppState} from './appSplice.types';
import {useSelector} from 'react-redux';

export const useGetUser = (): AppState['user'] => {
  return useSelector((state: AppState) => state.user);
};

export const useGetIsLoading = (): AppState['isLoading'] => {
  return useSelector((state: AppState) => state.isLoading);
};
