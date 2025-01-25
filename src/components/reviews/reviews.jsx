import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";

import styles from "./../cards-container/cards-container.module.css";

export const Reviews = ({ reviews, restaurantId }) => {
  return (
    <section className={styles.cardsSectionContainer}>
      <ul className={styles.cardsContainer}>
        {reviews.map(({ text, userId, id, rating }) => (
          <li key={id}>
            <Review userId={userId} text={text} rating={rating} />
          </li>
        ))}
      </ul>
      <ReviewForm
        restaurantId={restaurantId}
        userId="a304959a-76c0-4b34-954a-b38dbf310360"
      />
    </section>
  );
};
