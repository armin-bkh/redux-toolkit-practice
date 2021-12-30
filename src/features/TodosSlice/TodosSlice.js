import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { value: "coding", checked: false, id: 1 },
    { value: "sleep", checked: false, id: 2 },
    { value: "school", checked: false, id: 3 },
    { value: "movie", checked: true, id: 4 },
    { value: "study", checked: false, id: 5 },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        value: action.payload.title,
        checked: false,
        id: new Date().getTime(),
      });
    },
    checkTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].checked = !state.todos[index].checked;
    },
    deleteTodo: (state, action) => {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    },
    editTodo: (state, action) => {},
  },
});

export const { addTodo, checkTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
