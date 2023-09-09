/** Redux */
import { configureStore } from '@reduxjs/toolkit';
import { avatarsReducer, missionsReducer } from '../reducers';

const store = configureStore({
  reducer: {
    avatars: avatarsReducer,
    missions: missionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
