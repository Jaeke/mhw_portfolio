import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = {
  isSideDrawerVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setSideDrawerVisible(state) {
      state.isSideDrawerVisible = !state.isSideDrawerVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
