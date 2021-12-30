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
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo.checked = !selectedTodo.checked;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo.value = action.payload.title;
    },
  },
});

export const { addTodo, checkTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
