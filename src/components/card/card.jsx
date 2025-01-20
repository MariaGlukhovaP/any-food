import styles from "./card.module.css";

export const Card = ({
  cardImg,
  alt,
  cardTitle,
  cardFirstRowItem,
  cardSecondRowItem,
  cardSideItem,
}) => {
  return (
    <div className={styles.cardContainer}>
      {cardImg && (
        <div className={styles.imgContainer}>
          <img className={styles.cardImg} src={cardImg} alt={alt} />
        </div>
      )}
      <div>
        <h4 className={styles.cardTitle}>{cardTitle}</h4>
        <div className={styles.cardFirstRowItem}>{cardFirstRowItem}</div>
        {cardSecondRowItem && (
          <div className={styles.cardSecondRowItem}>{cardSecondRowItem}</div>
        )}
      </div>
      {cardSideItem && (
        <div className={styles.cardSideItem}>{cardSideItem}</div>
      )}
    </div>
  );
};
