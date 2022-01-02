import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkTodo,
  deleteTodo,
  editTodo,
  getAsyncTodos,
} from "../../features/TodosSlice/TodosSlice";
import TodoCompleteItems from "../TodoCompleteItems/TodoCompleteItems";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const [edit, setEdit] = useState(null);
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

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

  if (loading) return <h1>loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <ul>
        {todos &&
          todos.length &&
          todos.map((todo) =>
            todo.id === edit?.id ? (
              <TodoForm
                key={todo.id}
                onSubmit={editHandler}
                value={todo.value}
              />
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
      {todos && todos.length ? (
        <TodoCompleteItems />
      ) : (
        <h1 className="title">empty todo</h1>
      )}
    </div>
  );
};

export default TodoList;
