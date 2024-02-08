import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decreamentHandler = () => {
    setCount(count - 1);
  };
  const increamentHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decreamentHandler}>-</button>
      <button onClick={increamentHandler}>+</button>
    </div>
  );
};

export default Counter;
