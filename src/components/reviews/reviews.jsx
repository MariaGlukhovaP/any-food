import { Card } from "../card/card";
import { Subtitle } from "../subtitle/subtitle";

import styles from "./../cards-container/cards-container.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <section>
      <Subtitle subtitle="Reviews" />
      <ul className={styles.cardsContainer}>
        {reviews.map(({ id, user, text, rating }) => (
          <li key={id}>
            <Card
              cardTitle={text}
              cardFirstRowItem={user}
              cardSideItem={`${rating} ★`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
