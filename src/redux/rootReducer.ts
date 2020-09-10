// import {combineReducers} from '@reduxjs/toolkit';
import {appReducer} from './appSlice/appSlice';

const rootReducer = appReducer;

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
