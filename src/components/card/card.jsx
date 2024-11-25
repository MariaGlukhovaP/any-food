import styles from "./card.module.css";

export const Card = ({
  cardTitle,
  cardFirstRowItem,
  cardSideItem,
  cardSecondRowItem,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <h4 className={styles.cardTitle}>{cardTitle}</h4>
        <div className={styles.cardFirstRowItem}>{cardFirstRowItem}</div>
        {cardSecondRowItem && (
          <p className={styles.cardSecondRowItem}>{cardSecondRowItem}</p>
        )}
      </div>
      {cardSideItem && <p>{cardSideItem}</p>}
    </div>
  );
};
