import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const newProject = {
        id: Date.now().toString(),
        title: action.payload.title,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      state.projects.push(newProject)
    },
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;
