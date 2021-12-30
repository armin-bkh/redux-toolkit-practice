import { useDispatch, useSelector } from "react-redux";
import { checkTodo, deleteTodo } from "../../features/TodosSlice/TodosSlice";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const checkHandler = (id) => {
    dispatch(checkTodo({ id }));
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          value={todo.value}
          checked={todo.checked}
          onDelete={() => removeHandler(todo.id)}
          onCheck={() => checkHandler(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
