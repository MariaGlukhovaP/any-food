import { useState } from "react";
import { Counter } from "../counter/counter";

export const DishCounter = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  const increase = () => setValue(Math.min(value + 1, max));
  const decrease = () => setValue(Math.max(value - 1, min));

  return <Counter increase={increase} decrease={decrease} value={value} />;
};
