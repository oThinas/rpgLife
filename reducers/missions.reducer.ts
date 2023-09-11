/** Core */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** Utils */
import { getMissionIndex } from '../utils';

/** Interfaces */
import { IMission } from '../interfaces';

const initialState: IMission[] = [];

export const missionsSlice = createSlice({
  name: 'missionsReducer',
  initialState,
  reducers: {
    addMission(state, action: PayloadAction<IMission>) {
      state.push(action.payload);
    },

    completeMission(state, action: PayloadAction<number>) {
      const newList = [...state];
      const index = getMissionIndex(newList, action.payload);
      if (index !== -1) {
        newList[index].completed = true;
      }

      state.length = 0;
      newList.forEach((mission) => {
        if (mission.completed) {
          return;
        }

        state.push(mission);
      });
    },

    deleteMission(state, action: PayloadAction<number>) {
      const index = getMissionIndex(state, action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    setMissionsList(state, action: PayloadAction<IMission[]>) {
      state.length = 0;

      action.payload.forEach((mission) => {
        if (mission.completed) {
          return;
        }

        state.push(mission);
      });
    },
  },
});

export const {
  addMission,
  completeMission,
  deleteMission,
  setMissionsList,
} = missionsSlice.actions;

export const missionsReducer = missionsSlice.reducer;
