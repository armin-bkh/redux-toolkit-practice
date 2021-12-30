import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/CounterSlice/CounterSlice";

const Counter = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => dispatch(increment(inputValue ? Number(inputValue) : 1))}
      >
        increment
      </button>
      <button
        onClick={() => dispatch(decrement(inputValue ? Number(inputValue) : 1))}
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
