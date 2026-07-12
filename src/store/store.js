import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error('Failed to load state:', err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Failed to save state:', err);
  }
};

export const store = configureStore({
  reducer: {
    task: taskReducer
  },
  preloadedState: loadState()
});

store.subscribe(() => {
  saveState(store.getState()); 
});