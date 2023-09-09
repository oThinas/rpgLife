/** Redux */
import { configureStore } from '@reduxjs/toolkit';
import { avatarsReducer, missionsReducer } from '../reducers';

export const store = configureStore({
  reducer: {
    avatar: avatarsReducer,
    missions: missionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
