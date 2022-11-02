import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storySlice from './storySlice';

const rootReducer = combineReducers({
  storySlice: storySlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
