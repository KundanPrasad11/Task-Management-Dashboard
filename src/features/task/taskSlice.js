import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      if (typeof index === 'number' && index >= 0 && index < state.length) {
        state[index] = updatedTask;
      }
    },
    deleteTask: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    }
  }
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;