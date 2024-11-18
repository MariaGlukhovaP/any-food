// import { useState } from "react";

// const hardCalculations = () => {
//   let sum = 0;
//   for (let i = 0; i < 1000; i++) {
//     sum++;
//   }
//   return 0;
// };

// export const Count = ({ onChange }) => {
//   const [value, setValue] = useState(() => hardCalculations());

//   let amount = 0;

//   const increase = () => {
//     setValue((currentValue) => currentValue + 1);
//     amount++;
//     onChange(value);
//   };

//   const decrease = () => {
//     setValue(value - 1);
//     amount--;
//     onChange(value);
//   };

//   return (
//     <div>
//       <button onClick={increase}>+</button>
//       <div>
//         value - {value} amount - {amount}
//       </div>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// };
import { useCount } from "./use-count";

export const Count = () => {
  const { value, increase, decrease } = useCount();
  return (
    <div>
      <button onClick={increase}>+</button>
      <div>value - {value}</div>
      <button onClick={decrease}>-</button>
    </div>
  );
};
