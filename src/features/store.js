import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice/CounterSlice";
import TodosSlice from "./TodosSlice/TodosSlice";

const store = configureStore({
  reducer: {
    counter: CounterSlice,
    todos: TodosSlice,
  },
});

export default store;
