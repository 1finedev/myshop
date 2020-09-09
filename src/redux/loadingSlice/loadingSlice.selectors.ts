import {useSelector} from 'react-redux';
import {LoadingState} from './loadingSlice.types';
import {RootState} from '../rootReducer';

export const useGetLoadingState = (): LoadingState => {
  return useSelector((state: RootState) => state.loading);
};
