import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getTodos from "../../Services/getTodos";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTodos();
      return data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

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
  extraReducers: {
    [getAsyncTodos.pending]: (state, action) => {
      return { ...state, error: null, loading: true, todos: [] };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return {
        ...state,
        error: action.error.message,
        loading: false,
        todos: [],
      };
    },
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, error: null, loading: false, todos: action.payload };
    },
  },
});

export const { addTodo, checkTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
