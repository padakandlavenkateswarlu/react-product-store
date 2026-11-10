import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button className="btn btn-primary" onClick={increment}>
  Increment
</button>
      <button className="btn btn-danger" onClick={decrement}>
  Decrement
</button>
      <button className="btn btn-warning" onClick={reset}>
  Reset
</button>
    </div>
  );
};