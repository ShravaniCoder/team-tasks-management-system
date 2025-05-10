import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";


const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.warn("Failed to load state:", err);
    return undefined;
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.warn("Failed to save state:", err);
  }
};


const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
  preloadedState,
});


store.subscribe(() => {
  saveState({
    project: store.getState().project,
  });
});
