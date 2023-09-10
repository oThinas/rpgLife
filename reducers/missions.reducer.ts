import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMission } from '../interfaces';
import { getMissionIndex } from '../utils/getMissionIndex';

const initialState: IMission[] = [];

export const missionsSlice = createSlice({
  name: 'missionsReducer',
  initialState,
  reducers: {
    addMission(state, action: PayloadAction<IMission>) {
      state.push(action.payload);
    },

    completeMission(state, action: PayloadAction<number>) {
      const index = getMissionIndex(state, action.payload);
      if (index !== -1) {
        state[index].completed = true;
      }
    },

    deleteMission(state, action: PayloadAction<number>) {
      const index = getMissionIndex(state, action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    editMission(state, action: PayloadAction<IMission>) {
      const index = getMissionIndex(state, action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },

    setMissionsList(state, action: PayloadAction<IMission[]>) {
      state.length = 0;

      action.payload.forEach((mission) => {
        state.push(mission);
      });
    },
  },
});

export const {
  addMission,
  completeMission,
  deleteMission,
  editMission,
  setMissionsList,
} = missionsSlice.actions;

export const missionsReducer = missionsSlice.reducer;
