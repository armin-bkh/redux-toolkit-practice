import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getTodos from "../../Services/getTodos";
import postTodo from "../../Services/postTodo";

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

export const postAsyncTodo = createAsyncThunk(
  "todos/postAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const newTodo = {
        value: payload.title,
        id: new Date().getTime(),
        checked: false,
      };
      const { data } = await postTodo(newTodo);
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
    [postAsyncTodo.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    },
    [postAsyncTodo.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo, checkTodo, editTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
