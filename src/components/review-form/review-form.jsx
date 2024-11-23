import { Counter } from "../counter/counter";
import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setName, setText, increase, decrease, clear } = useForm();
  const { name, text, rating } = form;

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <span>Text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <span>Rating</span>
      <Counter value={rating} increase={increase} decrease={decrease} />

      <button type="button" onClick={clear}>
        Clear
      </button>
    </form>
  );
};
