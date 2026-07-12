import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { updatedTask } = action.payload;
      const idx = state.findIndex((task) => task.createdAt === updatedTask.createdAt);
      if (idx !== -1) {
        state[idx] = updatedTask;
      }
    },
    deleteTask: (state, action) => {
      const createdAt = action.payload;
      const index = state.findIndex((task) => task.createdAt === createdAt);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;