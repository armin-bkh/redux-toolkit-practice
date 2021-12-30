const TodoItem = ({ value, checked, onDelete, onCheck }) => {
  return (
    <li className="todoItem">
      <p onClick={onCheck} className={checked ? "checkedItem" : null}>
        {value}
      </p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
