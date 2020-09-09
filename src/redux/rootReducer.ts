import {combineReducers} from '@reduxjs/toolkit';
import {user} from './userSlice';
import {loading} from './loadingSlice';

const rootReducer = combineReducers({
  user,
  loading,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
