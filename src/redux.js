import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire le marcher", done: true },
    { id: 2, text: "Preparer de la nouriture", done: false },
    { id: 3, text: "Faire une siest", done: false },
  ],
  reducers: {
    addTask: (state, action) => {
      // {type: 'todo/addtask', payload:'text'}
      const ids = [];
      state.forEach((el) => {
        ids.push(el.id);
      });
      ids.sort();
      const id = ids.pop()
      const nTask = {
        id: id + 1,
        text: action.payload,
        done: false,
      };
      nTask.text != "" && state.push(nTask);
    },

    doTask: (state, action) => {
      const task = state.find((el) => el.id === action.payload);
      task.done = !task.done;
    },

    delTask: (state, action) => {
      state = state.filter((el) => el.id !== action.payload);
      return state;
    },
  },
});

export const { addTask, doTask, delTask } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
