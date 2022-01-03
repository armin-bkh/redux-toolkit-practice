import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getTodos from "../../Services/getTodos";
import postTodo from "../../Services/postTodo";
import putTodo from "../../Services/putTodo";
import deleteTodo from "../../Services/deleteTodo";

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
      return rejectWithValue(error);
    }
  }
);

export const postAsyncTodo = createAsyncThunk(
  "todos/postAsyncTodo",
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
      return rejectWithValue(error);
    }
  }
);

export const putCheckAsyncTodo = createAsyncThunk(
  "todos/putCheckAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await putTodo(payload.id, {
        checked: payload.checked,
        value: payload.title,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteAsyncTodo = createAsyncThunk(
  "todos/deleteAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      await deleteTodo(payload.id);
      return payload;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const putValueAsyncTodo = createAsyncThunk(
  "todos/putValueAsyncTodo",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await putTodo(payload.id, { value: payload.title });
      return data;
    } catch (error) {
      rejectWithValue(error);
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
    [getAsyncTodos.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload.message,
        loading: false,
        todos: [],
      };
    },
    [getAsyncTodos.fulfilled]: (state, { payload }) => {
      return { ...state, error: null, loading: false, todos: payload };
    },
    [postAsyncTodo.fulfilled]: (state, { payload }) => {
      state.todos.push(payload);
    },
    [putCheckAsyncTodo.fulfilled]: (state, { payload }) => {
      const selectedTodo = state.todos.find((todo) => todo.id === payload.id);
      selectedTodo.checked = payload.checked;
    },
    [deleteAsyncTodo.fulfilled]: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
    [putValueAsyncTodo.fulfilled]: (state, { payload }) => {
      console.log(payload);
      const selectedTodo = state.todos.find((todo) => todo.id === payload.id);
      selectedTodo.value = payload.value;
    },
  },
});

export const { addTodo, checkTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
