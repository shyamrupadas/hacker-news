import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storySlice from './storySlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  storySlice: storySlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
