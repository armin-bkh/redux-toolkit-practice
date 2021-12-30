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
    addTodoHandler: (state, action) => {
      state.push({
        value: action.payload,
        checked: false,
        id: new Date().getTime(),
      });
    },
    checkTodoHandler: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state[index].checked = !state[index].checked;
    },
    deleteTodoHandler: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodoHandler: (state, action) => {},
  },
});

export const {
  addTodoHandler,
  checkTodoHandler,
  editTodoHandler,
  deleteTodoHandler,
} = todosSlice.actions;
export default todosSlice.reducer;
