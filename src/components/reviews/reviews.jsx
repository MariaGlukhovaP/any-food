import { ReviewContainer } from "../review/review-container";
import { Subtitle } from "../subtitle/subtitle";

import styles from "./../cards-container/cards-container.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <section>
      <Subtitle subtitle="Reviews" />
      <ul className={styles.cardsContainer}>
        {reviews.map((reviewId) => (
          <li key={reviewId}>
            <ReviewContainer id={reviewId} />
          </li>
        ))}
      </ul>
    </section>
  );
};
