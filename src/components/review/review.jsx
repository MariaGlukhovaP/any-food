import { Card } from "../card/card";

export const Review = ({ user, text, rating }) => {
  return (
    <Card
      cardTitle={text}
      cardFirstRowItem={user}
      cardSideItem={`${rating} ★`}
    />
  );
};
