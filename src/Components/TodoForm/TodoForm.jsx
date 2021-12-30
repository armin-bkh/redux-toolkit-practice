import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../features/TodosSlice/TodosSlice";

const TodoForm = ({ onSubmit, value }) => {
  const [formValue, setFormValue] = useState(value ? value : "");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setFormValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      onSubmit(formValue);
      return;
    }
    if (formValue) {
      dispatch(addTodo({ title: formValue }));
      setFormValue("");
    }
  };
  return (
    <form className="todoForm" onSubmit={submitHandler}>
      <input autoFocus type="text" value={formValue} onChange={changeHandler} />
      <button type="submit">{value ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
