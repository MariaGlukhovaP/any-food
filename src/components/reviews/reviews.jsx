import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";

import styles from "../section/section.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <section>
      <h3 className={styles.sectionTitle}>Reviews</h3>
      <ul className={styles.sectionContainer}>
        {reviews.map(({ id, user, text, rating }) => (
          <li key={id}>
            <Review user={user} text={text} rating={rating} />
          </li>
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
};
