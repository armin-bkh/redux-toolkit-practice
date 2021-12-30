import Counter from "./Components/Counter/Counter";
import TodoCompleteItems from "./Components/TodoCompleteItems/TodoCompleteItems";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";

const App = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
      <TodoCompleteItems />
    </div>
  );
};

export default App;
