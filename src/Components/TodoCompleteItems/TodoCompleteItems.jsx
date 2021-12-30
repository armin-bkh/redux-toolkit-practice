import { useSelector } from "react-redux";

const TodoCompleteItems = () => {
  const { todos } = useSelector((state) => state.todos);
  return (
    <div className="complete">
      complete todos {todos.filter((todo) => todo.checked).length}
    </div>
  );
};

export default TodoCompleteItems;
