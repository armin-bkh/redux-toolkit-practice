import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/TodosSlice/TodosSlice";

const TodoForm = () => {
  const [formValue, setFormValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setFormValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formValue) dispatch(addTodo({ title: formValue }));
  };
  return (
    <form className="todoForm" onSubmit={submitHandler}>
      <input type="text" value={formValue} onChange={changeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
