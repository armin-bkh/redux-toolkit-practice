import { useState } from "react";

const TodoForm = () => {
  const [formValue, setFormValue] = useState("");

  const changeHandler = (e) => {
    setFormValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className="todoForm" onSubmit={submitHandler}>
      <input type="text" value={formValue} onChange={changeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
