import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { value: "coding", checked: false, id: 1 },
  { value: "sleep", checked: false, id: 2 },
  { value: "school", checked: false, id: 3 },
  { value: "movie", checked: true, id: 4 },
  { value: "study", checked: false, id: 5 },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        value: action.payload.title,
        checked: false,
        id: new Date().getTime(),
      });
    },
    checkTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].checked = !state[index].checked;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {},
  },
});

export const { addTodo, checkTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
