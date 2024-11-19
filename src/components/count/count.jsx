import { useState } from "react";

export const Count = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    value < 5 && setValue(value + 1);
  };

  const decrease = () => {
    value > 0 && setValue(value - 1);
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      {value}
      <button onClick={decrease}>-</button>
    </div>
  );
};
