import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkTodo,
  deleteTodo,
  editTodo,
} from "../../features/TodosSlice/TodosSlice";
import TodoCompleteItems from "../TodoCompleteItems/TodoCompleteItems";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const [edit, setEdit] = useState(null);
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const checkHandler = (id) => {
    dispatch(checkTodo({ id }));
  };

  const editHandler = (value) => {
    dispatch(editTodo({ title: value, id: edit.id }));
    setEdit(null);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) =>
          todo.id === edit?.id ? (
            <TodoForm key={todo.id} onSubmit={editHandler} value={todo.value} />
          ) : (
            <TodoItem
              key={todo.id}
              value={todo.value}
              checked={todo.checked}
              onDelete={() => removeHandler(todo.id)}
              onCheck={() => checkHandler(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          )
        )}
      </ul>
      {todos.length ? (
        <TodoCompleteItems />
      ) : (
        <h1 className="title">empty todo</h1>
      )}
    </div>
  );
};

export default TodoList;
