import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = [
    { value: "coding", checked: false, id: 1 },
    { value: "sleep", checked: false, id: 2 },
    { value: "school", checked: false, id: 3 },
    { value: "movie", checked: true, id: 4 },
    { value: "study", checked: false, id: 5 },
  ];
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} value={todo.value} checked={todo.checked} />
      ))}
    </div>
  );
};

export default TodoList;
