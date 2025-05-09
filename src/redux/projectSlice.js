import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;
