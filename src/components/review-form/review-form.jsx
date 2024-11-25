import { Counter } from "../counter/counter";
import { useForm } from "./use-form";

import styles from "./review-form.module.css";

export const ReviewForm = () => {
  const { form, setName, setText, increase, decrease, clear } = useForm();
  const { name, text, rating } = form;

  return (
    <div className={styles.formSectionContainer}>
      <h3 className={styles.formTitle}>Leave your review</h3>
      <form
        className={styles.formContainer}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className={styles.formItem}>
          <span className={styles.inputTitle}>Name</span>
          <input
            className={styles.formInput}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className={styles.formItem}>
          <span className={styles.inputTitle}>Review</span>
          <textarea
            className={styles.formInput}
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <div className={styles.formItem}>
          <span className={styles.inputTitle}>Rating</span>
          <Counter value={rating} increase={increase} decrease={decrease} />
        </div>

        <button className={styles.submitButton} type="submit" onClick={clear}>
          Publish
        </button>
      </form>
    </div>
  );
};
