/** Redux */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

/** Interfaces */
import { IAvatar } from '../interfaces';

const initialState: IAvatar = {
  name: 'Edit name',
  level: 1,
  currentXP: 0,
  nextLevelXP: 100,
};

export const avatarSlice = createSlice({
  name: 'avatarsReducer',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },

    addXP(state, action: PayloadAction<number>) {
      state.currentXP += action.payload;

      if (state.currentXP >= state.nextLevelXP) {
        state.level += 1;
        state.currentXP = 0;
        state.nextLevelXP = state.nextLevelXP * 2;
      }
    },
  },
});

export const { setName, addXP } = avatarSlice.actions;
export const avatarsReducer = avatarSlice.reducer;
