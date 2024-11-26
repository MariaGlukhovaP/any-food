import styles from "./card.module.css";

export const Card = ({
  cardTitle,
  cardFirstRowItem,
  cardSecondRowItem,
  cardSideItem,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <h4 className={styles.cardTitle}>{cardTitle}</h4>
        <div className={styles.cardFirstRowItem}>{cardFirstRowItem}</div>
        {cardSecondRowItem && (
          <div className={styles.cardSecondRowItem}>{cardSecondRowItem}</div>
        )}
      </div>
      {cardSideItem && <div>{cardSideItem}</div>}
    </div>
  );
};
