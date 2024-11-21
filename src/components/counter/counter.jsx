export const Counter = ({ increase, decrease, value }) => {
  return (
    <div>
      <button onClick={increase}>+</button>
      {value}
      <button onClick={decrease}>-</button>
    </div>
  );
};
