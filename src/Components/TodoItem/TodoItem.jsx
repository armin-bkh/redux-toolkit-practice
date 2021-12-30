const TodoItem = ({ value, checked, onDelete, onCheck, onEdit }) => {
  return (
    <li className="todoItem">
      <p onClick={onCheck} className={checked ? "checkedItem" : null}>
        {value}
      </p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
