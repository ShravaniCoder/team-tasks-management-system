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
        dueDate: action.payload.dueDate, 
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      state.projects.push(newProject);
    },
    toggleProject: (state, action) => {
      const project = state.projects.find((p) => p.id === action.payload.id);
      if (project) {
        const index = project.completedDates.indexOf(action.payload.date)
        if (index > -1) {
          project.completedDates.splice(index, 1)
        } else {
          project.completedDates.push(action.payload.date)
        }
      }
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const { addProject, toggleProject, deleteProject } = projectSlice.actions;
export default projectSlice.reducer;
