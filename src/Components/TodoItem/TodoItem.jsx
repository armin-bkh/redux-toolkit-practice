const TodoItem = ({ value, checked }) => {
  return (
    <li className="todoItem">
      <p className={checked ? "checkedItem" : null}>{value}</p>{" "}
      <button>Delete</button>
    </li>
  );
};

export default TodoItem;
